<template>
  <div class="Secondary">
   <Header title="贸易"></Header>
   <div class="nav_content" ref="NavWrapper">
         <ul :style="'width:'+ width * NavList.length +'px;'">
           <li v-for="(item,index) in NavList" v-on:click="clickItem(index)" :class="activeIndex==index?'active':''"   >
               {{item.title}}
           </li>
         </ul>
   </div>
    <div class="page_content" ref="PageWrapper">
         <ul :style="'width:'+ screenWidth * NavList.length +'px;'">
           <li  ref="SecondaryWrapper"  class="page_container"  v-for="(item,index) in NavList"  :style="'width:'+screenWidth+'px;'"  >
               <div class="Secondary_list"  >
                  <ul>
                    <li v-for="item in categoryList"   >
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
           </li>
         </ul>
   </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../../components/common/Header';
import BScroll from 'better-scroll'
export default {
  name: 'Cart',
  components:{
      Header
  },
  data () {
    return {
    categoryList:[], // 分类数据
    scrollX:0,     // pagelist 滚动的初始位置
    screenWidth:'', // 当前设备宽度
    activeIndex:0, // 当前活动索引
    width:60,      // 导航item的宽度
    scrollToTime:0,  // 滚动过度时间
    title:'222', // 标题
    NavList:'',// 导航栏
    PageList:''// 分类页面
    }
  },

  created(){
      this.$nextTick(() => {
        this._initScroll();  // 导航初始化
       
       
    });
  },

  mounted(){
     this.initData(); // 初始化基本参数
     this.getData(); // 请求数据
  },

  methods:{

      /*初始化数据*/
      initData(){
          this.screenWidth=document.body.clientWidth;  // 获取当前设备宽度
          this.title=this.$route.params.category.title; // 获取分类标题
          this.NavList=this.$route.params.category.children; // 获取分类数据
        
      },

        // 滚动列表初始化
     _initScroll () {
      this.navScroll = new BScroll(this.$refs.NavWrapper, { click: true, probeType:2,scrollY: false,scrollX:true});  // 导航列表页面
      this.pageScroll = new BScroll(this.$refs.PageWrapper, { click: true, probeType:2,scrollY: false,scrollX:true,bounce:false});  // 数据加载页面
      
      this.listScroll = new BScroll(this.$refs.SecondaryWrapper,{ click: true, probeType:2,});  // 导航列表页面
       //pageList 滚动事件监听
      this.pageScroll.on('scroll', (pos) => {   
              this.scrollX = Math.abs(Math.round(pos.x));
              this._currentIndex(); // pageList 滚动时计算当前的activeIndex
            
       });

      // pageList 触摸滚动完成
      //   this.pageScroll.on('scrollEnd',() =>{   
      //      let currentIndex=Math.round(this.scrollX/this.screenWidth);
      //      console.log( currentIndex+'---------'+this.scrollX)
      //     let pageList = this.$refs.PageWrapper.getElementsByClassName('page_container');
      //   // //获取对应元素的列表
      //    let el = pageList[currentIndex];
      //   // //设置滚动时间
      //    this.pageScroll.scrollToElement(el,0);
            
      //  });
     
    },

   // 点击分类导航,改变pagelist位置
    clickItem(index){
         this.activeIndex=index;
         let pageList = this.$refs.PageWrapper.getElementsByClassName('page_container');
        //获取对应元素的列表
        let el = pageList[index];
        //设置滚动时间
        this.pageScroll.scrollToElement(el, this.scrollToTime);
    },

   

   // 计算pageList滚动位置
    _currentIndex(){
       let pageListWidth=this.screenWidth*this.NavList.length;
       let currentIndex=Math.round(this.scrollX/this.screenWidth);
       this.activeIndex=currentIndex;

       // 改变导航的位置
        this.navScroll.scrollTo(-this.activeIndex*this.width, 0, 1000);
       // this.pageScroll.scrollTo(this.activeIndex*this.screenWidth, 0, 1000)
    },

    // 数据请求

     getData: function () {
       
          axios.post("/goodsList",{"pageSize": 20,"page": 1,categoryId:'183'}).then((res)=>{
            console.log(res);
            this.categoryList=res.data.result;
           

          });
    },
  }
}
</script>


<style lang="scss" scoped="" type="text/css">
.Secondary{
     height:100%;
     display:flex;
     flex-direction:column;
   .nav_content{
     width:100%;
     overflow:hidden;
      ul{
         display:flex;
        li{
           flex:1;
           line-height:35px;
           float:left;
           position:relative;
        }

         li.active:after{
             display:block;
             content:'';
             width:75%;
             height:3px;
             background:#000000;
             position:absolute;
             bottom:0px;
             left:50%;
             transform:translateX(-50%);    
         }
      }
   }

  .page_content{
      width:100%;
      overflow:hidden;
      flex:1;
      ul{
          display:flex;
          height:100%;
          li{
            height:100%;
            overflow:hidden;
            div{
                flex:1;
                width:100%;
                overflow:hidden;
                background:#f5f5f5;
                ul{
                  padding-bottom:40px; 
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
                        img{ width:80%; }
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
      }


  }
}
</style>
