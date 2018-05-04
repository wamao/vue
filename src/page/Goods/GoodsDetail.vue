<template>
  <div class="goodsDetail">
  <Header title="商品详情" ></Header>
     <wc-swiper class="home_swiper" >
         <wc-slide  v-for="item in this.goodsDetail.goodsImgArr" >
            <img :src="item"/>
         </wc-slide>
      </wc-swiper>
      <div class="detail">
         <p>{{this.goodsDetail.goodsName}}</p>
         <p><span>￥{{this.goodsDetail.goodsPrice}}</span><span><i class="iconfont">&#xe7ce;</i>收藏</span></p>
      </div>
      <div class="server">
         <span>服务</span>
         <div>
           <p><span>48小时快速退款</span><span>满88元免邮</span></p>
           <p><span>自营品牌</span><span>品质保证</span></p>
         </div>
      </div>
       <div class="detail_foot">
          <p><i class="iconfont">&#xe60e;</i>联系卖家</p>
          <p v-on:click="addCart()">加入购物车</p>
          <p>立即购买</p>
       </div>
  </div>
</template>

<script>
import Http from  '../../utils/http';
import { Toast } from 'vant';
import Header from  '../../components/common/Header';
export default {
name: 'Detail',
 components:{
   Header
 },
  data () {
    return {
      goodsDetail:{} // 商品详情
    }
  },

  

  mounted(){
    Toast.loading({ mask: true, message: '加载中...'});
     this.getDetail();
  },

  methods:{

    /*获取商品详情*/
  async  getDetail() {
         let goodsId=this.$route.params.goodsId;
         let responseData= await Http.post('/goodsDetail',{"goodsId":goodsId});
         if(responseData.status==0){
            responseData.result.goodsDetail.goodsImgArr=responseData.result.goodsDetail.goodsImgArr.split(',');
            this.goodsDetail=responseData.result.goodsDetail;
            Toast.clear();
         }
    },
    
    /*加入购物车*/
   async addCart(){

      let goodsParam={
        goodsId:this.$route.params.goodsId,
        goodsNumber:1,
        goodsSize:'2018纪念版',
        goodsColor:"经典蓝"
      }


       let responseData= await Http.post('/addCart',goodsParam);
         if(responseData.status==0){
            Toast('加入购物车成功');
         }
    }
  }
}
</script>



<style lang="scss" scoped="" type="text/css">
.goodsDetail{
  width:100%;
  height:100%;
  background:#f5f5f5;
   .home_swiper{
    width:100%;
    height:240px;
    img{
       width:100%;
      
    }
    
  }

  .detail{
    width:100%;
    padding:10px 10px;
    box-sizing:border-box;
    p{text-align:left;}
    background:#ffffff;
    p:nth-child(1){
      color:#333333;
    }
    p:nth-child(2){
      color:#000000;
      font-size:18px;
      font-weight:600;
      display:flex;
     
      span:nth-child(1){
        flex:1
      }
       span:nth-child(2){
        font-size:14px;
        font-weight:300;
        display:flex;
        justify-content:center;
        align-items:center;
        i{padding:0px 3px;}
      }
    }
  }

  .server{
    display:flex;
    background:#ffffff;
    margin-top:8px;
    padding:10px 10px;
    box-sizing:border-box;
    span{
       width:50px;
       text-align:left;
       font-size:13px;
    }

    div{
      flex:1;
      p{
        text-align:left;
       
        span{
          font-size:12px;
          margin-right:15px;
          position:relative;
        }

         span:after{
           content:'';
           display:block;
           width:4px;
           height:4px;
           background:#000000;
           border-radius:2px;
           position:absolute;
           top:50%;
           left:-6px;
           transform:translateY(-50%);
         }
      }
    }
  }

  .detail_foot{
    width:100%;
    height:50px;
    align-items:center;
    
    position:fixed;
    bottom:0px;
    left:0px;
    background:#ffffff;
    display:flex;
    p:nth-child(1){
      width:100px;
      text-align:center;
      i{padding:0px 3px;}
    }
    p:nth-child(2){
      flex:1;
      background:#333333;
      color:#ffffff;
      font-size:12px;
      line-height:50px;
      text-align:center;
       letter-spacing:2px;
    }

    p:nth-child(3){
      flex:1;
      background:#000000;
      color:#ffffff;
      text-align:center;
       letter-spacing:2px;
      font-size:12px;
      line-height:50px;
    }
  }
}
</style>
