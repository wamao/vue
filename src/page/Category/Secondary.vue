<template>
  <div class="Secondary">
   <Header :title="title"></Header>
   <Loading  v-if="!finish&&page==1" ></Loading>
    <div class="page_content" ref="PageWrapper">
      <ul>
        <li v-for="item in categoryList"  v-on:click="pushDetail(item)" >
            <div class="imgcontainer">
              <img :src="item.goodsImgArr.split(',')[0]" />
            </div>
            <div class="detail">
              <p class="goodsname">{{item.goodsName}}</p>
              <p class="price">{{item.goodsPrice}}</p>
            </div>
        </li>
      </ul> 
   </div>
  </div>
</template>

<script>
import Http from '../../utils/http';
import Loading from '../../components/common/Loading';
import Header from '../../components/common/Header';
import BScroll from 'better-scroll'
export default {
  name: 'Cart',
  components:{
      Header,Loading
  },
  data () {
    return {
    finish:false,
    page:1,  
    categoryList:[], // 分类数据
    categoryId:'',
    title:''
    }
  },

  created(){
      this.initData(); // 初始化基本参数
  },

  mounted(){
    
     this.getData(); // 请求数据
  },

  methods:{

      /*初始化数据*/
      initData(){
        
          this.title=this.$route.params.title; // 获取分类标题
          this.categoryId=this.$route.params.categoryId; // 获取分类数据id
        
      },

        // 滚动列表初始化
     _initScroll () {
      this.pageScroll = new BScroll(this.$refs.PageWrapper, { click: true});  // 数据加载页面
     
    },

   
    // 数据请求

    async getData() {
        let responseData=await Http.post("/goodsList",{ThirdCategoryId:this.categoryId,"pageSize": 30,"page": this.page});
        if(responseData.status==0){
           this.finish=true;
           this.categoryList=responseData.result.categoryList;
              this.$nextTick(() => {  this._initScroll();  }); // 数据加载完成 初始化列表
        }
         
    },

    //商品详情页面
     pushDetail(item){
       this.$router.push({ name: 'GoodsDetail', params: {goodsId: item.goodsId }})  ; 
    }
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
.Secondary{
     height:100%;
     width:100%;
    .page_content{
    width:100%;
    height:100%;
    background:#f5f5f5;
    overflow: hidden;
    p.title{
      padding-top:15px ;
      padding-bottom: 40px;
      font-size: 12px;
    }
    ul{
     
      width:100%;
      padding:10px 0px;
      box-sizing: border-box;
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
             height:100%;
            
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
