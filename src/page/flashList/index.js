/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Button, Dimensions} from 'react-native';
import React, {useState, useMemo, useCallback, useEffect, useRef} from 'react';
import {FlashList} from '@shopify/flash-list';
import {getFollows} from '../../api/user';
import useFlashHook from './useFlashHook';

export default function FlashListPage() {
  const [params, setParams] = useState({});
  const {refreshing, onRefresh, onEndReached, list, setPageNumber} =
    useFlashHook(getFollows, params);

  return (
    <View style={styles.container}>
      <Button
        title="搜索"
        onPress={() => {
          setPageNumber(1);
          setParams({
            q: 'test',
          });
        }}
      />
      <FlashList
        estimatedItemSize={44}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1} // 触发加载更多的阈值
        data={list}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.item}>
              <Text>{item.login}</Text>
            </View>
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
