<template>
  <view style="height: 100%">
    <view class="user-info">
      <image src="/static/img/user-img.png"></image>
      <text>name666</text>
    </view>

    <view class="shop-info">
      <image src="/static/img/coordinates_fill.svg"></image>
      <text>店铺名称</text>
      <score-stars class="stars" shop_score="3"></score-stars>
    </view>

    <view class="user-image">
      <swiper>
        <swiper-item>
          <image src="/static/img/food.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="/static/img/food.png"></image>
        </swiper-item>
        <swiper-item>
          <image src="/static/img/food.png"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="time-location">
      <text>11-05 武汉</text>
    </view>

    <view class="sum">
      <text>共有188条评论</text>
    </view>

    <view class="comments">
      <view class="comments-user">
        <image src="/static/img/user-img.png"></image>
        <text>name666</text>
      </view>
      <view class="content">
        <view class="comments-content">
          这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论
        </view>
        <view class="comments-like">
          <image src="/static/img/like.svg" @tap="changeLike"></image>
          <text>10</text>
        </view>
      </view>
    </view>

    <view class="foot">
      <input class="input" placeholder="说点什么..." />

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

<script>
import scoreStars from '../../components/score-stars/score-stars.vue';
import { ref } from 'vue';
import { getSquareDetail } from '../../apis/apis';

//评论信息
const time = ref('');
const avator = ref('');
const user_name = ref('');
const comment = ref('');
getSquareDetail().then((res) => console.log(res.data));
</script>
<style>
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
  margin-top: 8rpx;
}
.shop-info .stars image {
  width: 50rpx;
  height: 50rpx;
  margin: 0;
}

.swiper-item image {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #707070;
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
}

.comments-content {
  width: 70%;
  padding: 26rpx;
  padding-top: 0;
}

.comments-like image {
  width: 60rpx;
  height: 60rpx;
}

.foot {
  z-index: 10;
  height: 80rpx;
  display: flex;
  padding: 20rpx;
}

.input {
  height: 50rpx;
  width: 300rpx;
  background-color: rgba(172, 145, 105, 0.699);
  border-radius: 50px;
  padding: 10rpx;
  margin-right: 20rpx;
}

.comment-icon image {
  width: 60rpx;
  height: 60rpx;
}
</style>
