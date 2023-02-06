<script setup>
import { getMine, authenticate } from '../../apis/apis';
import commentCard from '../../components/comment-card/comment-card';
import { ref } from 'vue';
import { commentAdaptor } from '../../public-methods/adaptor';
import { like_list, addInfo } from '../../public-methods/methods';
import { login_store } from '../../stores/login';
import { storeToRefs } from 'pinia';

//初始化用户信息
const main = storeToRefs(login_store());
const user_img = main.avator;
const is_ch = main.is_ch;
const user_name = main.user_name;
const school_num = main.school_id;

//评论信息
const comments = ref([]);

//获取评论数据
const getNewComments = (school_num) => {
  getMine({ school_num }).then((res) => {
    const new_comments = res.comment.map((item) => commentAdaptor(item, 'mine'));
    addInfo(comments.value, new_comments);
  });
};

//点赞
const like = like_list(comments.value);
getNewComments(school_num);

//弹出层控制
const show = ref(false);
const success = ref(false);
const toggleShow = () => {
  show.value = !show.value;
};

//提交认证
const submitSchoolNum = (e) => {
  authenticate({ id: e.detail.value.input }).then((res) =>
    res.is2 ? (success.value = true) : uni.showToast({ icon: 'error', title: '认证失败' }),
  );
};

//改名
const goToChangeName = () => uni.navigateTo({ url: '../change-name/index' });

//帮助页
const goToHelp = () => uni.navigateTo({ url: '../help/index' });

//收藏页
const goToCollection = () => uni.navigateTo({ url: '../collection/index' });
</script>

<template>
  <view style="height: 100%">
    <view id="body">
      <view class="header">
        <image class="bac" src="/static/img/bac.png"></image>
        <view class="user-info">
          <view class="head-pic" @tap="changePhoto">
            <image :src="user_img" mode="aspectFill"></image>
            <image class="v-prove" src="/static/img/v认证.png" v-if="is_ch"></image>
          </view>
          <view class="infos">
            <text @tap="goToChangeName">{{ user_name }}</text>
            <text>学号：{{ school_num }}</text>
          </view>
        </view>
        <view class="buttons">
          <button style="width: 210rpx" @tap="goToCollection">我的收藏</button>
          <button style="width: 210rpx" @tap="toggleShow">作者认证</button>
          <button style="width: 210rpx" @tap="goToHelp">使用指南</button>
        </view>
      </view>
      <view class="comments">
        <view class="text">我的评价</view>
        <comment-card
          v-for="(item, index) in comments"
          :key="index"
          @like="like"
          :shop_name="item.shop_name"
          :shop_score="item.shop_score"
          :user_name="item.user_name"
          :like_count="item.comment_like_count"
          :review_count="item.comment_review_count"
          :image_url="item.image_url"
          :comment_content="item.comment_content"
          :isLiked="item.isLiked"
          :comment_id="item.comment_id"
          :user_avator="item.user_profile"
        ></comment-card>
      </view>
    </view>

    <!-- 弹出层 -->
    <view v-if="show" class="overlay" @tap="toggleShow">
      <view class="wrapper">
        <view class="block" @tap.stop.prevent="noop">
          <block v-if="!success">
            <form action="" @submit.stop.prevent="submitSchoolNum">
              <input
                class="input"
                name="input"
                type="number"
                placeholder="输入学号"
                maxlength="13"
                placeholder-class="input-text"
                @confirm="submitSchoolNum"
              />
              <button class="button" form-type="submit">认证</button>
            </form>
          </block>
          <block v-if="success" class="congrats-box">
            <view class="congrats">恭喜您成为吃乎作者</view>
            <view class="success">
              <view>认证成功</view>
              <image src="/static/img/success.png"></image>
            </view>
          </block>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
#body {
  background-color: #ffe3cc;
}
.bac {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}
.header {
  height: 376.25rpx;
  background-color: #ffe3cc;
  z-index: 1;
  position: relative;
}
.user-info {
  display: flex;
}
.infos {
  display: flex;
  flex-direction: column;
  height: 264.25rpx;
  justify-content: center;
}
.infos text {
  color: white;
}
.infos text:nth-child(1) {
  font-size: 52.5rpx;
}
.infos text:nth-child(2) {
  font-size: 35rpx;
}
.head-pic {
  margin: 43.75rpx 0;
  margin-bottom: 28rpx;
  margin-left: 87.5rpx;
  margin-right: 50.75rpx;
  position: relative;
}
.header .user-info .v-prove {
  position: absolute;
  width: 90rpx;
  height: 90rpx;
  z-index: 3;
  bottom: -10rpx;
  right: -10rpx;
  object-fit: cover;
}
.head-pic image {
  border-radius: 50%;
  width: 192.5rpx;
  height: 192.5rpx;
  object-fit: cover;
  object-position: center;
}
.buttons {
  display: flex;
  word-wrap: none;
  word-break: keep-all;
  margin-bottom: 21.25rpx;
}
.buttons button {
  width: 100rpx;
  background-color: rgba(70, 49, 36, 0.47);
  color: white;
  height: 87.5rpx;
  border-radius: 50rpx;
}
.buttons button:active {
  background-color: rgb(63, 62, 62);
}
.comments {
  border-radius: 43.75rpx 43.75rpx 0 0;
  border: 1px solid grey;
}
.text {
  text-align: center;
  height: 106.75rpx;
  line-height: 106.75rpx;
  border-bottom: 5rpx solid #707070;
  font-size: 35rpx;
  color: #74665d;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 582.75rpx;
  height: 346.5rpx;
  border-radius: 35rpx;
  background-color: #ffe3cc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.wrapper .block .input {
  width: 442.75rpx;
  height: 98rpx;
  background-color: white;
  border-radius: 49rpx;
  color: black;
  font-size: 35rpx;
}
.wrapper .block .button {
  width: 210rpx;
  height: 101.5rpx;
  background-color: white;
  border-radius: 50rpx;
}
.input-text {
  color: #463124;
  font-size: 35rpx;
  margin-left: 50rpx;
}
.success image {
  width: 59.5rpx;
  height: 59.5rpx;
  margin-left: 20rpx;
}
.congrats-box {
  display: flex;
  flex-direction: column;
}
.success {
  display: flex;
  color: #07c160;
  font-size: 42rpx;
  font-weight: bold;
}
.congrats {
  font-size: 42rpx;
  font-weight: bold;
}
.block .button {
  color: #463124;
  font-size: 50rpx;
  margin-top: 30rpx;
  font-weight: 400;
}
.overlay {
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
}
</style>
