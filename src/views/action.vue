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
    <div class="resume">
      <div class="top">
        <div class="top_left">
          <img src="favicon.ico" width="50px" height="50px" />
        </div>
        <div class="top_right">
          <p>
            <span>陈冲</span>
            <span style="margin-left:10px;color:white;background:#2bb281;">优秀</span>
          </p>
          <p>
            <span>作品：</span>
            <span style="color:#999999;">8个</span>
            <span style="margin-left:15px;">经验：</span>
            <span style="color:#999999;">5年</span>
          </p>
          <p>
            <span>擅长风格：</span>
            <span style="color:#999999;">现代/美式/简约/新古典</span>
          </p>
          <p>
            <span>设计理念：</span>
            <span style="color:#999999;">在满足使用功能的前提下达到审美功能的最大化</span>
          </p>
        </div>
      </div>
      <div class="button">
        <div class="button_one">
          <img src="icon_logo.png" width="50px" height="50px" />
          <p style="font-size:10px;">人气(618)</p>
        </div>
        <div class="button_two">
          <img src="icon_logo.png" width="50px" height="50px"/>
          <p style="font-size:10px;">人气(618)</p>
        </div>
        <div class="button_three">
          <img src="icon_logo.png" width="50px" height="50px"/>
          <p style="font-size:10px;">人气(618)</p>
        </div>
      </div>
      <div class="brief">
          <b style="margin-left:25px;">个人简介：</b><span>毕业于中国美术学院，从事家装行业3年，积累</span>
          <br><span style="margin-left:15px;">了一定的经验。具有良好的审美能力以及独立完成项目方案</span>
          <br><span style="margin-left:15px;">设计的能力。工作期间曾完成多个室内精装修项目，</span>
          <br><span style="margin-left:15px;">熟悉室内装修施工工艺及材料的运用。切合实际生活的设计</span>
          <br><span style="margin-left:15px;">,营造舒适的私人空间</span>
      </div>
    </div>
    <div class="br"></div>
    <div class="hot">
        <div><span style="color:#2bb281;font-size:30px;">|</span>设计作品</div>
        <div style="color:#999999;font-size:12px;">设计收费 50-100万</div>
    </div>
    <div class="bodys">
      <div class="bodys_left">
        <img src="xhx.jpg">
        <br>
        <span style="margin-left:10px;font-size:13px;">欧美文化的抽象美感</span>
        <br><span style="
  color: #999999;">混搭</span><span style="
  color: #999999;">三室</span><span style="
  color: #999999;">1100元</span>
      </div>
      <div class="bodys_right">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "设计师",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.resume {
  width: 100%;
  height: 350px;
  /* background: violet; */
}
.top {
  width: 100%;
  height: 150px;
  /* background: turquoise; */
  display: flex;
}
.top > .top_left {
  width: 25%;
  height: 150px;
}
.top > .top_left > img {
  /* align-content: center; */
  margin: 20px;
}
.top > .top_right {
  width: 75%;
  height: 150px;
}
.top > .top_right > p {
  font-size: 13px;
}
.button{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
}
.button_one>img{
    border: 1px solid black;
    border-radius:100% ;
}
.button_two>img{
    border: 1px solid black;
    border-radius:100% ;
}
.button_three>img{
    border-radius:100%;
    border: 1px solid black;
}
.button_one{
    margin-top: 10px;
}
.button_two{
    margin-top: 10px;
}
.button_three{
    margin-top: 10px;
}
.brief{
    /* background: chartreuse; */
    height: 100px;
    font-size: 12px;
}
.br{
  width: 100%;
  height: 10px;
  background: #eaeaea;
}
.hot{
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
}
.bodys{
  width: 100%;
  height: 170px;
  display: flex;
}
.bodys_left{
  width: 50%;
  height: 170px;
}
.bodys_left>img{
  width: 150px;
  margin: 10px;
}
.bodys_left>span{
  margin-left: 10px;
  font-size: 10px;
}

</style>
