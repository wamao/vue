<template>
  <div class="tab_Container">
  <ul> 
    
    <router-link tag="li"  exact  :to="{path: '/'}">
        <i class="iconfont"> &#xe6b8;</i>
        <span>首页</span>
      
    </router-link>
     <router-link tag="li"   :to="{path: '/Category'}">
        <i class="iconfont"> &#xe699;</i>
            <span>分类</span>
      
    </router-link>
     <router-link tag="li"   :to="{path: '/Cart'}">
        <i class="iconfont"> &#xe698;</i>
          <span>购物车</span>
      
     </router-link>
     <router-link tag="li"  :to="{path: '/Mine'}">
         <i class="iconfont"> &#xe78b;</i>
          <span>我的</span>
    </router-link>
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
