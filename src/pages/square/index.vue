<script setup>
import login from '@/stores/login';
import { storeToRefs } from 'pinia';
import Request from 'luch-request';
import commentCard from '@/components/comment-card/comment-card';

const { isLogined } = storeToRefs(login());

const getComments = async (page, pagesize) => {
  const http = new Request();
  const comments = await http
    .get('https://mock.apifox.cn/m1/1961063-0-default/square/items', { params: { page, pagesize } })
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
  return comments;
};
const getChiHu = async (fn_condition, page, pagesize) => {
  const allComments = await getComments(page, pagesize);
  return allComments.filter(fn_condition);
};
const addInfo = async (oldInfo, newInfo) => {
  oldInfo = [...oldInfo, ...newInfo];
};
let final = async () => {
  let info = [];
  console.log(await getComments());
  await addInfo(info, await getComments());
  console.log(info);
};
final();
</script>

<template>
  <view class="">
    <!-- <comment-card
      @myevent="onMyEvent"
      :shop_name="item.shop_name"
      :shop_score="item.comment_score"
      :user_name="info.user_name"
      :like_count="item.comment_like_count"
      :review_count="item.comment_review_count"
      :image_url_1="item.image_1 != null"
      :image_url_2="item.image_2 != null"
      :image_url_3="item.image_3 != null"
      :comment_content="item.comment_content"
      :like_url="item.isLiked ? '/static/img/like_fill.png' : '/static/img/like.svg'"
      :comment_id="item.comment_id"
      v-for="(item, index) in info.comment"
      :key="index"
    ></comment-card> -->
  </view>
</template>

<style></style>
