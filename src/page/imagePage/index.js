/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {Image, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
// 本地图片资源
const tabImage = require('../../image/tab.png');

export default function ImagePage({navigation, route}) {
  return (
    <View>
      <Image source={tabImage} style={{width: '100%', height: 100}} />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 50, height: 50}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
