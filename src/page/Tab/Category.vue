<template>
  <div class="category">
 
    <div ref="navWrapper" class="left_nav">
       <ul   >
           <li v-for="(item,index) in navData" :class="activeIndex==index?'active':''"  @click="clickActive(index)"  >{{item.title}}</li>
       </ul>
    </div>
    <div  class="right_container" ref="itemWrapper"  >
          <div style="padding-bottom:45px;">
              <div class="item_container"   v-for="itemlist in navData">
              <p>---{{itemlist.title}}分类---</p>
              <div v-for="item in itemlist.children">
                  <p class="list_title">{{item.title}}</p>
                    <ul class="item_list">
                      <li v-for="items in item.children" v-on:click="Category(item)"  >
                          <img src="../../assets/img/nvzhuang.png" style="width:40px;height:45px;"  />
                          <span> {{items.title}}</span>
                      </li>
                    </ul>
              </div>
           </div> 
          </div>
      </div>
   
    <Tab Index=2></Tab>      
    </div>

</template>

<script>
import Tab from './Tab';
 import BScroll from 'better-scroll'
 var navData=require('../../assets/data/json.json');

export default {
 
  name: 'Category',
  components:{
       Tab,
  },
  data () {
    return {
      isClick:false,
      scrollY: 0, // 列表在y轴上的滚动距离
      activeIndex:0, // 当前被选中的分类索引值
      navData:navData.data, // 分类数据源
      scrollToX: 0,  //滚动x轴位置
      scrollToY: -500, //滚动y轴位置
      scrollToTime: 0,  //滚动持续时间
      listHeight:[], // 每个分类下整个列表的高度
    }
  },
  created(){
    this.$nextTick(() => {
        this._initScroll();  // 初始化
        this._calculateHeight(); // 计算高度
    });
       
  },
  mounted() {  
     
   
  } ,

  computed:{
             
   },

  methods:{
    //初始化better-scroll
    _initScroll () {
      this.navScroll = new BScroll(this.$refs.navWrapper, { click: true });
      this.itemScroll = new BScroll(this.$refs.itemWrapper, { click: true, probeType: 3});
       // 滚动事件监听
       this.itemScroll.on('scroll', (pos) => {   
              this.scrollY = Math.abs(Math.round(pos.y));
              //根据滚动的距离计算当前显示的activeIndex 
              if(this.isClick){
                  this._currentIndex();
              }
            
       });

       this.itemScroll.on('touchEnd',() =>{   
            this.isClick=true;
            
       });
    },
    // 左侧列表点击事件
    clickActive(index){
       this._scrollTo(index);
       
    },
   // 右侧分类导航滚动到指定位置
    _scrollTo(index) {
      this.isClick=false;
      this.activeIndex=index; // 设置左侧索引样式
      let itemList = this.$refs.itemWrapper.getElementsByClassName('item_container');
        //获取对应元素的列表
        let el = itemList[index];
        //设置滚动时间
        this.itemScroll.scrollToElement(el, this.scrollToTime);
     // this.itemScroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
     
    },

    _calculateHeight() {
          let itemList = this.$refs.itemWrapper.getElementsByClassName('item_container');
          let height = 0;
          //把第一个高度送入数组
          this.listHeight.push(height);
          //通过循环foodList下的dom结构，将每一个li的高度依次送入数组
          for(let i = 0; i < itemList.length; i++) {
              let item = itemList[i]
              height += item.clientHeight
              this.listHeight.push(height);
          }
      },

       /*根据滚动的距离计算当前显示的activeIndex*/ 
       _currentIndex() {
        
          for(let i = 0; i < this.listHeight.length; i++) {
              //判断当currentIndex在height1和height2之间的时候显示
              let height1 = this.listHeight[i];
              let height2 = this.listHeight[i + 1];
              //          console.log('height1:'+height1+','+'height2:'+height2)
              //最后一个区间没有height2
              if(!height2 || (this.scrollY+80 >= height1 && this.scrollY+80< height2)) {
                  this.activeIndex=i;
                  return;
              }
          }
            this.activeIndex=0;
          return ;
        },

        Category(itemList){
              
               this.$router.push({ name: 'Secondary', params: {category: itemList }})   
        }



  }
}
</script>


<style lang="scss" scoped="" type="text/css">
  .category{
    display:flex;
    height:100%;
    .left_nav{
      width:80px;
      height:100%;
      background:#ffffff;
      border-right:1px solid #f5f5f5;
      overflow:hidden;
      ul{
          padding-bottom:40px; 
        li{
          position:relative;
           color:#666666;
           font-size:14px;
           height:40px;
           line-height:40px;
           text-align:center;
        }
        li.active{
           color:#000000;
           font-weight:600;
        }
         li.active:after{
           display:block; 
           content:"";
           height:20px;
           width:3px;
           position:absolute;
           top:10px;
           left:2px;
           background:#000000;
         }
      }  
    }

    .right_container{
      flex:1;
      height:100%;
      overflow:hidden;
      
    }


   .item_container{
        
        width:100%;
        h6{
          text-align:left;
        }
        .item_list{
           display:flex;
           flex-wrap:wrap;
           li{
               width:25%;
               display:flex;
               flex-direction:column ;
               justify-content:center;
               align-items:center;
               image{
                 width:40px;
                 height:40px;
               }

               span{
                 padding:5px 0px 5px 0px;
                 font-size:13px;
                 color:#000000;
               }
            }
        }
   }

   .list_title{
     font-size:16px;
     font-weight:600;
     padding:10px 0px 10px 10px;
     text-align:left;
   }
    
  }
</style>
