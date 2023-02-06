<script setup></script>

<template></template>
<style lang="less">
/*每个页面公共css */
page {
  background-color: #ffe3cc;
}
button {
  background: initial;
}

button:focus {
  outline: 0;
}

button::after {
  border: none;
}
input {
  padding-left: 30rpx;
}
//设置圆角
checkbox.round .wx-checkbox-input,
checkbox.round .uni-checkbox-input {
  border-radius: 100upx;
}

//设置背景色
checkbox.red[checked] .wx-checkbox-input,
checkbox.red.checked .uni-checkbox-input {
  background-color: #04be02 !important; //背景
  border-color: #ffffff !important; //边框
  color: white !important; //对勾
}
</style>
