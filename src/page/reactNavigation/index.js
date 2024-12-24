/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRequest} from 'ahooks';
import {getFollows} from '../../api/user';

export default function NavigationPage({navigation, route}) {
  const {navigate, push, goBack, popToTop} = navigation;
  const {params} = route;
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  /*
   (1) navigate 跳转页面
      + 导航栈中不存在该页面时（路由表中配置）, 会跳转该页面
      + 导航栈中存在该页面时，重复跳转无反应（push 会新打开一个相同的页面）
      + 导航栈中存在的，跳转不同名称的页面，会返回（执行类似返回的操作）

  */
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="increament"
          onPress={() => {
            //
            setCount(c => c + 1);
          }}
        />
      ),
    });
  }, [navigation]);

  // (2) 网络数据请求接口
  const {loading, run} = useRequest(getFollows, {
    manual: true,
    onError: err => {
      console.log('err', err);
    },
    onSuccess: res => {
      setList(res);
    },
  });

  return (
    <View>
      <Text>
        index-{params?.name}-{count}
      </Text>
      <Button
        title="重复跳转（navigator）"
        onPress={() => {
          navigate('Navigation');
        }}
      />
      <Button
        title="导航栈中已存在home的跳转（navigator）"
        onPress={() => {
          navigate({
            name: 'HomePage',
            params: {
              post: 'post sth text',
            },
            merge: true,
          });
        }}
      />
      <Button
        disabled={loading}
        title="重复跳转Navigation（push）"
        onPress={() => {
          push('Navigation');
        }}
      />
      <Button
        title="返回"
        onPress={() => {
          goBack();
        }}
      />
      <Button
        title="返回初始页"
        onPress={() => {
          popToTop();
        }}
      />

      <Button
        title="获取请求数据"
        onPress={() => {
          run();
        }}
      />
      {list.map((item, index) => (
        <Text key={index}>{item.login}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
