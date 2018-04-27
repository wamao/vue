<template>
  <div class="cart" v-cloak>
  
      <input v-model="Title"/>
      <input v-model="Money"/>
      <input v-model="Limt"/>
    
      <button  v-on:click="add"> 确认</button>
    <div class="coupon_content">    
      <div class="coupon">
           <div class="left">
              <p>XXXXXX折扣店</p>
              <span>50.00</span>
              <p>订单满100.00元</p>
        </div>
        <div class="right"></div>
        <i></i>
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
      Title:'',
        Money:'',
        Limt:'',
      orderList:[]   //购物车数据列表
    }
  },
created(){
    
},
  mounted(){
    this.getList();
  },

 

  methods:{
  
    add(){
      
      let  req={
        title:this.Title,
        money:this.Money,
        limt:this.Limt,
        endTime:"2018-12-03"

      }

     

      axios.post("/addCoupon",req).then((res)=>{
         console.log(res);
          
          });


     
     
    },


    getList(){
       axios.post("/couponList",{}).then((res)=>{
         console.log(res);
          
          });
   
    }

   

  
 

  }
}
</script>


<style lang="scss" scoped="" type="text/css">
.coupon_content{
  width:100%;
  padding:0px 15px ;
  box-sizing:border-box;
}
 .coupon{
   display:flex;
   width:100%;
   height:120px;
   padding:0px 10px;
   box-sizing:border-box;
   position:relative;
   background: radial-gradient(transparent 0, transparent 5px, #D24161 5px);
    background-size: 15px 15px;
    background-position: 9px 3px;
   .left{
     flex:1;
     height:100%;
     background:#D24161 ;
     border-right: 2px dashed rgba(255, 255, 255, .3);
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
