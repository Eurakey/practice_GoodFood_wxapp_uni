<template>
  <view class="stars-box">
    <block v-for="(item, index) in list" :key="index">
      <image :src="item" class="star" :data-index="index" @tap="scoring"></image>
    </block>
  </view>
</template>

<script setup></script>

<style scoped>
.stars-box {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 50rpx;
  margin: 20rpx;
}
.star {
  height: 60rpx;
  width: 60rpx;
}
</style>
