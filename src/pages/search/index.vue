<script setup>
import { computed, ref } from 'vue';
import shopPreview from '../../components/shop-preview/shop-preview.vue';
import { getSearch } from '../../apis/apis';

//搜索店铺
const shops = ref([]);
const searchShop = (e) => {
  const shop = e.detail.value;
  getSearch(shop).then((res) => {
    if (res instanceof Object) {
      shops.value = [res];
    } else {
      shops.value = [];
    }
  });
};

//判断有无店铺
const nothing = computed(() => shops.value.length === 0);
</script>

<template>
  <view class="">
    <input class="input" placeholder="搜索店铺" @confirm="searchShop" />
    <text v-if="nothing">暂无相关店铺</text>
    <text v-else>可能相关的店铺:</text>
    <shopPreview
      v-for="(item, index) in shops"
      :key="index"
      :avator="item.shop_profile_photo"
      :shop_name="item.shop_name"
      :isChiHu="item.shop_isChiHu"
      :shop_score="item.shop_score"
      :comment_count="item.comment_count"
    ></shopPreview>
  </view>
</template>

<style scoped>
.input {
  background-color: rgb(199, 196, 191);
  height: 80rpx;
  margin: 30rpx;
  margin-left: 7%;
  margin-right: 7%;
  border-radius: 50rpx;
  text-decoration-color: rgb(199, 196, 191);
  padding-left: 40rpx;
}
text {
  margin: 60rpx;
}
</style>
