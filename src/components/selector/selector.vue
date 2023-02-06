<script setup>
const emit = defineEmits(['sort', 'selection']);
const sort = (e) => {
  emit('sort', e.detail.value);
};
const selection = (e) => {
  emit('selection', ...e.detail.value);
};
</script>

<template>
  <view class="selector-container">
    <radio-group @change="sort">
      <label class="selector">
        <text>按评分</text>
        <radio value="False"></radio>
      </label>
      <label class="selector">
        <text>按评价数量</text>
        <radio value="True"></radio>
      </label>
    </radio-group>
    <checkbox-group @change="selection">
      <label class="selector">
        <text>吃乎认证</text>
        <checkbox id="chihu" class="red round" value="True"></checkbox>
      </label>
    </checkbox-group>
  </view>
</template>

<style lang="less" scoped>
.selector-container {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  position: sticky;
  top: 0rpx;
  z-index: 1;
  font-size: 35rpx;
  color: #463124;
  background-color: #ffe3cd;
  height: 88rpx;
  line-height: 88rpx;
  radio-group {
    display: flex;
    flex-wrap: nowrap;
  }
  .selector {
    height: 88rpx;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    line-height: 88rpx;
    margin-left: 30rpx;
    #chihu {
      margin-right: 0 !important;
    }
  }
  text {
    word-break: keep-all;
  }
}
</style>
