<script setup>
import Request from 'luch-request';
import { ref } from 'vue';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import selector from '@/components/selector/selector';

const shops = ref([]);
const http = new Request();
http
  .get('https://mock.apifox.cn/m1/1961063-0-default/shop', { params: {} })
  .then((res) => {
    shops.value.push.apply(shops.value, res.data.data);
  })
  .catch((err) =>
    uni.showToast({
      icon: 'error',
      title: '网络错误',
    }),
  );
</script>

<template>
  <view>
    <selector>33</selector>
    <block v-for="(item, index) in shops" :key="index">
      <shopPreview
        :avator="item.shop_profile_photo"
        :shop_name="item.shop_name"
        :isChiHu="item.shop_isChiHu"
        :shop_score="item.shop_score"
        :comment_count="item.comment_count"
      ></shopPreview>
    </block>
  </view>
</template>

<style scoped></style>
