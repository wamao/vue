<template>
  <div class="couponList">
    <Header title="优惠券"></Header>
    <Loading v-if="!finish" ></Loading>
    <div class="coupon_content"  ref="couponWrapper">    
    <ul>
     <li v-for="item in couponList  ">
       <div class="top">
            <p><span>{{item.money}}</span><span>元</span></p>
            <p>
              <span>订单满{{item.limt}}元</span>
            </p>
            <span v-on:click="drawCoupon(item.couponId)"  class="draw">领取</span>
        </div>
        <div class="bottom">
          <p>鹿先森</p>
          <p>有效期2012-02-01--2012-02-03</p>
           <a href="javascript:;" class="left_dot dot"></a>
           <a href="javascript:;" class="right_dot dot"></a>
        </div>
     
     </li>
    
    
    </ul>
      
    </div>
  
  </div>
</template>

<script>
import Header from '../../components/common/Header';
import Loading from '../../components/common/Loading'
import { CellSwipe,Dialog, } from 'vant';

import Http from '../../utils/http';
export default {
  name: 'Cart',
  components:{
  Header,Loading
  },
  data () {
    return {
      finish:false,
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
          this.finish=true;
         }
  },
  async drawCoupon(couponId){
     let responseData=await Http.post('/drawCoupon',{couponId:couponId});
     console.log(responseData)
         if(responseData.status==0){
         
         }
  }
}

}
</script>


<style lang="scss" scoped="" type="text/css">
.couponList{
 
  width:100%;
  height:100%;
  background: #f5f5f5;
.coupon_content{
  flex:1;
  overflow:hidden;
  padding:0px 15px;
  box-sizing:border-box;

   background: #f5f5f5;

  ul{
     height:100%;
     background: #f5f5f5;
    li{
      border-top:15px solid #000000;
      background: #ffffff;
      margin-top: 10px;
      padding:0px 10px;
      box-sizing: border-box;
      position: relative;
      

      .bottom{
        position: relative;
        border-top:1px dashed #999999;
        display: flex;
        justify-content: space-between;
        height:35px;
        align-items: center;
        .dot{
        width:20px;
        height:20px;
        background: #f5f5f5;
        border-radius: 10px;
        display: block;
        position: absolute;
      }
      .left_dot{
        top:-10px;
        left:-20px;
      }
      .right_dot{
        right:-20px;
        top:-10px;
      }
        p{
          font-size: 12px;
        }
      }
      .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:10px 20px;
        box-sizing: border-box;
        span.draw{
          font-size: 15px;
        }
        p:nth-child(1){
         
          span:nth-child(1){
            font-size: 40px;
            font-weight: 600;
          }
          span:nth-child(2){
            font-size: 12px;
          }
        }

        p:nth-child(2){
          font-size: 12px;
          display: flex;
          flex-direction: column;
        }
      }

    }
  }
 
}

}





</style>
