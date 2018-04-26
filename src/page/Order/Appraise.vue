<template>
  <div class="cart" v-cloak>
  <Header title="确认订单"></Header>
   <div class="cartlist">
      <ul>
       <li v-for="item in orderList">
          <div class="goodsdetail">
              <img :src="item.goodsImgArr"/>
              <div class="detaile_name">
                  <p>{{item.goodsName}}</p>
                  <div class="calc"> <span>￥{{item.goodsPrice}}</span></div>
              </div>
          </div>
       </li>
    </ul>
   </div>
 
  
  </div>
</template>

<script>
import Header from '../../components/common/Header';

import { CellSwipe,Dialog } from 'vant';

import axios from 'axios';
export default {
  name: 'Cart',
  components:{
  Header
  },
  data () {
    return {
   
      orderList:[]   //购物车数据列表
    }
  },
created(){
     this.getList(); // 获取订单
},
  mounted(){
   
  },

  computed:{
   selectNum(){
     let selectAll=0;
    this.cartList.forEach(function(item){
           if(item.select){
               selectAll+=parseFloat(item.goodsNumber);
           }
    });

    return selectAll;
   },


    totalMoney(){
     let totalMoney=0;
     this.cartList.forEach(function(item){
           if(item.select){
               totalMoney+=parseFloat(item.goodsPrice)*parseFloat(item.goodsNumber);
           }
    });

    return totalMoney.toFixed(2);
   }


  },

  methods:{
  
    getList(){
     this.orderList=this.$route.params.orderList; // 获取分类数据
     
    },

   

  
 

  }
}
</script>


<style lang="scss" scoped="" type="text/css">
.cart{
 background:#f5f5f5;
 position: relative;
 height:100%;
 .cart_no{
  width:100%;
  margin-top:60px;
  box-sizing:border-box;
  i{font-size:100px !important;
  margin-bottom:30px;color:#999999;
   }

   p{
     margin-top:30px;
     color:#999999;
   }
   
 }
.delete{
  display:block;
  background:#d81e06;
  width:65px;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#ffffff;
}
  ul{
    
    li{
      margin-bottom:8px;
    }
  }

  .total_content{
    width:100%;
    height:45px;
    position: fixed;
    left:0px;
    bottom:40px;
    background: #ffffff;
    display: flex;
    align-items: center;
    p.totalprice{
      flex:1;
       font-size: 18px;
       font-weight:300;
       color:#000000;
    }
     p.order{
       width:120px;
       background: #000000;
       color:#ffffff;
       font-size: 18px;
       font-weight:300;
       line-height: 45px;
       letter-spacing:10px;
    }
    .select_btn{
      padding:0px 15px;
      box-sizing: border-box;
      width:120px;
      height:100%;
       
      align-items: center;
        display: flex;
      img{
        width:20px;
        height:20px;
        margin-right: 5px;
       
      }
    }

  }

  .goodsdetail{
     display:flex;
     align-items:center;
     width:100%;
     padding:10px 10px;
     box-sizing:border-box;
     .select{
       height:30px;
       width:30px;
       display:flex;
       justify-content:center;
       align-items:center;
       img{
         width:20px;
         height:20px;
       }
     }
     img{
       width:60px;
       height:60px;
     }
     div.detaile_name{
        flex:1;
        padding:0px 5px;
        box-sizing:border-box;
        p{
        
          width:100%;
          font-size:12px;
          color:#000000;
          text-align:left;
          height:30px;
          padding:5px 0px;
        }
        .calc{
          padding:5px 0px;
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:center;
          span:nth-child(1){
            color:#000000;
            font-size:14px;
            font-weight:600;
          }
        }
     }
  }

}
</style>
