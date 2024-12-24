/* eslint-disable no-unused-vars */
import {Text, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from '@ant-design/react-native';

export default function SettingPage({navigation, route}) {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>index={count}</Text>
      <Button
        style={styles.button}
        type="primary"
        onPress={() => {
          setCount(t => t + 1);
        }}>
        primary
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    width: 120,
  },
});
