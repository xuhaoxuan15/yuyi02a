<template>
<div>
  <!-- 头部 -->
  <header>
    <div class="header_box">
      <img src="@/assets/切图/logo.png" alt />
      <div class="ico_box">
        <div class="ico_item">
          <p class="icon">
            <van-icon name="manager-o" />
          </p>
          <p class="ico_p">我的</p>
        </div>
        <div class="ico_item">
          <p class="icon">
            <van-icon name="wap-nav" />
          </p>
          <p class="ico_p">导航</p>
        </div>
      </div>
    </div>
    <div class="header_icon_box">
      <div class="header_icon_xl">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
          <van-dropdown-item v-model="value3" :options="option3" />
        </van-dropdown-menu>
      </div>
      <div class="header_icon_search">
        <van-icon name="search" />
      </div>
    </div>
  </header>

  <!-- 内容 -->
  <body>
    <div class="con_box">
      <div class="con_big_box">
        <div class="con_item" @click="dj">
          <img src="@/assets/切图/4效果图首页_spec_03.jpg" alt />
          <div>低彩度的温暖信息</div>
          <div>
            <p>混搭</p>
            <p>三室</p>
            <p>1100元/m</p>
          </div>
        </div>
        <div class="con_item">
          <img src="@/assets/切图/4效果图首页_spec_03.jpg" alt />
          <div>低彩度的温暖信息</div>
          <div>
            <p>混搭</p>
            <p>三室</p>
            <p>1100元/m</p>
          </div>
        </div>
        <div class="con_item">
          <img src="@/assets/切图/4效果图首页_spec_03.jpg" alt />
          <div>低彩度的温暖信息</div>
          <div>
            <p>混搭</p>
            <p>三室</p>
            <p>1100元/m</p>
          </div>
        </div>
        <div class="con_item">
          <img src="@/assets/切图/4效果图首页_spec_03.jpg" alt />
          <div>低彩度的温暖信息</div>
          <div>
            <p>混搭</p>
            <p>三室</p>
            <p>1100元/m</p>
          </div>
        </div>
        <div class="con_item">
          <img src="@/assets/切图/4效果图首页_spec_03.jpg" alt />
          <div>低彩度的温暖信息</div>
          <div>
            <p>混搭</p>
            <p>三室</p>
            <p>1100元/m</p>
          </div>
        </div>
        <div class="con_item">
          <img src="@/assets/切图/4效果图首页_spec_03.jpg" alt />
          <div>低彩度的温暖信息</div>
          <div>
            <p>混搭</p>
            <p>三室</p>
            <p>1100元/m</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
    <!-- 介绍
    <div class="tet_item">
      <div>房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务</div>
    </div> -->
  </body>
</div>
</template>

<script>
export default {
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [
        { text: "户型", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "区域", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "风格", value: "A" },
        { text: "好评排序", value: "B" },
        { text: "销量排序", value: "C" }
      ]
    };
  },
  // 侦听器
  watch: {},
  // 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
  created() {},
  //  el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
  //  如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
  mounted() {},
  // 组件方法
  methods: {
    dj() {
      this.$router.push("/list04");
    }
  },
  // 计算属性
  computed: {}
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  // position: fixed;
  // top: 0px;
  background: #fff;
  .header_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    box-sizing: border-box;
    img {
      width: 50%;
      height: 20%;
    }
    .ico_box {
      width: 20%;
      display: flex;
      align-items: center;
      .ico_item {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        p {
          margin: 0;
          padding: 0;
        }
        .icon {
          font-size: 20px;
        }
        .ico_p {
          font-size: 12px;
          color: #ddd;
        }
      }
    }
  }
  .header_icon_box {
    display: flex;
    .header_icon_xl {
      width: 80%;
      box-shadow: none;
    }
    .header_icon_search {
      width: 20%;
      height: 48px;
      background: #fff;
      text-align: center;
      line-height: 48px;
      font-size: 20px;
      box-shadow: 0 1px 12px rgba(100, 101, 102, 0.12);
    }
  }
}

.con_box {
  width: 100%;
  .con_big_box {
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  .con_item {
    margin: 5px 0px;
    width: 49%;
    height: 320px;
    border: 1px solid #ddd;
    img {
      width: 100%;
      height: 200px;
    }
    div:nth-of-type(1) {
      text-align: center;
      font-size: 19px;
      font-weight: bold;
      margin-top: 10px;
    }
    div:nth-of-type(2) {
      text-align: center;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-size: 14px;
      color: #ddd;
    }
  }
}
.tet_item {
  width: 100%;
  div {
    width: 90%;
    text-indent: 9%;
    font-size: 14px;
    margin: 0 auto;
    background: #fff;
    margin-top: 36px;
  }
}
.img_box {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
