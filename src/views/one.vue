<template>
<div class="ff">
<!-- 头部 -->
    <header>
           <img src="@/assets/切图/logo.png" alt="">
        <div>
            <van-icon name="manager-o"/>
          <van-icon name="wap-nav" />
        </div>
    </header>
    
    <div class="qy_box">
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
     <van-swipe-item>
        <img src="@/assets/切图/10quoted.jpg" alt="">
     </van-swipe-item>
     <van-swipe-item>
            <img src="@/assets/切图/banner.jpg" alt="">
     </van-swipe-item>
     <van-swipe-item>
            <img src="@/assets/切图/banner1.jpg" alt="">
     </van-swipe-item>
     <van-swipe-item>
            <img src="@/assets/切图/banner2.jpg" alt="">
     </van-swipe-item>
    </van-swipe>
    
    <ul class="qy_ul">
        <li>
            <div>
                <span></span>
                <span></span>
            </div>
        </li>
    </ul>

    <div class="qy_zx"> 
    <p>
        <ul>
         <span>全屋装修</span>
            <li>包设计</li>
            <li>包主材</li>
            <li>包水电</li>
            <li>包施工</li>
        </ul> 
    </p> 

        <img src="@/assets/切图/img1.jpg" alt="">

         <ul>
         <span>0增强，标准施工</span>
            <li>杜绝项目外包</li>
            <li>装修贷款</li>
        </ul> 

    </div>


    <div class="qy_yy">
        <h3>装修预约   </h3>
        <input type="text" placeholder="小区名">
        <input type="text" placeholder="手机号">
        <input type="text" placeholder="建筑面积"><br>
        <button>立即申请</button>
    </div>

    <div class="qy_sj">
        <h3>设计师</h3>
        <ul>
            <li> 
               <img src="@/assets/03.gif" alt="">
            </li>
            <li> 
               <img src="@/assets/03.gif" alt="">
            </li>
            <li> 
               <img src="@/assets/03.gif" alt="">
            </li>
            <li> 
               <img src="@/assets/03.gif" alt="">
            </li>
           
        </ul>
        <div class="qy_hh">
            <span>
             换一换
            </span>
            <span>
             更多设计师
            </span>
           
        </div>

        <div class="qy_qt">
            <h3>效果图</h3>
           <img src="@/assets/切图/08.gif" alt="">
        </div>
        <div class="qy_qt">
            <h3>工地直播</h3>
           <img src="@/assets/切图/1s_06.gif" alt="">
              <div class="qy_hh">
            <span>
             换一换
            </span>
            <span>
             更多设计师
            </span>
           
        </div>
        </div>
        <div class="qy_zx">
            <h3>装修攻略</h3>
           <img src="@/assets/切图/465_17.gif" alt="">
           <img src="@/assets/切图/465_17.gif" alt="">
           <img src="@/assets/切图/465_17.gif" alt="">
                
              <div class="qy_hh">
            <span>
             换一换
            </span>
            <span>
             更多设计师
            </span>
           
        </div>
        </div>


        <div class="qy_fx">
            <span>
                房先森互联网家装有别于传统装修公司与其他装修中平台，
                以自营模式整合设计师和项目经理，杜绝项目转包外包利用
                互联网将工地进行在线全景直播通过去中间环节，提供装修
                套餐+个性化定制服务
            </span>
        </div>

        <div>
             <img src="@/assets/切图/1_02.gif" alt="">
        </div>

   
    </div>




    </div>



</div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
   return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
  * 在实例初始化之后，组件属性计算之前，如data属性等
  */
  beforeCreate () {
  },
  /**
  * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
  */
  created () {
  },
  /**
  * 在挂载开始之前被调用：相关的 render 函数首次被调用。
  */
  beforeMount () {
  },
  /**
  * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
  * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
  */
  mounted () {
  },
  /**
  * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
  * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  */
  beforeUpdate () {
  },
  /**
  * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
  */
  updated () {
  },
  /**
  * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
  */
  activated () {
  },
  /**
  * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
  */
  deactivated () {
  },
  /**
  * 实例销毁之前调用。在这一步，实例仍然完全可用。
  */
  beforeDestroy () {
  },
  /**
  * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
  * 所有的事件监听器会被移除，所有的子实例也会被销毁。
  */
  destroyed () {
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
.ff{
    background: #ffff;
}
header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img{
        width: 50%;
        height: 20%;
    }
    .van-icon{
        margin-right: 20px;
    }
}

.qy_box{
    flex: 1;
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 180px;
    text-align: center;
    background: red;
   img{
       width: 100%;
       height: 180px;
   }
  }

  .qy_ul{
      width: 100%;
      height: 140px;
      background: pink;
     
  }

.qy_zx{
    img{
        width: 100%;
    }
    ul{
        display: flex;
        height: 50px;

    }
    ul li{
        margin-left: 20px;
        color: #aaa;
        line-height: 50px;
    }
    span{
        line-height: 50px;
    }
}

.qy_yy{
    width: 100%;
    height: 200px;
    text-align: center;
    input{
        margin-top: 10px;
    }
    button{
        width: 56%;
        background-color: #e1e433;
        border: none;
        margin-top: 10px;
        color: #ffffff;
        height: 30px;
    }
}

.qy_sj{
    width: 100%;
  
    ul{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        img{
            width: 60px;
        }
    }
}

.qy_hh{
    width:100% ;
    display: flex;
    span{
        width: 50%;
        border: 1px solid rgb(30, 180, 16);
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: rgb(73, 206, 21);
    }
}

.qy_qt{
    width: 100%;
    img{
        width: 100%;
    }
   
}

.qy_zx{
    width: 100%;
     ul{
        width: 100%;
    }
    ul>img{
        width: 100%;
    }
}

.qy_fx{
    width: 100%;
    margin: 0 5px;
    span{
        margin-left: 40px;
        padding: 5px;
        margin-top: 50px;
    }
}




}



</style>
