<script setup>
import { computed, ref } from 'vue';
import scoreStars from '../score-stars/score-stars.vue';
import { onShow } from '@dcloudio/uni-app';

const shop_info = ref({});
onShow(() => {
  uni.getStorage({
    key: 'shop',
    success: (res) => {
      shop_info.value = res.data;
    },
  });
});
//收藏店铺
const btnText = computed(() => (is_collected.value ? '收藏成功' : '收藏店铺'));
const btnColor = computed(() => (is_collected.value ? '#EF6938' : '#74665d'));
const is_collected = ref(false);
const toggleCollect = () => {
  is_collected.value = !is_collected.value;
};
</script>

<template>
  <view class="header">
    <view class="shop-info">
      <view class="shop-info-pic-container shop-info-items">
        <image :src="shop_info.avator"></image>
      </view>

      <view class="shop-info-items details">
        <view class="info-item">{{ shop_info.shop_name }}</view>
        <view class="info-item">
          <score-stars :shop_score="shop_info.shop_score"></score-stars>
          <view class="info-item">{{ shop_info.comment_count }}条评价</view>
        </view>
      </view>
    </view>

    <view class="buttons">
      <button :style="'background-color: ' + btnColor + ';'" @tap="toggleCollect">{{ btnText }}</button>
      <button @tap="goToComment">我要评价</button>
    </view>
  </view>
</template>

<style lang="less" scoped>
.header {
  margin: 0;
  padding: 0;
  height: 440rpx;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-top: 1px solid #000000;
  border-bottom: 6rpx solid #707070;

  .shop-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 212rpx;
    margin-top: 55.5rpx;
    .shop-info-pic-container {
      width: 212rpx;
      height: 212rpx;
      /* margin-right: 300rpx; */
      margin-left: 104rpx;
      margin-right: 44rpx;

      image {
        width: 212rpx;
        height: 212rpx;
        border-radius: 35rpx;
      }
    }
    .shop-info-items {
      line-height: 60rpx;
      /* margin: 100rpx; */

      .info-item:nth-child(1) {
        font-size: 35rpx;
        font-weight: 1000;
        color: #463124;
        word-break: keep-all;
      }

      .info-item:nth-child(3) {
        font-weight: 400rpx;
        color: #463124;
        font-size: 35rpx;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 40rpx;
    button {
      background-color: #74665d;
      width: 268rpx;
      height: 88rpx;
      border-radius: 82.5rpx;
      font-size: 35rpx;
      color: #ffe3cd;
    }
    button:nth-child(1) {
      margin-left: 80rpx;
    }
    button:nth-child(2) {
      margin-right: 80rpx;
    }
    button:active {
      background-color: rgb(37, 33, 33);
    }
  }
}
</style>
