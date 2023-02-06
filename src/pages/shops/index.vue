<script setup>
import { ref } from 'vue';
import { getShops } from '../../apis/apis';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import selector from '@/components/selector/selector';
import { addInfo } from '../../public-methods/methods';

const shops = ref([]);
const page = 1;
const page_size = 9;
const score_count = ref(false);
const getShopList = (page, page_size, sort, selection) => {
  uni.showLoading();
  getShops({ page, page_size, sort, selection }).then((res) => {
    console.log(res);
    addInfo(shops.value, res.data);
    uni.hideLoading();
    page += 1;
  });
};

getShopList(page, page_size, 'True', 'Flase');
console.log(shops);
</script>

<template>
  <view>
    <selector></selector>
    <block v-for="(item, index) in shops" :key="index">
      <shopPreview
        :avator="item.shop_profile_photo ? 'https://api.recommend.temp.ziqiang.net.cn' + item.shop_profile_photo : ''"
        :shop_name="item.shop_name"
        :isChiHu="item.shop_isChiHu"
        :shop_score="item.shop_score"
        :comment_count="item.comment_count"
      ></shopPreview>
    </block>
  </view>
</template>

<style scoped></style>
