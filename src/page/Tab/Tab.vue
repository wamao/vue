<template>
  <div class="tab_Container">
  <ul> 

    <li  :class="Index==1?'active':''"  v-on:click="pushPage(1)">
        <i class="iconfont"> &#xe6b8;</i>
        <span>首页</span>
      
    </li>
    <li :class="Index==2?'active':''" v-on:click="pushPage(2)"  >
        <i class="iconfont"> &#xe699;</i>
            <span>分类</span>
      
      </li>
    <li :class="Index==3?'active':''" v-on:click="pushPage(3)" >
        <i class="iconfont"> &#xe698;</i>
          <span>购物车</span>
      
      </li>
    <li :class="Index==4?'active':''"  v-on:click="pushPage(4)"  >
         <i class="iconfont"> &#xe78b;</i>
          <span>我的</span>
      </li>
      
         
    
    

  
   
  </ul> 
  </div>
</template>

<script>

export default {
  name: 'Tab',
 props:["Index"],
  data () {
    return {
      activeIndex:1
    }
  },

  methods:{
  pushPage(e){
     
     let userName=this.$store.state.userInfo.userName;

      if(e==3||e==4){
        if(userName.length==0){
          this.$router.push({ name: 'Login'}) ;   // 命名的路由
          return;
        }
      }
   
     
      switch(e){
        case 1:
         this.$router.push({ name: 'Home'}) ;   // 命名的路由
         break;
         case 2:
          this.$router.push({ name: 'Category'}) ;   // 命名的路由
         break;
           case 3:

          this.$router.push({ name: 'Cart'}) ;   // 命名的路由
         break;
           case 4:
          this.$router.push({ name: 'Mine'}) ;   // 命名的路由
         break;
      }
  }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">

.tab_Container{ 
  background:#ffffff;
 
  height:40px;
  z-index: 999;
  width:100%;
  position: fixed; 
  bottom: 0;
  margin:0;
  padding:0;
  ul{
    height:100%;
    display:flex;
    li{
      height:100%;
      flex:1;
      justify-content:center;
      display:flex;
      align-items:center;
      color:#999999;
      flex-direction:column;
      font-size:13px;
      }
      
    }
  }

  .active{
    color:#000000 !important;
    font-weight:700
    
  }
  

</style>
