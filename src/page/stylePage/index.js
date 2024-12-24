/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import {Text, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@ant-design/react-native';

const values = ['column', 'row', 'row-reverse', 'column-reverse'];
export default function StylePage() {
  const [flexDirection, setFlexDirection] = useState('column');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>flexDirection</Text>
      <View style={styles.selectedView}>
        {values.map((item, index) => (
          <Button
            key={item}
            type={item === flexDirection ? 'primary' : 'default'}
            style={[
              styles.button,
              item === flexDirection && styles.selectedButton,
            ]}
            onPress={() => {
              setFlexDirection(item);
            }}>
            {item}
          </Button>
        ))}
      </View>
      <View style={[styles.showView, {flexDirection: flexDirection}]}>
        <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
        <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 12,
  },
  selectedView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '48%',
    marginHorizontal: '1%',
    backgroundColor: 'oldlace',
    marginBottom: 12,
  },
  selectedButton: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  showView: {
    flex: 1,
    // justifyContent: 'space-evenly',
    marginTop: 12,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 50,
    height: 50,
  },
});

/*
 relative: 遵循流式布局，top,bottom,left,right的设置是基于原有位置（正常的流式布局，虽然移动但之前的位置仍被占据）
 absolute: 脱离流式布局，top,bottom,left,right的设置是基于父元素的左上角
*/
