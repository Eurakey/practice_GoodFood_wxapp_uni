<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { changeName } from '../../apis/apis';
import { login_store } from '../../stores/login';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

//返回
const goBack = () => uni.navigateBack({ delta: 1 });

//改名函数
const change = (e) => {
  const { user_name, school_id } = storeToRefs(login_store());
  const new_name = e.detail.value.input;

  //名称过短时
  if (new_name <= 1) {
    uni.showToast({ title: '名称太短哦', icon: 'error' });
    return;
  }

  //改名
  user_name.value = new_name;
  changeName({ sid: school_id, user_name });
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
        <input type="text" name="input" maxlength="20" />
      </view>
      <view class="parts hint">请设置2-20个字符</view>
    </form>
  </view>
</template>

<style>
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
