<template>
  <div>
    <Header title="我的优惠券"></Header>
    <div class="coupon_content" v-for="item in couponList ">    
      <div class="coupon" >
           <div class="left">
              <p>{{item.title}}</p>
              <span>{{item.money}}</span>
              <p>订单满{{item.limt}}元</p>
        </div>
        <div class="right"></div>
       
      </div>
    </div>
  
  </div>
</template>

<script>
import Header from '../../components/common/Header';

import { CellSwipe,Dialog, } from 'vant';

import axios from 'axios';
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
    getCouponList(){
       axios.post("/couponList",{}).then((res)=>{
         this.couponList=res.data.result.couponList;
         console.log(this.couponList);
          
          });
   
    }

   

  
 

  }
}
</script>


<style lang="scss" scoped="" type="text/css">
.coupon_content{
  width:100%;
  padding:0px 15px;
  box-sizing:border-box;
  margin:10px 0px;
 
}
 .coupon{
   overflow:hidden;
   display:flex;
   width:100%;
   height:120px;
   padding:0px 5px;
   box-sizing:border-box;
   position:relative;
   background: radial-gradient(transparent 0, transparent 5px, #D24161 5px);
    background-size: 15px 15px;
    background-position: 8px 5px;
   .left{
     flex:1;
     height:100%;
     background:#D24161 ;
     border-right: 2px dashed rgba(255, 255, 255, .7);
   }
   .right{
     width:30%;
     background:#D24161 ;
    
   }
 }

 .coupon i 
 {
	position: absolute;
	left: 25%;
  top:30px;
	height: 100%;
	width: 100%;
	background-color: rgba(255, 255, 255, .15);
	transform: rotate(-30deg);
}


</style>
