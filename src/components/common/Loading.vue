<template>
  <div class="loading">
    <img src="../../assets/img/loading.png"  />
    <p>数据加载中...</p>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props:["title"],
  data () {
    return {
     
    }
  },
  
}
</script>
<style lang="scss" scoped="" type="text/css">
 .loading{
   height:45px;
   width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #f5f5f5;
    img{margin-right:15px;
      -moz-transition-duration: 1s;
      -webkit-animation: rotate 1s linear infinite;
      -moz-animation: rotate 1s linear infinite;
      -o-animation: rotate 1s linear infinite;
      animation: rotate 1s linear infinite;
    
    }
   
 }


      @-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
          to{-webkit-transform: rotate(360deg)}
      }
      @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
          to{-moz-transform: rotate(360deg)}
      }
      @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
          to{-o-transform: rotate(360deg)}
      }
      @keyframes rotate{from{transform: rotate(0deg)}
          to{transform: rotate(360deg)}
      }
</style>

