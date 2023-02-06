<script setup>
import scoreStars from '../../components/score-stars/score-stars.vue';
import { ref } from 'vue';
import { getSquareDetail } from '../../apis/apis';
import { onShow } from '@dcloudio/uni-app';
import { addInfo } from '../../public-methods/methods';
import { login_store } from '../../stores/login';
import { storeToRefs } from 'pinia';

//评论信息
const comment_info = ref({});
onShow(() => {
  console.log('hi');
  uni.getStorage({
    key: 'comment',
    success: (res) => {
      comment_info.value = res.data;
    },
  });
});

//获取评论回帖
const comments = ref([]);
const getComments = () => {
  getSquareDetail({}).then((res) => addInfo(comments.value, res.data));
};
getComments();

//二级评论
const preview = (e) => {
  const main = storeToRefs(login_store());
  const user_name = main.user_name;
  const comment = e.detail.value;
  const user_profile_photo_url = main.avator;

  const my_comment = { user_name, comment, user_profile_photo_url };
  comments.value.unshift(my_comment);
  //暂无发布二级评论的api
  //
};
</script>

<template>
  <view style="height: 100%">
    <view class="user-info">
      <image :src="comment_info.user_avator"></image>
      <text>{{ comment_info.user_name }}</text>
    </view>

    <view class="shop-info">
      <image src="/static/img/coordinates_fill.svg"></image>
      <text>{{ comment_info.shop_name }}</text>
      <score-stars class="stars" :shop_score="comment_info.shop_score"></score-stars>
    </view>

    <view class="user-image">
      <swiper autoplay="true" indicator-dots="true">
        <swiper-item v-for="(item, index) in comment_info.image_url" :key="index">
          <image :src="item" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="time-location">
      <text>11-05 武汉</text>
    </view>

    <view class="sum">
      <text>共有{{ comment_info.review_count }}条评论</text>
    </view>

    <view v-for="(item, index) in comments" :key="index" class="comments">
      <view class="comments-user">
        <image :src="item.user_profile_photo_url"></image>
        <text>{{ item.user_name }}</text>
      </view>
      <view class="content">
        <view class="comments-content">
          {{ item.comment }}
        </view>
        <view class="comments-like">
          <image src="/static/img/like.svg" @tap="changeLike"></image>
          <!-- 暂无点赞二级评论的api，先用随机数替代显示 -->
          <text>{{ Math.ceil(Math.random(index) * 100) }}</text>
        </view>
      </view>
    </view>

    <view class="foot">
      <input class="input" name="comment" placeholder="说点什么..." @confirm="preview" />

      <view class="comment-icon">
        <image src="/static/img/like.svg" @tap="goToComment"></image>
        <text>10</text>
      </view>

      <view class="comment-icon">
        <image src="/static/img/star-no-fill.svg" @tap="goToComment"></image>
        <text>10</text>
      </view>

      <view class="comment-icon">
        <image src="/static/img/message.svg" @tap="goToComment"></image>
        <text>10</text>
      </view>
    </view>
  </view>
</template>

<style scoped>
.user-info {
  height: 98rpx;
  /* background-color: red; */
  color: #707070;
  font-size: 29.75rpx;
  display: flex;
  padding-bottom: 10rpx;
  border-bottom: solid 1px grey;
}

.user-info text {
  height: 98rpx;
  line-height: 126rpx;
  font-size: large;
  display: block;
}

.user-info image {
  border-radius: 50%;
  width: 78.5rpx;
  height: 78.5rpx;
  margin-left: 36.25rpx;
  margin-top: 19.25rpx;
  margin-right: 25rpx;
}

.shop-info {
  display: flex;
  justify-content: flex-start;
  height: 83rpx;
  font-size: 35rpx;
  line-height: 83rpx;
  padding-top: 30rpx;
  padding-bottom: 30rpx;
}
.shop-info text {
  margin-right: 10rpx;
  font-weight: 600;
}
.shop-info image {
  width: 70rpx;
  height: 70rpx;
  margin-left: 10rpx;
  margin-right: 5rpx;
  margin-top: 10rpx;
}

.stars {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* background-color: red; */
}
.shop-info .stars image {
  width: 50rpx;
  height: 50rpx;
  margin: 0;
}

swiper {
  height: 420rpx;
  width: 88%;
  margin-left: 6%;
}
swiper image {
  width: 100%;
  height: 100%;
}

.time-location {
  padding: 6rpx;
  border-bottom: 1px solid grey;
}

.time-location text {
  color: #707070;
}

.sum {
  padding-bottom: 10rpx;
}

.sum text {
  line-height: 60rpx;
  color: black;
}

.comments {
  width: 704.5rpx;
  margin: 0 auto;
  border-radius: 35rpx;
  margin-bottom: 25rpx;
  box-shadow: 0px 10px 10px 1px rgba(81, 81, 81, 0.16);
  background-color: #fff1e6;
}

.comments-user {
  height: 98rpx;
  color: #707070;
  font-size: 29.75rpx;
  display: flex;
}

.comments-user image {
  border-radius: 50%;
  width: 59.5rpx;
  height: 59.5rpx;
  margin-left: 54.25rpx;
  margin-top: 19.25rpx;
  margin-right: 15rpx;
}

.comments-user text {
  height: 98rpx;
  line-height: 98rpx;
  display: block;
}

.content {
  display: flex;
  justify-content: space-between;
}

.comments-content {
  width: 70%;
  padding: 26rpx;
  padding-top: 0;
}

.comments-like {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 20rpx;
}
.comments-like image {
  width: 60rpx;
  height: 60rpx;
}

.foot {
  z-index: 10;
  height: 90rpx;
  display: flex;
  padding: 20rpx;
  background-color: #ffe3cd;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.input {
  height: 50rpx;
  width: 300rpx;
  background-color: #d7c2b2;
  border-radius: 50px;
  padding: 10rpx;
  margin-left: 20rpx;
  margin-right: 60rpx;
}

.phcolor {
  color: #c8c9cc;
  font-size: 15px;
}

.comment-icon image {
  width: 60rpx;
  height: 60rpx;
}

.comment-icon text {
  line-height: 8rpx;
}
</style>
