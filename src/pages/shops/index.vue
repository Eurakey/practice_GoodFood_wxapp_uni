<script setup>
import { ref } from 'vue';
import { getShops } from '../../apis/apis';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import selector from '@/components/selector/selector';
import { addInfo } from '../../public-methods/methods';
import { onLoad, onReachBottom } from '@dcloudio/uni-app';

//获取店铺列表数据
const shops = ref([]);
const page = 1;
const page_size = 9;
const score_count = ref(false);
const getShopList = (page, page_size, sort, selection) => {
  uni.showLoading();
  getShops({ page, page_size, sort, selection }).then((res) => {
    console.log(res);
    shops.value = res.data;
    uni.hideLoading();
    page += 1;
  });
};

//分类
const sort = ref('False');
const selection = ref('False');
const sortWay = (e) => {
  sort.value = e;
};
const select = (e) => {
  selection.value = e;
};

//加载数据
onLoad(() => {
  getShopList(page, page_size, sort.value, selection.value);
});
onReachBottom(() => {
  getShopList(page, page_size, sort.value, selection.value);
});
const reload = () => getShopList(page, page_size, sort.value, selection.value);
</script>

<template>
  <view>
    <selector @sort="sortWay" @selection="select" @tap="reload"></selector>
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
