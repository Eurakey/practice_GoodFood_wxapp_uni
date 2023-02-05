<script setup>
import selector from '../../components/selector/selector.vue';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import { getCollection } from '../../apis/apis';
import { ref } from 'vue';
import { addInfo } from '../../public-methods/methods';

const shops = ref([]);
getCollection().then((res) => addInfo(shops.value, res.data));
</script>
<template>
  <selector></selector>
  <shopPreview
    v-for="(item, index) in shops"
    :key="index"
    :avator="item.shop_profile_photo"
    :shop_name="item.shop_name"
    :isChiHu="item.shop_isChiHu"
    :shop_score="item.shop_score"
    :comment_count="item.comment_count"
  ></shopPreview>
</template>

<style scoped></style>
