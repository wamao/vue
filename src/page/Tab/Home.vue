<template>

  <div class="home">
   <Header title="首页" showLogin=true></Header>
   <div style="search">
      <div class="search_content">
       <i class="iconfont"> &#xe7da;</i>
       <span>搜索商品,共488377款好物</span>
      </div>
      <wc-swiper class="home_swiper" >
        <wc-slide><img src="../../assets/img/imgcover01.png"/></wc-slide>
        <wc-slide><img src="../../assets/img/imgcover02.png"/></wc-slide>
         <wc-slide><img src="../../assets/img/imgcover03.png"/></wc-slide>
        <wc-slide><img src="../../assets/img/imgcover04.png"/></wc-slide>
         <wc-slide><img src="../../assets/img/imgcover05.png"/></wc-slide>
        <wc-slide><img src="../../assets/img/imgcover06.png"/></wc-slide>
         <wc-slide><img src="../../assets/img/imgcover07.png"/></wc-slide>
        <wc-slide><img src="../../assets/img/imgcover08.png"/></wc-slide>
      </wc-swiper>
   </div>
  <div class="home_list" >
     <p class="header_title">新品推荐</p>
      <ul>
        <li v-for="item in goodsList" v-on:click="pushDetail(item)" >
         <div class="imgcontainer">
            <img :src="item.goodsImgArr.split(',')[0]" />
         </div>
         <div class="detail">
          <p class="goodsname">{{item.goodsName}}</p>
          <p class="price">{{item.goodsPrice}}</p>
         </div>
       </li>
     </ul>
     <p class="title">已经到底啦^_^</p>
 </div> 
  <Tab Index=1></Tab>
  </div>
</template>

<script>
import Tab from './Tab';
import Header from '../../components/common/Header';

import axios from 'axios';
import http from '../../utils/http';
export default {
  name: 'Home',
   components: {
     Header,
     Tab
   },
  data () {
    return {
      goodsList:[],
     
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
   
       
  },
  mounted(){
    //this.fetchData();
    this.getdata();
  },
  methods:{
     fetchData:async function () {
      const res = await http.get('goodsList',{pageSize:20,page:1,sort:1})
        console.log(res);
    },
     getdata: function () {
        var _this=this;
          axios.post("/goodsList",{"pageSize": 150,"page": 1,categoryId:'183'}).then((res)=>{
            console.log(res);
            this.goodsList=res.data.result;
            this.goodsList;

          });
    },

    pushDetail(item){
       this.$router.push({ name: 'GoodsDetail', params: {goodsId: item.goodsId }})  ; 
    }
  }

  
}
</script>


<style lang="scss" scoped="" type="text/css">
.home{
  height:100%;
  width:100%;
 .header_title{
   font-size: 16px;
   letter-spacing: 1px;
   color: #000000;
   background: #ffffff;
 }

  .search{position: relative;}
  .search_content{
    width:90%;
    text-align: center;
    padding:6px 0px;
    background:#ffffff;
    border-radius: 16px;
    position: absolute;
    top:50px;
    left:50%;
    z-index:1000;
    transform: translateX(-50%);
    span{
      color:#999999;
    }
  }
  .home_swiper{
    width:100%;
   
    img{
      width:100%;
   
    }
    
  }
 .home_list{
    
    width:100%;
    background:#f5f5f5;
    padding-bottom:40px; 
    p.title{
      padding-top:15px ;
      padding-bottom: 40px;
      font-size: 12px;
    }
    ul{
     
      width:100%;
      display:flex;
      flex-wrap:wrap;
      li:nth-of-type(odd){ padding:0px 8px 0px 16px;}  
      li:nth-of-type(even){padding:0px 16px 0px 8px;;}  

      li{
        border-radius:8px;
        overflow:hidden;
       
        box-sizing:border-box;
        width:50%;
        margin-bottom:10px;
        .imgcontainer{
          background:#ffffff;
          width:100%;
          img{
             width:100%;
            
           }
        }
         
        .detail{
           background:#ffffff;
           width:100%;
           padding:10px;
           box-sizing:border-box;
        p.goodsname{
          text-align:left;
          width:100%;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size:13px;
        }

        p.price{
          font-weight:600;
          text-align:left;
          font-size:16px;
        }
         }
      }
    }
 }
 }
</style>
