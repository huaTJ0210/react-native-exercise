/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {Text, View, StyleSheet, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';

export default function GesturePage({navigation, route}) {
  const [logs, setLogs] = useState([]);
  const singeTap = Gesture.Tap().onStart(() => {
    runOnJS(setLogs)(l => [
      ...l,
      {
        text: 'Single tap',
        timestamp: new Date().getTime(),
      },
    ]);
  });

  return (
    <View>
      <GestureHandlerRootView>
        <GestureDetector gesture={singeTap}>
          <View style={styles.container}>
            <Text>手势</Text>
          </View>
        </GestureDetector>
      </GestureHandlerRootView>
      <View>
        {logs.map((l, index) => (
          <Text key={index}>{`${l.text}:${l.timestamp}`}</Text>
        ))}
      </View>
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
