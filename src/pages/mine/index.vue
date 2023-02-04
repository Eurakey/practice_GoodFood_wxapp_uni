<script setup>
import { getMine } from '../../apis/apis';
import commentCard from '../../components/comment-card/comment-card';
import { ref } from 'vue';

//用户信息
const user_img = ref('');
const is_ch = ref(false);
const user_name = ref('name');
const school_num = ref('sid');

//评论信息

getMine({ sid: '2020' })
  .then((res) => {
    //用户信息
    user_img.value = res.user_data.image;
    is_ch.value = res.user_data.is_ch;
    user_name.value = res.user_data.user_name;
    school_num.value = res.user_data.sid;
    console.log(res);

    //评论信息
  })
  .catch((err) => console.log(err));
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
          <button style="width: 210rpx" @tap="onClickShow">作者认证</button>
          <button style="width: 210rpx" @tap="goToHelp">使用指南</button>
        </view>
      </view>
      <view class="comments">
        <view class="text">我的评价</view>
        <comment-card
          v-for="(item, index) in comments"
          :key="index"
          @like="like"
          :shop_name="item.shop.shop_name"
          :shop_score="item.shop.shop_score"
          :user_name="item.user.user_name"
          :like_count="item.user.comment.comment_like_count"
          :review_count="item.user.comment.comment_review_count"
          :image_url="item.user.image_url"
          :comment_content="item.user.comment.comment_content"
          :isLiked="item.isLiked"
          :comment_id="item.user.comment.comment_id"
          :user_avator="item.user.user_profile_photo_url"
        ></comment-card>
      </view>
    </view>
    <!-- <van-overlay :show="show" @click="onClickHide">
      <view class="wrapper">
        <view class="block" @tap.stop.prevent="noop">
          <block v-if="!is_ChiHu.is2">
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
          <block v-if="is_ChiHu.is2" class="congrats-box">
            <view class="congrats">恭喜您成为吃乎作者</view>
            <view class="success">
              <view>认证成功</view>
              <image src="/static/images/对勾小.png"></image>
            </view>
          </block>
        </view>
      </view>
    </van-overlay> -->
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
</style>
