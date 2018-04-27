<template>
  <div id="app">
    <router-view/> 
   
   
  </div>
  
</template>

<script>

export default {
 
  name: 'App',
   mounted(){
    this.getUserInfo() // 获取用户信息
   },
   methods:{
     getUserInfo(){
        this.$store.commit('getUserInfo');
     }
   }
   
}
</script>

<style>
@import "./style/global.css";
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
 
}
</style>
