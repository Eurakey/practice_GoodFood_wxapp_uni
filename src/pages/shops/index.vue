<script setup>
import Request from 'luch-request';
import { ref } from 'vue';
import shopPreview from '../../components/shop-preview/shop-preview.vue';

const shops = ref([]);
const http = new Request();
http
  .get('https://mock.apifox.cn/m1/1961063-0-default/shop', { params: {} })
  .then((res) => {
    console.log(res.data.data);
    shops.value.push.apply(shops.value, res.data.data);
    console.log(shops.value);
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
    <block v-for="(item, index) in shops" :key="index">
      <shopPreview
        :shop_name="item.shop_name"
        :isChiHu="item.shop_isChiHu"
        :shop_score="item.shop_score"
        :comment_count="item.comment_count"
      ></shopPreview>
    </block>
  </view>
</template>

<style scoped></style>
