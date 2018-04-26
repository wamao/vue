<template>
  <div class="cart" v-cloak>
  <Header title="购物车"></Header>
  <Loading v-if="!finish" ></Loading>
   <div class="cart_no" v-if="this.cartList.length==0&&finish">
        <i class="iconfont"> &#xe698;</i>
        <p>购物车就像生活一样，爱生活，<br/>就不要空空荡荡</p>
   </div>
   <div class="cartlist">
      <ul>
       <li v-for="item in cartList">
         <van-cell-swipe :right-width="65" :left-width="0" :on-close="onClose">
              <van-cell-group>
                <div class="goodsdetail"   >
                    <div class="select">
                      <img  v-on:click="select(item)" v-if="item.select==1" src='../../assets/img/select.png'/>
                      <img  v-on:click="select(item)"  v-else src='../../assets/img/no_select.png'/>
                    </div> 
                    <img :src="item.goodsImgArr"/>
                    <div class="detaile_name">
                       <p>{{item.goodsName}}</p>
                       <div class="calc"> <span>￥{{item.goodsPrice}}</span><van-stepper v-model="item.goodsNumber" /></div>
                    </div>
                </div>
              </van-cell-group>
              <span v-on:click="setGoodsId(item.goodsId)"  class="delete" slot="right">删除</span>
          </van-cell-swipe>
       </li>
    </ul>
   </div>
    <div class="total_content" v-if="this.cartList.length!=0">
        <div class="select_btn" v-on:click="selectAll" >
          <img v-if="this.isSelectAll" src='../../assets/img/select.png'/>
          <img v-else src='../../assets/img/no_select.png'/>
          <span>{{selectNum>0?'已选'+selectNum+'件':'全选'}}</span>
        </div> 
        <p class="totalprice">￥{{totalMoney==0?'0.00':totalMoney}}</p>
        <p class="order" v-on:click="order()">下单</p>
    </div>
    <Tab Index=3></Tab>
  </div>
</template>

<script>
import Header from '../../components/common/Header';
import Loading from '../../components/common/Loading';
import { CellSwipe,Stepper ,Dialog } from 'vant';
import Tab from './Tab';
import axios from 'axios';
export default {
  name: 'Cart',
  components:{
   Tab,Header,Loading
  },
  data () {
    return {
      goodsId:'', // 需要删除的goodsid
      isSelectAll:0,
      finish:false, // 是否请求完成
      cartList:[]   //购物车数据列表
    }
  },

  mounted(){
        this.getCart(); // 获取购物车商品
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
    /*获取购物车商品*/
    setGoodsId(id){
        this.goodsId=id;
    },
    getCart(){
     
      let req={
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMjcwY2FkZGFhMjJkYjciLCJpYXQiOjE1MjQ2MTc1OTksImV4cCI6MTUyNDcwMzk5OX0.AMT7KVck4GpidxGYBRJWhvpzonU_XTROkyYbmfrZS68",
       
      }
      axios.post("/getCart",req).then((res)=>{
        let data=res.data.result.cartList;
        this.finish=true; // 请求完成
         data.forEach(function(item){
           //console.log(item);
           item.select=0;
           item.goodsImgArr=item.goodsImgArr.split(',')[0]
         });
         this.cartList=data;

      });
    },

    // 单选
    select(item){
      let selectAll=0;
       item.select=!item.select;
        this.cartList.forEach(function(item){
           if(item.select){
               selectAll+=1;
           }
        });

        this.isSelectAll=selectAll==this.cartList.length?1:0;
    },

    // 全选
    selectAll(){
      var _this=this;
       this.isSelectAll=!this.isSelectAll;
        this.cartList.forEach(function(item){
           item.select=_this.isSelectAll;
         });
    },

    // 购物车删除商品
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
         Dialog.confirm({
             message: '确定删除该商品吗?'
            }).then(() => {
             instance.close();
             this.deleteGoods();
            }).catch(() => {
              // on cancel
            });
          break;
      }
    },
      /*获取商品详情*/
    deleteGoods: function () {
      let  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMjcwY2FkZGFhMjJkYjciLCJpYXQiOjE1MjQ2MTc1OTksImV4cCI6MTUyNDcwMzk5OX0.AMT7KVck4GpidxGYBRJWhvpzonU_XTROkyYbmfrZS68";
          axios.post("/delCart",{"goodsId":this.goodsId,'token':token}).then((res)=>{
                this.removeItem(this.goodsId);
                console.log(res);

          });
    },
   // 从数组中移除数据
   removeItem:function(Id) {
     this.cartList = this.cartList.filter(function(item){ return item.goodsId!=Id; });
   },

   // 提交订单
   order(){
     let orderList=[];
     let select=0;
      this.cartList.forEach(function(item){
          if(item.select){
            orderList.push(item);
            select+=1;
          }
      });

      if(select==0){
         return;
      }
      this.$router.push({ name: 'Order',params: {orderList: orderList}}) ;   // 命名的路由
   }

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
