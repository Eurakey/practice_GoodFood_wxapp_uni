<template>
  <view class="comment-card">
    <!-- for_开头代表循环内数据 -->
    <view class="card-part shop-self">
      <view class="shop-name">
        <image src="/static/img/coordinates_fill.svg"></image>
        <text>{{ shop_name }}</text>
        <!-- <view>评分{{for_shop_score}}</view> -->
        <view class="stars">
          <score-stars :for_shop_score="a"></score-stars>
        </view>
      </view>

      <view class="shop-pic">
        <!-- 链接待添加 {{item.user.image_url['0']}} -->
        <scroll-view class="scroll" scroll-x :enable-flex="true">
          <image src="https://dummyimage.com/300" v-if="if_image_url_1"></image>
          <image src="https://dummyimage.com/300" v-if="if_image_url_2"></image>
          <image src="https://dummyimage.com/300" v-if="if_image_url_3"></image>
        </scroll-view>
      </view>
    </view>

    <view class="card-part user-comment">
      <view class="user-info">
        <!-- {{item.user.user_profile_photo_url}} -->
        <image src="/static/img/user-img.png"></image>
        <text>{{ for_user_name }}</text>
      </view>
      <view class="commet-content">
        {{ for_comment_content }}
        这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论这是评论
      </view>
    </view>

    <view class="card-part comment-infos">
      <view class="comment-info">
        <image :src="for_like_url" @tap="changeLike" :data-count="for_like_count" :id="for_comment_id"></image>
        <text>{{ for_like_count }}</text>
      </view>
      <view class="comment-info">
        <image src="/static/img/message.svg" @tap="goToComment"></image>
        <text>{{ for_review_count }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import scoreStars from '../score-stars/score-stars.vue';
let a = 10;
</script>

<style lang="less" scoped>
.comment-card {
  width: 704.5rpx;
  margin: 0 auto;
  border-radius: 35rpx;
  margin-bottom: 25rpx;
  box-shadow: 0px 10px 10px 1px rgba(81, 81, 81, 0.16);
  background-color: #fff1e6;
}
.comment-card .shop-self .shop-name {
  display: flex;
  justify-content: flex-start;
  height: 83rpx;
  font-size: 35rpx;
  line-height: 83rpx;
}
.comment-card .shop-self {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 2px solid #707070;
}
.comment-card .shop-self .shop-name text {
  margin-right: 10rpx;
}
.comment-card .shop-self .shop-name image {
  width: 70rpx;
  height: 70rpx;
  margin-left: 50rpx;
  margin-right: 5rpx;
  margin-top: 10rpx;
}
.comment-card .shop-self .shop-pic {
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  flex-shrink: 0;
}
.comment-card .shop-self .shop-pic image {
  width: 359rpx;
  /* object-fit: fill; */
  height: 203rpx;
  flex-shrink: 0;
  border-radius: 31.5rpx;
  margin-left: 24.5rpx;
  margin-bottom: 20rpx;
}
.comment-card .user-comment {
  /* display: flex; */

  /* max-height: 250rpx; */
  width: 660rpx;
  text-overflow: ellipsis;
  /* white-space: nowrap;  */
  overflow: hidden;
  /* overflow: hidden; */
}

.comment-card .user-comment .user-info {
  height: 98rpx;
  /* background-color: red; */
  color: #707070;
  font-size: 29.75rpx;
  display: flex;
}
.comment-card .user-comment .user-info text {
  height: 98rpx;
  line-height: 98rpx;
  display: block;
}
.comment-card .user-comment .user-info image {
  border-radius: 50%;
  width: 59.5rpx;
  height: 59.5rpx;
  margin-left: 54.25rpx;
  margin-top: 19.25rpx;
  margin-right: 15rpx;
}
.comment-card .user-comment .commet-content {
  margin-left: 33.25rpx;
  margin-right: 33.25rpx;
  margin-bottom: 43.75rpx;
}
.comment-card .comment-infos {
  display: flex;
  border-top: 2px solid #707070;
  justify-content: space-around;
  align-items: center;
  height: 87.5rpx;
}
.comment-card .comment-infos .comment-info {
  display: flex;
  align-items: center;
  font-size: 28rpx;
  color: #707070;
}
.comment-card .comment-infos .comment-info image {
  width: 60rpx;
  height: 60rpx;
}
.scroll {
  display: flex;
  height: 230rpx;
  /* align-items: center; */
}
</style>
