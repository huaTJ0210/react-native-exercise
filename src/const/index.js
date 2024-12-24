import NavigationPage from '../page/reactNavigation';
import FlashListPage from '../page/flashList';
import StylePage from '../page/stylePage';
import ReactPage from '../page/react';
import ShopCart from '../page/react/shopCart';
import ImagePage from '../page/imagePage';
import ButtonPage from '../page/buttonPage';
import GesturePage from '../page/gesturePage';
export const routes = [
  {
    name: 'React',
    component: ReactPage,
    title: 'React基础',
  },
  {
    name: 'Style',
    component: StylePage,
    title: '样式基础',
  },
  {
    name: 'Navigation',
    component: NavigationPage,
    title: 'React-Navgation导航基础',
  },
  {
    name: 'Flash',
    component: FlashListPage,
    title: 'FlashList基础使用',
  },
  {
    name: 'Image',
    component: ImagePage,
    title: 'Image基础使用',
  },
  {
    name: 'Button',
    component: ButtonPage,
    title: '类Button基础使用',
  },
  {
    name: 'Gesture',
    component: GesturePage,
    title: '手势的基本使用',
  },
  /*其他测试页面*/
  {
    name: 'ShopCart',
    component: ShopCart,
    title: 'ShopCart',
    hidden: true,
  },
];
