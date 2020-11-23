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
    <div class="nav">
      <div>筛选ⅴ</div>
      <div>阶段ⅴ</div>
      <div>排序ⅴ</div>
      <div>
        <i class="iconfont icon-search" style="color:#2bb281;font-size:20px;"></i>
      </div>
    </div>
    <div class="main">
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
        <div class="show">
            <div class="main_left">
                <img src="icon_logo.png" style="margin:6px">
            </div>
            <div class="main_right">
                <p>戈雅公寓24栋</p>
                <p style="color:white;background:#39c894;width:50px;">泥木工程</p>
                <p>
                    <span>三室</span>
                    <span style="margin-left:15px">69-90m2</span>
                    <span style="margin-left:25px"><i class="iconfont icon-location">10km</i></span>
                </p>
            </div>
        </div>
    </div>
    <div class="page">
        <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
    </div>
    <div class="end">
        <p style="text-align: center;"><i class="iconfont icon-tel" style="color:#2bb281;font-size:20px;"></i>服务热议：400-9977-658</p>
        <div class="texts">
            <div style="color:#39c894">触屏版</div>
            <div>电脑版</div>
            <div>关于我们</div>
            <div>练习我们</div>
        </div>
    </div>
    <div>
        <p style="color:#999999;font-size:15px;text-align: center;">@ 2016 sirfang.com 刚装修就找房先森</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "工作直播",
    };
  },
};
</script>

<style>
.nav {
  display: flex;
  width: 100%;
  height: 35px;
  border: 0.8px solid #eaeaea;
}
.nav > div {
  width: 25%;
  height: 35px;
  line-height: 35px;
  text-align: center;
}
.main{
    font-size: 12px;
    width: 100%;
    height: 100%;
}
.show{
    width: 100%;
    height: 100%;  
    display: flex;
    border-bottom: 0.8px solid #eaeaea;
}
.main_right{
    margin-left: 20px;
    
}
.texts{
    display: flex;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    justify-content: space-around;
    border-bottom: 1px solid #eaeaea;
}
</style>
