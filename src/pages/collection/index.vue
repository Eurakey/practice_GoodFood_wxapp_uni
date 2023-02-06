<script setup>
import selector from '../../components/selector/selector.vue';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import { getCollection } from '../../apis/apis';
import { ref } from 'vue';
import { login_store } from '../../stores/login';
import { storeToRefs } from 'pinia';

//店铺信息和获取数据
const shops = ref([]);
const main = storeToRefs(login_store());
const sid = main.school_id;
const getShops = (sid, sort, selection) => {
  uni.showLoading();
  getCollection({ sid, sort, selection }).then((res) => {
    shops.value = res.data;
    uni.hideLoading();
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
  getShops(sid.value, sort.value, selection.value);
});
onReachBottom(() => {
  getShops(sid.value, sort.value, selection.value);
});
const reload = () => getShops(sid.value, sort.value, selection.value);
</script>
<template>
  <selector @sort="sortWay" @selection="select" @tap="reload"></selector>
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
