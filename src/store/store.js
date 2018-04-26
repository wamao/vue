
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const initUserInfo={
    userName:'',        // 用户名
    goodsCount:'' ,     // 购物车数量
    address:false       // 是否已经添加过地址
}

 export default new Vuex.Store({
 	state:{
 		userInfo:initUserInfo
 	},

   /* 改变状态*/
   mutations:{

       // 获取用户信息
        UpdateUserInfo(state,userModel){
            // 先缓存用户信息在跟新state 
            localStorage.setItem("userInfo",JSON.stringify(userModel));
            state.userInfo=userModel;
        },

        // 更新用户信息
        getUserInfo(state){
            let userInfo= JSON.parse(localStorage.getItem('userInfo'));
            if(userInfo){
                state.userInfo=userInfo;
            }else{
                state.userInfo=initUserInfo;
            }
        },
         
        // 清除用户信息 
        clearUserInfo(state){
            state.userInfo=initUserInfo;  
        }
    },

    actions:{
         UpdataUserInfo(context,userModel){
            context.commit('updateUserInfo',userModel);
        },
    }
 });







 

