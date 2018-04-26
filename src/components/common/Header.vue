<template>
  <div class="header">
     <i class="iconfont" v-on:click="pop()"> &#xe697;</i>
     <span class="title">{{title}}</span>
     <p> <span v-if="showLogin"  class="login" v-on:click="login()">登录</span></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    props:["title","showLogin"],

 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods:{
    login(){
     
       
        this.$router.push({ name: 'Login'}) ;   // 命名的路由
    },
    pop(){
      this.$router.go(-1);
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
 .header{
    display:flex;
     align-items:center;
     height:40px;
     width:100%;
     background:#ffffff;
     align-items:center;
     border-bottom:1px solid #f5f5f5;
     padding:0px 10px;
     box-sizing:border-box;
      i{
         width:25px;
      }
        
      .title{
        flex:1;
        text-align:center;
        font-size:15px;
        font-weight:600;
      }

      .login{
        width:50px;
        text-align:center;
      }

      p{
        width:50px;
        text-align:center; 
      }
   
 }
</style>
