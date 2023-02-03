<template>
  <view
    class="shop"
    @tap="jumpToShopsDetail"
    :data-name="item.shop_name"
    :data-comment="item.comment_count"
    :data-score="item.shop_score"
    v-for="(item, index) in info"
    :key="index"
  >
    <view class="shop-image-container">
      <image src="/static/pages/shops/shop-images/shop-image.png"></image>
    </view>

    <view class="shop-info">
      <view class="shop-info-detail">{{ shop_name }}</view>
      <view class="shop-info-detail">
        
        </view>
      </view>
      <view class="shop-info-detail comment-count">{{ comment_count }}条评论</view>
    </view>

    <view class="image-container">
      <image src="/static/pages/shops/shop-images/吃乎认证.png" v-if="item.shop_isChiHu"></image>
    </view>
  </view>
</template>

<script setup>
import scoreStars from '../score-stars/score-stars.vue';
</script>

<style lang="scss" scoped></style>
