<template>
  <div class="addaddress" >
   <Header title="新增地址" ></Header>
   <div class="addaddress_content">
     <p class="title">个人信息</p>
      <div class="edit_content bottom">
        <span>收货人姓名:</span>
        <input placeholder="请输入收货人姓名" v-model="ContactPerson"/>
      </div>
    
     <div class="edit_content">
        <span>手机号码:</span>
        <input placeholder="请输入手机号" v-model="ContactNumber"/>
      </div>
     </div>
    <div class="addaddress_content">
   <p class="title">收货地址</p>
   <div class="edit_content bottom" v-on:click="select">
     <span >地区:</span>
     <input v-model="ContactAddress" :readonly=true placeholder="省份 城市 县区"> 
    
   </div>
    <div class="edit_content">
     <span>详细地址:</span>
     <input placeholder="请输入详细地址" v-model="ContactDetailAddress"/>
   </div>
   </div>
    <a href="javascript:;" class="btn_add"  v-on:click="add"> 确认</a>
    
    <van-actionsheet v-model="show">
      <van-area :area-list="areaList" @cancel="cancel"  @confirm="confirm" title="选择地区"/>
    </van-actionsheet>
  </div>
  
</template>

<script>
import { Area,Toast} from 'vant';
import AreaList from '../../assets/data/area';


import Header from '../../components/common/Header';
import axios from 'axios';
export default {
  name: 'Cart',
   components: {
     Header,
    
   },
  data () {
    return {
      show:false,
      areaList:AreaList,
      ContactPerson:'', // 联系人
      ContactNumber:'', // 联系电话
      ContactAddress:'', //地区
      ContactDetailAddress:''// 详细地址
    }
  },
   
  methods:{
   
    add(){

      if(this.ContactPerson.length==0){
          Toast('请输入联系人姓名');
          return;
      }

      if(this.ContactNumber.length==0){
          Toast('请输入联系人电话');
          return;
      }


      if(this.ContactAddress.length==0){
          Toast('请选择所在地区');
          return;
      }

      if(this.ContactDetailAddress.length==0){
          Toast('请输入详细地址');
          return;
      }

      let address={
          token:"JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwZmNlM2E1ZGExNDc5ZGIiLCJpYXQiOjE1MjQ4NDQ5MTcsImV4cCI6MTUyNDkzMTMxN30.X2A2L4Nm3OJAkn6Yp7edb5-3mi96IB_LqUAdUoZpHuI",
          ContactPerson:this.ContactPerson, // 联系人
          ContactNumber:this.ContactNumber, // 联系电话
          ContactAddress:this.ContactAddress, //地区
          ContactDetailAddress:this.ContactDetailAddress// 详细地址
      }

      axios.post("/addAddress",address).then((res)=>{
          console.log(res);
        });

    },
    select(){
      this.show=true;
    },
    confirm(value){
      if(value[0].code<0){
          Toast('请选择所在省份');
          return ;
      }
      if(value[1].code<0){
          Toast('请选择所在城市');
            return ;
      }
      if(value[2].code<0){
          Toast('请选择所在地区');
            return ;
      }

      this.ContactAddress=value[0].name+'/'+value[1].name+'/'+value[2].name;
      this.show=false;
      
    },
    cancel(){
       this.show=false;
    }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
  .addaddress{
    position:relative;
    width:100%;
    box-sizing: border-box;
    background: #f5f5f5;

    .addaddress_content{
     padding:0px 15px;
     box-sizing: border-box;
     width:100%;
     background: #ffffff;
    }
   .title{
     font-size:12px;
     color:#666666;
     padding:5px 0px;
     background: #ffffff;
     margin-top: 8px;
     
   }

   .edit_content{
     height:40px;
     display: flex;
     width:100%;
     align-items: center;
     
     background: #ffffff;

     span{
       width:80px;
       font-size: 12px;
       color:#000000;
     }

     input{
       flex: 1;
       padding-left: 5px;
       border:none;
       outline: none;
       font-size: 12px;
       color:#000000;
     }
   }

   .bottom{
     border-bottom: 1px solid #f5f5f5; 
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
