<script setup>
import login from '@/stores/login';
import { storeToRefs } from 'pinia';
import Request from 'luch-request';
import { ref } from 'vue';
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
  oldInfo.push.apply(oldInfo, newInfo);
};

const info = ref([]);
getComments().then((res) => {
  addInfo(info.value, res);
  info.value.forEach((item) => (item.isLiked = false));
});

const like = (comment_id) => {
  const liked_index = info.value.findIndex((item) => item.user.comment.comment_id === comment_id);
  info.value[liked_index].isLiked
    ? (info.value[liked_index].isLiked = false) || (info.value[liked_index].user.comment.comment_like_count -= 1)
    : (info.value[liked_index].isLiked = true) && (info.value[liked_index].user.comment.comment_like_count += 1);
  const http = new Request();
  http
    .get('https://mock.apifox.cn/m1/1961063-0-default/square/like', { comment_id })
    .catch(() => uni.showToast({ icon: 'error' }));
};
</script>

<template>
  <view>
    <label class="check">
      <text>吃乎评价</text>
      <checkbox class="checkrideo"></checkbox>
    </label>
    <comment-card
      v-for="(item, index) in info"
      :key="index"
      @like="like"
      :shop_name="item.shop.shop_name"
      :shop_score="item.shop.shop_score"
      :user_name="item.user.user_name"
      :like_count="item.user.comment.comment_like_count"
      :review_count="item.user.comment.comment_review_count"
      :image_url="item.user.image_url"
      :comment_content="item.user.comment.comment_content"
      :isLiked="item.isLiked"
      :comment_id="item.user.comment.comment_id"
    ></comment-card>
  </view>
</template>

<style lang="less" scoped>
.check {
  background-color: #ffe3cc;
  height: 4%;
  text-align: right;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  display: flex;
  justify-content: flex-end;
}

/* 选框样式-圆型 */
.checkrideo .wx-checkbox-input {
  border-radius: 50%;
  width: 35rpx;
  height: 35rpx;
}
/* 让对勾居中 */
.checkrideo .wx-checkbox-input.wx-checkbox-input-checked::before {
  font: normal normal normal 14px/1 'weui';
  content: '\EA08';
  font-size: 22px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -48%) scale(0.73);
  -webkit-transform: translate(-50%, -48%) scale(0.73);
}
/* 对勾的大小以及颜色 */
.checkrideo .wx-checkbox-input.wx-checkbox-input-checked::before {
  color: rgb(0, 0, 0);
}
</style>
