<template>
  <view class="stars-box">
    <block v-for="(item, index) in list" :key="index">
      <image :src="item" class="star" :data-index="index + 1" @tap="scoring"></image>
    </block>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

const star_fill = '/static/img/star-fill.svg';
const star_hollow = '/static/img/star-no-fill.svg';
const score = ref(5);
const list = computed(() => [
  score.value >= 1 ? star_fill : star_hollow,
  score.value >= 2 ? star_fill : star_hollow,
  score.value >= 3 ? star_fill : star_hollow,
  score.value >= 4 ? star_fill : star_hollow,
  score.value >= 5 ? star_fill : star_hollow,
]);

const scoring = (e) => {
  score.value = e.currentTarget.dataset.index;
};
</script>

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
