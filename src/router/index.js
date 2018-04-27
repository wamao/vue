import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Tab from '../page/tab/Tab';  // tab导航页面
import Home from '../page/tab/Home'; // 首页  
import Mine from '../page/Mine/Mine'; // 我的  
import Category from '../page/tab/Category'; // 分类 
import Secondary from '../page/Category/Secondary1';// 二级及分类
import Cart from '../page/tab/Cart'; // 购物车 
import Login from  '../page/User/Login'; // 登录
import  Register from '../page/User/Register'; // 注册
import GoodsDetail from  '../page/Goods/GoodsDetail'; //商品详情
import Order from '../page/Order/Order'; // 订单页面
import Coupon from  '../page/Mine/Coupon'; // 优惠券
import Collection from  '../page/Mine/Collection' // 收藏
Vue.use(Router);

export default new Router({
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: Home 
     }, 
     { 
      path: '/Mine', 
      name: 'Mine', 
      component: Mine ,
     }, 
     { 
      path: '/Category', 
      name: 'Category', 
      component: Category,

     }, 
     { 
      path: '/Cart', 
      name: 'Cart', 
      component: Cart 
     }, 

     { 
      path: '/Login', 
      name: 'Login', 
      component: Login 
     }, 

     
     { 
      path: '/Register', 
      name: 'Register', 
      component: Register 
     }, 

     {
      path:'/Secondary',
      name:'Secondary',
      component:Secondary
    },
    {
      path:'/GoodsDetail',
      name:'GoodsDetail',
      component:GoodsDetail
    },
    {
      path:'/Coupon',
      name:'Coupon',
      component:Coupon
    },
    {
      path:'/Collection',
      name:'Collection',
      component:Collection
    }
  ]
})
