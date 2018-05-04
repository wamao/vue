<template>
  <div class="addresslist" >
  <Header title="地址管理"></Header>
    <Loading v-if="!finish" ></Loading>
    <div v-if="addressList.length==0&&finish"   class="address_no">
       <i  class="iconfont">&#xe619;</i>
        <p>您还未留下踪迹</p>
    </div>
    <div  ref="addressWrapper" class="addressList_content">
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
      <div class="btn_add">
         <a href="javascript:;"   v-on:click="add">添加新收货地址</a>
      </div>
   
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Header from '../../components/common/Header';
import Loading from '../../components/common/Loading';
import Http from '../../utils/http';

export default {
  name: 'AddressList',
  components:{
 Header,Loading
  },
  data () {
    return {
      finish:false,
      addressList:[] // 地址列表
    }
  },
   created(){
   
  },
  mounted(){
   this.getAddress(); // 获取用户地址
       
  },
  methods:{
     //初始化better-scroll
    _initScroll () {
      this.addressScroll = new BScroll(this.$refs.addressWrapper, { click: true });
    },
    /*获取地址列表*/
   async getAddress(){
        var responseData= await Http.post('/getAddress',{});
        if(responseData.status==0){
           this.finish=true;
           this.addressList=responseData.result.addressList;
             this.$nextTick(() => {  this._initScroll();  }); // 数据加载完成 初始化列表
        }
       
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
    display:flex;
    flex-direction:column;
 .addressList_content{
    flex:1;
  
    overflow:hidden;
 }
    ul{
      width:100%;
      padding:0px 15px;
      padding-bottom:70px;
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
            font-size:12px;
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
     
     width:100%;
     display: flex;
     color:#ffffff;
     background: #ffffff;
     height:60px;
     text-align: center;
   
     position: fixed;
     bottom:0px;
     left:0px;
     justify-content:center;
     align-items:center;
     a{
         letter-spacing: 5px;
      line-height:40px;
       display:block;
       width:90%;
       background:#000000;
       color:#ffffff;
        font-weight: 500;
     }
   
     
   }

   .address_no{
     width:100%;
     height:50%;
     display:flex;
     justify-content:center;
     align-items:center;
     flex-direction:column;
   
     i{
      
       font-size:50px;
       margin-bottom:10px;
     }
   }
    
    
  }
</style>
