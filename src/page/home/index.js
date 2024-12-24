/* eslint-disable no-unused-vars */
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {routes} from '../../const';

const routesData = routes.filter(item => !item.hidden);
export default function HomePage({navigation, route}) {
  useEffect(() => {
    if (route.params?.post) {
      console.log('post', route.params?.post);
    }
  }, [route.params?.post]);

  // 接收上一个页面的传递参数
  return (
    <View style={styles.container}>
      <FlashList
        data={routesData}
        estimatedItemSize={44}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.name);
              }}>
              <View style={styles.item}>
                <Text>
                  {index + 1}:{item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  item: {
    height: 44,
    padding: 12,
  },
  itemSeparator: {
    height: 0,
    color: '#bdbdbd',
    width: '95%',
    alignSelf: 'center',
    lineHeight: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    margin: StyleSheet.hairlineWidth,
    opacity: 0.4,
  },
});
