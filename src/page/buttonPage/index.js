/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {Text, View, StyleSheet, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

/* 
  hitSlop:  扩大点击区域
*/

export default function ButtonPage({navigation, route}) {
  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{bottom: 10, top: 10, left: 10, right: 10}}
        style={({pressed}) => [styles.baseStyle, {opacity: pressed ? 0.5 : 1}]}
        onPress={() => {
          console.log('点击了按钮');
        }}
        onPressIn={() => {
          console.log('按下了按钮');
        }}
        onPressOut={() => {
          console.log('松开了按钮');
        }}
        onLongPress={() => {
          console.log('长按了按钮');
        }}>
        <Text>按钮</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  baseStyle: {
    width: 80,
    height: 40,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
