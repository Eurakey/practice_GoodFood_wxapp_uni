<template>
  <view class="shop" @tap="jumpToShopsDetail">
    <view class="shop-image-container">
      <image :src="props.avator"></image>
    </view>

    <view class="shop-info">
      <view class="shop-info-detail">{{ props.shop_name }}</view>
      <view class="shop-info-detail">
        <score-stars :shop_score="props.shop_score"></score-stars>
      </view>
      <view class="shop-info-detail comment-count">{{ props.comment_count }}条评论</view>
    </view>

    <view class="image-container">
      <image v-if="props.isChiHu" src="/static/img/chi-hu.png"></image>
    </view>
  </view>
</template>

<script setup>
import scoreStars from '../score-stars/score-stars.vue';

const props = defineProps([
  'shop_name',
  'comment_count',
  'shop_score',
  'shop_name',
  'comment_count',
  'isChiHu',
  'avator',
]);

const jumpToShopsDetail = () =>
  uni.setStorage({
    key: 'shop',
    data: {
      shop_name: props.shop_name,
      shop_score: props.shop_score,
      avator: props.avator,
      comment_count: props.comment_count,
    },
    success: function () {
      uni.navigateTo({
        url: `../shop-detail/shop-detail`,
      });
    },
  });
</script>

<style lang="less" scoped>
.shop:nth-child(1) {
  margin-top: 0;
}
.shop {
  height: 214rpx;
  background-color: #fff7f0;
  margin-top: 11rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 35rpx;
  color: #463124;

  .shop-info {
    margin-left: -135rpx;
  }
  .shop-info-detail {
    white-space: nowrap;
    word-break: keep-all;
  }
  .image-container {
    width: 97rpx;
    height: 97rpx;
    margin-right: 72rpx;
    image {
      width: 97rpx;
      height: 97rpx;
    }
  }
  .shop-image-container {
    width: 140rpx;
    height: 140rpx;
    margin-left: 49rpx;
    image {
      width: 140rpx;
      height: 140rpx;
      border-radius: 17.5rpx;
    }
  }
  .comment-count {
    color: #707070;
  }
}
</style>
