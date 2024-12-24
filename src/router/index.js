/* eslint-disable react-native/no-inline-styles */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {Flex, Icon} from '@ant-design/react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../page/home/index';
import SettingPage from '../page/setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../const/index';

import {SafeAreaView, StatusBar} from 'react-native';

// 通用的导航栏标题
const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

// 根据当前路由设置tab页的导航栏头部标题
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  switch (routeName) {
    case 'HomePage':
      return '首页';
    case 'Setting':
      return '设置';
  }
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          headerShown: false, // 隐藏导航栏
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        };
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({focused, color, size}) => {
            const iconName = focused ? 'home' : 'home';
            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarLabel: '设置',
          tabBarIcon: ({focused, color, size}) => {
            const iconName = focused ? 'setting' : 'setting';
            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  /*
    + screenOptions: 配置整体的导航样式
  */
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="HomeTabs"
          component={TabStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            title: '首页', // 解决首次进入的标题显示问题
          })}
        />
        {routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              title: route.title,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
