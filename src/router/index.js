import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Tab from '../page/tab/Tab';  // tab导航页面
import Home from '../page/tab/Home'; // 首页  
import Mine from '../page/Mine/Mine'; // 我的  
import Category from '../page/tab/Category'; // 分类 
import Secondary from '../page/Category/Secondary';// 二级及分类
import Cart from '../page/tab/Cart'; // 购物车 
import Login from  '../page/User/Login'; // 登录
import  Register from '../page/User/Register'; // 注册
import GoodsDetail from  '../page/Goods/GoodsDetail'; //商品详情
import Order from '../page/Order/Order'; // 订单页面
import CouponList from  '../page/Manage/CouponList'; // 优惠券
import MyCoupon from  '../page/Mine/MyCoupon'; // 我的优惠券
import AddCoupon from '../page/Manage/AddCoupon';  // 添加优惠券
import Collection from  '../page/Mine/Collection' // 收藏
import Addaddress from '../page/Address/Addaddress';  // 新增地址
import EditAddress from '../page/Address/EditAddress'; // 修改地址
import AddressList from  '../page/Address/AddressList'; // 地址列表页面
Vue.use(Router);

const router =  new Router({
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: Home,
     
     }, 
     { 
      path: '/Mine', 
      name: 'Mine', 
      component: Mine ,
      meta: {   requireAuth: true },
     }, 
     { 
      path: '/Category', 
      name: 'Category', 
      component: Category,
    

     }, 
     { 
      path: '/Cart', 
      name: 'Cart', 
      component: Cart ,
      meta: {   requireAuth: true },
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
      path:'/CouponList',
      name:'CouponList',
      component:CouponList
    },
    {
      path:'/Collection',
      name:'Collection',
      component:Collection
    },
    {
      path:'/Addaddress',
      name:'Addaddress',
      component:Addaddress
    },

    {
      path:'/AddressList',
      name:'AddressList',
      component:AddressList
    },

    {
      path:'/EditAddress',
      name:'EditAddress',
      component:EditAddress
    },
    {
      
      path:'/AddCoupon',
      name:'AddCoupon',
      component:AddCoupon
    },
    {
      
      path:'/MyCoupon',
      name:'MyCoupon',
      component:MyCoupon
    }
     
    

  
    
  ]
});


router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
       if (localStorage.getItem('userInfo')) {// 判断是否登录
         next()
      } else {// 没登录则跳转到登录界面
         next({
          path: '/Login',
        })
       }
     } else {
       next()
     }
   })
   
   export default router
