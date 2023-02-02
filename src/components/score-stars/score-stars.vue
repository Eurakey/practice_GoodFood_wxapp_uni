<template>
  <view class="stars">
    <image :src="'/static/img/star-' + (shop_score >= 1 ? 'fill' : 'no-fill') + '.svg'"></image>
    <image :src="'/static/img/star-' + (shop_score >= 3 ? 'fill' : 'no-fill') + '.svg'"></image>
    <image :src="'/static/img/star-' + (shop_score >= 5 ? 'fill' : 'no-fill') + '.svg'"></image>
    <image :src="'/static/img/star-' + (shop_score >= 7 ? 'fill' : 'no-fill') + '.svg'"></image>
    <image :src="'/static/img/star-' + (shop_score >= 9 ? 'fill' : 'no-fill') + '.svg'"></image>
  </view>
</template>

<script setup>
defineProps(['shop_score']);
</script>

<style lang="less" scoped>
.stars {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  image {
    width: 50upx;
    height: 50upx;
    margin: 0;
  }
}
</style>
