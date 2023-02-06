<script setup>
import shopInfo from '../../components/shop-info/shop-info.vue';
import selector from '../../components/selector/selector.vue';
import commentCard from '../../components/comment-card/comment-card.vue';
import { getShopDetail } from '../../apis/apis';
import { commentAdaptor } from '../../public-methods/adaptor';
import { ref } from 'vue';
import { addInfo, like_list } from '../../public-methods/methods';
import { onLoad, onReachBottom } from '@dcloudio/uni-app';

//获取评论回帖
const comments = ref([]);
let page = 1;
const page_size = 5;
const getComments = (page, page_size) => {
  getShopDetail({ page, page_size }).then((res) => {
    const newComments = res.data.map((item) => commentAdaptor(item, 'shop'));
    addInfo(comments.value, newComments);
    page += 1;
  });
};

//点赞
const like = like_list(comments.value);

//加载数据
onLoad((res) => getComments(page, page_size));
onReachBottom((res) => getComments(page, page_size));
</script>

<template>
  <view>
    <shop-info></shop-info>
    <selector></selector>
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

<style lang="scss" scoped></style>
