import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@ant-design/react-native';

export default function ReactPage({navigation}) {
  const {navigate} = navigation;
  return (
    <View style={styles.container}>
      <Button
        style={styles.actionButton}
        type="primary"
        onPress={() => {
          navigate('ShopCart');
        }}>
        ShopCart
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 12,
  },
  actionButton: {
    width: '46%',
    marginHorizontal: '2%',
  },
});
