<script setup>
import { ref } from 'vue';
import { getShops } from '../../apis/apis';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import selector from '@/components/selector/selector';

const shops = ref([]);
getShops().then((res) => shops.value.push.apply(shops.value, res.data));
</script>

<template>
  <view>
    <selector></selector>
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
