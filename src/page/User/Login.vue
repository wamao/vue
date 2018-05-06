<template>
  <div class="login" >
       <Header title="登录" ></Header>
       <img src="../../assets/img/logo.png"/>
        <h6>鹿先森</h6>
        <div class="input_container">
           <input class="user_input" v-model="userName" placeholder="请输入用户名"  type="text" />
           <input class="user_input"  v-model="password" placeholder="请输入密码" type="password" /> 
        </div>
       
        
         <div class="btn_content">
            <a href="javascript:void(0);" class="login_btn" v-on:click="login()">登录</a>
            <a href="javascript:void(0);" class="reg_btn"  v-on:click="pushPage()">去注册</a> 
            
         </div>
        
     
     </div>
  
</template>

<script>




 

 

import {ErrMsg,Toast} from '../../utils/Msg';

import axios from 'axios';
import BScroll from 'better-scroll';
import Header from '../../components/common/Header';
import Http from  '../../utils/http';
export default {
  name: 'Login',
  data () {
    return {
      password:'', //密码
      userName:'' // 用户名
    }
  },
  components:{
     Header
  },
   created(){
   
       
  },
  destroyed(){
   
  },
  methods:{
    
   

    pushPage(e){
      this.$router.push({ name: 'Register'}) ;   // 命名的路由
    },


  async login(){
      
      /*正则校验*/
      if(this.userName.length==0|| this.password.length==0){
           Toast({ErrMsg:'请输入用户名或密码',Duration:2000});
           return;
      }
      
     /**
       * @description   用户登录请求
       * @param {String}login  请求接口地址
       * @param {Object} username   password  请求参数对象
       *
      */    
      let responseData= await Http.post('login', {"username":this.userName,"password":this.password});
      console.log(responseData);
      if(responseData.status==0){
        this.$store.commit('UpdateUserInfo',responseData.result);
        this.$router.go(-1);
      }else{
          ErrMsg({ErrMsg:responseData.message,Duration:2000});
      }

    }
  }
}
</script>




<style lang="scss" scoped="" type="text/css">



  .login{
     width:100%;
     height:100%;
     text-align: center;
    img{
      width:60px;
      height:60px;
      margin-top:15px;
      margin-bottom:5px;
    }

      flex-direction:column;
      h6{
        font-size:18px;
         margin:0px 0px 40px 0px;
      }
       
    .input_container{
         width:100%;
         display:flex;
         flex-direction:column;
         align-items:center;
        .user_input{
          text-align: center;
       width:70%;
       display:block;
       height:34px;
       border-radius:8px;
       border:1px solid #dadada;
       outline:none;
       margin-bottom:20px;
       padding:0px 10px;
       box-sizing:border-box;
     }
         
    }
    
    .btn_content{
      width:100%;
      display:flex;
      align-items:center;
      flex-direction:column;
    }
    
     

     .login_btn{
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      width:70%;
      border:1px solid #dadada;
      color:#333333;
      line-height:35px;
      border-radius:5px;
      display:block;
      letter-spacing:3px;
     }

     .reg_btn{
         -webkit-tap-highlight-color:rgba(0,0,0,0);
      width:70%;
      border:1px solid #dadada;
      color:#333333;
      line-height:35px;
      border-radius:5px;
      display:block;
      margin-top:15px;
      letter-spacing:3px;
     }
  }
</style>
