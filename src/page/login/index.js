/* eslint-disable no-unused-vars */
import {Text, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  Picker,
  Provider,
} from '@ant-design/react-native';
const data = require('@bang88/china-city-data');

export default function LoginPage({navigation, route}) {
  const pickerRef = React.useRef(null);
  const [form] = Form.useForm();

  const onSubmit = async () => {
    try {
      // 表单校验
      await form.validateFields();
      const values = form.getFieldsValue(true);
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Provider>
      <View>
        <Form
          // layout="vertical"
          form={form}
          initialValues={{
            username: '',
            phoneNumber: '',
            desc: '',
            address: '',
          }}
          labelStyle={styles.labelStyle}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{required: true, message: '用户名不能为空'}]}>
            <Input placeholder="请输入用户名称" />
          </Form.Item>
          <Form.Item
            label="手机号"
            name="phoneNumber"
            rules={[
              {pattern: /^1[3456789]\d{9}$/, message: '手机号输入格式不正确'},
              {required: true, message: '手机号不能为空'},
            ]}>
            <Input type="number" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            label="地址"
            name="address"
            rules={[{required: true, message: '地址不能为空'}]}
            arrow="horizontal"
            onPress={() => {
              pickerRef.current.toggle();
            }}>
            <Picker data={data} cols={3} ref={pickerRef}>
              {({extra, value, toggle}) => (
                <Input
                  value={value?.length ? extra : undefined}
                  onFocus={toggle}
                  placeholder="省/市/区"
                />
              )}
            </Picker>
          </Form.Item>
          <Form.Item label="问题描述" name="desc">
            <Input.TextArea
              placeholder="请填写10个字以上的问题描述，以便我们提供更好的服务。"
              maxLength={200}
              showCount
              rows={6}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onPress={onSubmit}>
              保存
            </Button>
          </Form.Item>
        </Form>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    width: 80,
  },
  button: {
    margin: 10,
    width: 120,
  },
});
