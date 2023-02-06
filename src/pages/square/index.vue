<script setup>
import { login_store } from '@/stores/login';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import commentCard from '@/components/comment-card/comment-card';
import { getSquare } from '@/apis/apis';
import { commentAdaptor } from '@/public-methods/adaptor';
import { like_list, addInfo } from '@/public-methods/methods';
import { onLoad, onReachBottom } from '@dcloudio/uni-app';

//获取评论展示数据
const comments = ref([]);
const page_size = 5;
let page = 1;
const getComments = (page, page_size) => {
  uni.showLoading();
  getSquare({ page, page_size }).then((res) => {
    console.log(res);
    const newInfo = res.data.map((item) => commentAdaptor(item, 'square'));
    addInfo(comments.value, newInfo);
    uni.hideLoading();
    page += 1;
  });
};

//触底和加载时获取数据
onLoad(() => {
  getComments(page, page_size);
});
onReachBottom(() => {
  getComments(page, page_size);
});
//点赞
const like = like_list(comments.value);
</script>

<template>
  <view>
    <label class="check">
      <text>吃乎评价</text>
      <checkbox class="round red"></checkbox>
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
  display: flex;
  justify-content: flex-end;
}
</style>
