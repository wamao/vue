<template>
  <div class="Index" >
     <p>首页</p>
       <li><router-link :to="{name:'Home'}" tag="a">我的债权</router-link></li>
  </div>
</template>

<script>
import Header from '../components/common/Header';
export default {
  name: 'Index',
  components:{
  Header
  },
  data () {
    return {
   
    
    }
  },
  created(){

  },
  mounted(){
   
  },


}
</script>


<style lang="scss" scoped="" type="text/css">

</style>
