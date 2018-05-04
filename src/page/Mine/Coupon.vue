<template>
  <div class="coupon">
    <Header title="我的优惠券"></Header>
     
    <div class="coupon_content"  ref="couponWrapper">    
    <ul>
     <li v-for="item in couponList ">
       <div>
              <p>{{item.title}}</p>
              <span>{{item.money}}</span>
              <p>订单满{{item.limt}}元</p>
        </div>
        <div>
          <p>鹿先森</p>
          <p>2012-02-01--2012-02-03</p>
        </div>
     
     </li>
    
    
    </ul>
      <div class="coupon" >
       
       
       
      </div>
    </div>
  
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
      
      couponList:[]   //购物车数据列表
    }
  },
created(){
    
},
  mounted(){
    this.getCouponList();
  },

 

  methods:{
  async  getCouponList(){

        let responseData=await Http.post('/couponList',{});
         if(responseData.status==0){
          this.couponList=responseData.result.couponList;
         }
  }
}

}
</script>


<style lang="scss" scoped="" type="text/css">
.coupon{
  display:flex;
  width:100%;
  height:100%;
.coupon_content{
  flex:1;
  overflow:hidden;
  padding:0px 15px;
  box-sizing:border-box;
  margin:10px 0px;

  ul{
    li{
      border-top:12px solid #000000;
    }
  }
 
}

}





</style>
