<template>
  <div>
    <van-nav-bar>
      <template #title>{{ title }}</template>
      <template #left>
        <img src="logo.png" width="100px" />
      </template>
      <template #right>
        <i class="iconfont icon-user" size="15" style="margin-right:5px;"></i>
        <!-- <p>1</p> -->
        <i class="iconfont icon-nav" size="15"></i>
      </template>
    </van-nav-bar>
    <div class="news">
      <div style="font-size:15px;padding-top:20px;padding-left:15px;">
        观澜时代国际花园云邸5栋&nbsp;
        <span style="background:#2bb281;color:white;">泥木工程</span>
      </div>
      <p style="font-size:12px;">
        <span>
          户型：
          <span style="color:#999999;">二室</span>
        </span>
        <span style="margin-left:15px">
          面积：
          <span style="color:#999999;">60-90m2</span>
        </span>
        <span style="margin-left:15px">
          装修预算：
          <span style="color:#999999;">18万</span>
        </span>
      </p>
      <p style="font-size:10px;">
        <b>工地概况：</b>
        <span style="color:#999999;">百万平米超级大盘，占据线钱塘江北岸最美的江湾和湿地</span>
      </p>
      <div class="hot">
        <div class="hot_left">
          <i class="iconfont icon-pencle" style="color:#1b9af7;"></i>
          <span style="color:#1b9af7;margin-left:5px;">评论(10)</span>
        </div>
        <div class="hot_right">
          <i class="iconfont icon-tag" style="color:#2bb281;"></i>
          <span style="color:#2bb281;margin-left:5px;">预约参观工地</span>
        </div>
      </div>
    </div>
    <van-steps direction="vertical" :active="0" style="background:pink;">
      <p>
        设计师：
        <span style="color:#2bb281">温佳恒</span>
        <span style="margin-left:10px;">项目经理：</span>
        <span style="color:#999999">王兆龙</span>
      </p>
      <van-step>
        <p style="font-size:15px;">
          <span style="background:#eaeaea">2016-07-11</span>
          <span style="color:white;background:#2bb281;margin-left:5px;">泥木</span>
          <span style="color:white;background:orange;margin-left:10px;">验收阶段</span>
        </p>
        <h4>泥土工程验收成功</h4>
        <van-row>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
        </van-row>
        <van-row>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
        </van-row>
      </van-step>
      <van-step>
        <p style="font-size:15px;">
          <span style="background:#eaeaea">2016-07-11</span>
          <span style="color:white;background:#2bb281;margin-left:5px;">泥木</span>
          <span style="color:white;background:orange;margin-left:10px;">验收阶段</span>
        </p>
        <h4>泥土工程验收成功</h4>
        <van-row>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
          <van-col span="8"><img src="img1.jpg" width="100%" height="100%"></van-col>
        </van-row>
      </van-step>
      <van-step>
        <p style="font-size:15px;">
          <span style="background:#eaeaea">2016-07-11</span>
          <span style="color:white;background:#2bb281;margin-left:5px;">泥木</span>
          <span style="color:white;background:orange;margin-left:10px;">验收阶段</span>
        </p>
        <h4>泥土工程验收成功</h4>
        <img src="2.png" width="100%" height="100%">
      </van-step>
    </van-steps>
    <div class="texts">
        <p>房先森互联网家装有别于传统装修公司与其他的装修中</p>
        <p>介平台，以自营模式整合设计师与项目经理，杜绝项目转</p>
        <p>包外包，利用互联网将工地进行在线全景直播，通过去中</p>
        <p>间环节，提供装修套餐+个性化定制服务</p>
    </div>
    <div class="br"></div>
    <div class="end">
        <p style="text-align: center;"><i class="iconfont icon-tel" style="color:#2bb281;font-size:20px;"></i>服务热议：400-9977-658</p>
        <div class="textes">
            <div style="color:#39c894">触屏版</div>
            <div>电脑版</div>
            <div>关于我们</div>
            <div>练习我们</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "工地直播",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.news {
  width: 100%;
  height: 180px;
  /* background: #eaeaea; */
}
.news > p {
  margin-left: 15px;
}
.hot {
  width: 100%;
  height: 50px;
  /* background: red; */
  display: flex;
  line-height: 50px;
  /* justify-content: space-around; */
  /* text-align: center; */
  /* align-content: center; */
}
.hot > .hot_left {
  width: 40%;
  height: 30px;
  border: 1px solid black;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10%;
}
.hot > .hot_right {
  width: 40%;
  height: 30px;
  border: 1px solid black;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  /* color: darkgray; */
}
.texts>p{
    font-size: 12px;
    margin-left: 20px;
    /* text-align: center; */
}
.br{
    background: #eaeaea;
    width: 100%;
    height: 9px;
}
.textes{
    display: flex;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    justify-content: space-around;
    border-bottom: 1px solid #eaeaea;
}
</style>
