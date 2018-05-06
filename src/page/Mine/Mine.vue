<template>
  <div class="mine" >
     <div class="user">
        <div class="user_content">
             <img class="bg_img" src="../../assets/img/header.jpg" />
             <div class="username">
                <img class="header_img" src="../../assets/img/nvzhuang.png" />
                 <p>{{userName}},欢迎您 </p>
             </div>
        </div>
     
      
     </div>
     <div>
      <ul>
        <router-link tag="li" to="/Mine">
           <div>
               <i class="iconfont"> &#xe618;</i>
                <span>我的订单</span>
               <i class="iconfont"> &#xe731;</i>
           </div>
       </router-link>
         <router-link tag="li" to="/AddCoupon">
           <div>
               <i class="iconfont"  style="font-size:20px;" > &#xe7ce;</i>
                <span>我的收藏</span>
               <i class="iconfont"> &#xe731;</i>
           </div>
        </router-link>
       <router-link tag="li" to="/MyCoupon">
           <div>
              <i class="iconfont"> &#xe624;</i>
                <span>我的优惠券</span>
             <i class="iconfont"> &#xe731;</i>
           </div>
        </router-link>
         <router-link tag="li" to="/AddressList">  
           <div>
               <i class="iconfont"> &#xe715;</i>
                <span>地址管理</span>
              <i class="iconfont"> &#xe731;</i>
           </div>
       </router-link>
        <li v-on:click="pushPage(3)" >  
           <div>
               <i class="iconfont"> &#xe60e;</i>
                <span>联系客服</span>
               <i class="iconfont">  &#xe731;</i>
           </div>
        </li>
      
      
      </ul>
     
     
     </div>
        <router-view></router-view>
     <Tab Index=4></Tab>
  </div>
</template>

<script>
 import BScroll from 'better-scroll';
 import Tab from '../Tab/Tab';
export default {
  name: 'Cart',
  components:{Tab},
  data () {
    return {
     
    }
  },
   created(){
   
       
  },
  computed:{
    userName:function(){
      return this.$store.state.userInfo.userName;
    }
  },
  methods:{
    pushPage(e){
      alert(this.$store.state.userInfo.userName)
    }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
  .mine{
    height:100%;
    width:100%;
    overflow:hidden;
  .user{
    margin-top:20px;
    margin-bottom:40px;
    display:flex;
    align-items:center;
    box-sizing:border-box;
    justify-content:center;
   .user_content{
     position:relative;
     width:92%;
     .bg_img{
       width:100%;
       height:140px;
       border-radius:10px;
     }
     .username{
       position:absolute;
       top:0px;
       left:0px;
       width:100%;
       height:100%;
       display:flex;
       align-items:center;
       img{
         width:80px;
         height:80px;
         border-radius:40px;
         margin:0px 15px 0px 20px;
       }

       p{color:#ffffff;font-weight:600;font-size:15px;}
     }
   }


    p{
      display:flex;
      flex-direction:column;
    }


  }


    ul{
      width:100%;
      li{
        width:100%;
        padding-left:15px;
        box-sizing:border-box;
      
        div{
           display:flex;
           border-bottom:1px solid #f5f5f5;
           height:45px;
           justify-content:center;
           align-items:center;
           padding-right:15px;
           box-sizing:border-box;

            i{
             
             display:block;
              text-align:left;
              font-size:24px;
            }

            span{
              flex:1;
              padding-left:10px;
              box-sizing:border-box;
              text-align:left;
            }
        }
      }
    }
  }
</style>
