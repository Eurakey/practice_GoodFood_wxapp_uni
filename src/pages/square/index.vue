<script setup>
import login from '@/stores/login';
import { storeToRefs } from 'pinia';
import Request from 'luch-request';
import commentCard from '@/components/comment-card/comment-card';

const { isLogined } = storeToRefs(login());
const http = new Request();
http
  .get('https://mock.apifox.cn/m1/1961063-0-default/square/items', {})
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
</script>

<template>
  <view class="">
    <comment-card></comment-card>
  </view>
</template>

<style scoped></style>
