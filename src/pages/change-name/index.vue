<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { changeName } from '../../apis/apis';
import { ref } from 'vue';

const my_name = ref('name');

onLoad((options) => {
  console.log(options);
  uni.setStorageSync('user_name', my_name.value);
});
const goBack = () => uni.navigateBack({ delta: 1 });

const change = (e) => {
  if (e.detail.value.input.length <= 1) {
    return;
  }
  console.log(e);
  uni.setStorageSync('user_name', my_name.value);
  changeName({ my_name });
  goBack();
};
</script>

<template>
  <view id="body">
    <form action="" @submit.stop.prevent="change">
      <view class="parts header">
        <button id="button" @tap="goBack">取消</button>
        <view>编辑名字</view>
        <button id="button" form-type="submit">保存</button>
      </view>
      <view class="parts">
        <input type="text" v-model="my_name" name="input" maxlength="20" />
      </view>
      <view class="parts hint">请设置2-20个字符</view>
    </form>
  </view>
</template>

<style>
/* pages/changeName/changeName.wxss */
.header {
  display: flex;
  justify-content: space-around;
}
page {
  background-color: black;
  color: white;
  font-size: 42rpx;
}
#button {
  color: white;
  font-size: 42rpx;
  width: 84rpx;
  padding: 0;
  margin: 0;
  font-weight: 400;
}
input {
  width: 651rpx;
  height: 129.5rpx;
  border-radius: 35rpx;
  background-color: #7d7d7d;
  margin: 0 auto;
  margin-top: 40rpx;
  margin-bottom: 70rpx;
}
.hint {
  margin-left: 50rpx;
}
</style>
