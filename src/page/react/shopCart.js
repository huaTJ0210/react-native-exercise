/* eslint-disable no-unused-vars */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {Button} from '@ant-design/react-native';
import {useRequest} from 'ahooks';

import {getProducts, updateProduct} from '../../api/shop';

export default function ShopCart() {
  const [productList, setProductList] = useState([]);

  // 获取数据
  const {loading, error, run} = useRequest(getProducts, {
    manual: true,
    onSuccess: res => {
      setProductList(res);
    },
  });
  // 修改数据
  const {run: runUpdate} = useRequest(updateProduct, {
    manual: true,
    throttleWait: 300, // 节流: 避免连续修改商品数量导致的多次请求
    onSuccess: res => {
      console.log('updatePorductCount', res);
    },
  });

  useEffect(() => {
    run();
  }, [run]);

  const onChangeCount = useCallback(
    (c, index, id) => {
      const list = [...productList];
      const product = list[index];
      product.count = c;
      setProductList(list);
      runUpdate(id, c);
    },
    [productList, runUpdate],
  );

  return (
    <View style={styles.list}>
      {loading && <Text>loading...</Text>}
      {error && <Text>error...</Text>}
      {productList.length > 0 && (
        <View>
          {productList.map((item, index) => (
            <Product
              key={index}
              product={item}
              onChangeCount={c => onChangeCount(c, index, item.id)}
            />
          ))}
          <View style={[styles.card]}>
            <Text>总价：</Text>
            <Text>
              {productList.reduce((p, c) => p + c.price * c.count, 0)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

function Product({product, onChangeCount}) {
  const {name, price, count} = product;
  const [num, setNum] = useState(count);
  const changeCount = n => {
    const c = num + n < 0 ? 0 : num + n;
    setNum(c);
    onChangeCount(c);
  };
  return (
    <View style={[styles.card, styles.container]}>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <View style={styles.actionButton}>
        <Button
          onPress={() => {
            changeCount(1);
          }}>
          +
        </Button>
        <Text>{num}</Text>
        <Button
          onPress={() => {
            changeCount(-1);
          }}>
          -
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 12,
  },
  container: {
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  actionButton: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
