<template>
  <div class="coupon">
    <Header title="添加优惠券"></Header>
     <input v-model="title" placeholder="请输入优惠标题"  />
      <input v-model="money" placeholder="请输入优惠金额"  />
      <input v-model="limt" placeholder="请输入消费额度" />
       <input v-model="startTime" placeholder="请输入开始时间"  />
      <input v-model="endTime" placeholder="请输入过期时间"  />

      <button v-on:click="add_coupon" >添加</button>
  </div>
</template>

<script>
import Header from '../../components/common/Header';

import { CellSwipe,Dialog, } from 'vant';

import Http from '../../utils/http';
export default {
  name: 'Cart',
  components:{
  Header
  },
  data () {
    return {
      title:'',
      money:'',
      limt:'',
      startTime:'',
      endTime:'' 
      
    }
  },
created(){
    
},
  mounted(){
  
  },

 

  methods:{
  async  add_coupon(){
       let param={
               title:this.title,
               money:this.money,
               limt:this.limt,
               startTime:this.startTime,
               endTime:this.endTime  
       }
  
        let responseData=await Http.post('/addCoupon',param);
        console.log(responseData)
         if(responseData.status==0){
          this.couponList=responseData.result.couponList;
         }
  }
}

}
</script>


<style lang="scss" scoped="" type="text/css">
.coupon{
  

}





</style>
