<template>
  <div class="addresslist" >
  <Header title="地址管理"></Header>
    <div>
    <ul>
     <li v-for="item in addressList">
        <div class="left">
          <p> {{item.ContactPerson+item.ContactNumber}}</p>
          <p> {{item.ContactAddress.replace(/\//g," ")}}</p>
        </div>
         <div class="right" v-on:click="edit(item)">
           <i  class="iconfont"> &#xe69e;</i>
          <span>编辑</span>
        </div>
     </li>
    
    </ul>
    </div>
       <a href="javascript:;" class="btn_add"  v-on:click="add">添加新收货地址</a>
   
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Header from '../../components/common/Header';
import axios from 'axios';
export default {
  name: 'AddressList',
  components:{
 Header
  },
  data () {
    return {
      addressList:[] // 地址列表
    }
  },
  mounted(){
   this.getAddress(); // 获取用户地址
       
  },
  methods:{
    /*获取地址列表*/
    getAddress(){
       let address={
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMjcwY2FkZGFhMjJkYjciLCJpYXQiOjE1MjQ4OTQ5MjYsImV4cCI6MTUyNDk4MTMyNn0.99kVryZIPiJO8aXzzoIP5x7oOclOcg0sPuv6aBLub-E",
         
      }
         axios.post("/getAddress",address).then((res)=>{

          this.addressList=res.data.result.addressList
          
         
      });
    },
    /*编辑地址*/  
    edit(item){
      this.$router.push({ name: 'EditAddress',params:item}) ; 
    },

    /*添加收货地址*/
    add(){
        this.$router.push({ name: 'Addaddress'}) ; 
    }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
  .addresslist{

    width:100%;
    height:100%;
    background:#ffffff;
    position:relative;

    ul{
      width:100%;
      padding:0px 15px;
      box-sizing:border-box;
      li{
        width:100%;
        margin-top:10px;
        padding:10px;
        box-sizing:border-box;
        border:1px solid #dadada;
        display:flex;
        align-items:center;
        .right{
          width:60px;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          border-left:1px solid #dadada;
          span{
            font-size:13px;
          }

        }

        .left{
          flex:1;
          p:nth-child(1){
            font-size:13px;
            color:#000000;
            padding:5px 0px;
          }
           p:nth-child(2){
            font-size:12px;
            color:#999999;
          }
        }
      }
    }
     

     .btn_add{
     line-height:40px;
     width:90%;
     display: block;
     color:#ffffff;
     background: #000000;
     font-weight: 600;
     text-align: center;
     letter-spacing: 5px;
     position: fixed;
     bottom:10px;
     left:50%;
     transform: translateX(-50%);
     
   }
    
    
  }
</style>
