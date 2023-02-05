<script setup>
import { login_store } from '@/stores/login';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import commentCard from '@/components/comment-card/comment-card';
import { getSquare } from '@/apis/apis';
import { commentAdaptor } from '@/public-methods/adaptor';
import { like_list, addInfo } from '@/public-methods/methods';

const comments = ref([]);
getSquare().then((res) => {
  const newInfo = res.data.map((item) => commentAdaptor(item, 'square'));
  addInfo(comments.value, newInfo);
});
const like = like_list(comments.value);
</script>

<template>
  <view>
    <label class="check">
      <text>吃乎评价</text>
      <checkbox class="checkrideo"></checkbox>
    </label>
    <comment-card
      v-for="(item, index) in comments"
      :key="index"
      @like="like"
      :shop_name="item.shop_name"
      :shop_score="item.shop_score"
      :user_name="item.user_name"
      :like_count="item.comment_like_count"
      :review_count="item.comment_review_count"
      :image_url="item.image_url"
      :comment_content="item.comment_content"
      :isLiked="item.isLiked"
      :comment_id="item.comment_id"
      :user_avator="item.user_profile"
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
