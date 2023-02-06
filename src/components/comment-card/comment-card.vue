<template>
  <view class="comment-card">
    <view class="card-part shop-self">
      <!-- 店铺信息 -->
      <view class="shop-name">
        <image src="/static/img/coordinates_fill.svg"></image>
        <text>{{ shop_name }}</text>
        <view class="stars">
          <score-stars :shop_score="props.shop_score"></score-stars>
        </view>
      </view>
      <!-- 评论晒图 -->
      <view v-if="props.image_url.lenght" class="shop-pic">
        <!-- 链接待添加 {{item.user.image_url['0']}} -->
        <scroll-view class="scroll" scroll-x :enable-flex="true">
          <image
            v-for="(a, index) in props.image_url"
            :key="index"
            :src="a"
            mode="aspectFit|aspectFill|widthFix"
            lazy-load="true"
          >
          </image>
        </scroll-view>
      </view>
    </view>

    <!-- 评论内容和用户信息 -->
    <view class="card-part user-comment">
      <view class="user-info">
        <!-- {{item.user.user_profile_photo_url}} -->
        <image :src="user_avator"></image>
        <text>{{ user_name }}</text>
      </view>
      <view class="commet-content">
        {{ comment_content }}
      </view>
    </view>
    <!-- 回帖点赞信息 -->
    <view class="card-part comment-infos">
      <view class="comment-info">
        <image :src="like_url" @tap="like" :data-count="like_count" :id="comment_id"></image>
        <text>{{ like_count }}</text>
      </view>
      <view class="comment-info">
        <image src="/static/img/message.svg" @tap="goToComment"></image>
        <text>{{ review_count }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';
import scoreStars from '../score-stars/score-stars.vue';

const props = defineProps([
  'shop_name',
  'shop_score',
  'image_url',
  'user_name',
  'like_count',
  'review_count',
  'comment_content',
  'isLiked',
  'comment_id',
  'user_avator',
]);

const emit = defineEmits(['like']);

//点赞
const like = () => {
  const comment_id = props.comment_id;
  emit('like', comment_id);
};
const like_url = computed(() => (props.isLiked ? '/static/img/like_fill.png' : '/static/img/like.svg'));

//传数据到详情页

//跳转到评论详情页
const goToComment = () => {
  uni.setStorage({
    key: 'comment',
    data: props,
    success: () => uni.navigateTo({ url: '../square-detail/index' }),
  });
};
</script>

<style lang="less" scoped>
.comment-card {
  width: 704.5rpx;
  margin: 0 auto;
  border-radius: 35rpx;
  margin-bottom: 25rpx;
  box-shadow: 0px 10px 10px 1px rgba(81, 81, 81, 0.16);
  background-color: #fff1e6;
  .stars {
    margin-top: 15rpx;
  }
  .shop-self {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 1px solid #707070;

    .shop-pic {
      display: flex;
      overflow: hidden;
      justify-content: flex-start;
      flex-shrink: 0;

      image {
        width: 359rpx;
        /* object-fit: fill; */
        height: 203rpx;
        flex-shrink: 0;
        border-radius: 31.5rpx;
        margin-left: 24.5rpx;
        margin-bottom: 20rpx;
      }
    }
    .shop-name {
      display: flex;
      justify-content: flex-start;
      height: 83rpx;
      font-size: 35rpx;
      line-height: 83rpx;

      text {
        margin-right: 10rpx;
      }

      image {
        width: 70rpx;
        height: 70rpx;
        margin-left: 50rpx;
        margin-right: 5rpx;
        margin-top: 10rpx;
      }
    }
  }
  .user-comment {
    width: 660rpx;
    text-overflow: ellipsis;
    overflow: hidden;

    .commet-content {
      margin-left: 33.25rpx;
      margin-right: 33.25rpx;
      margin-bottom: 43.75rpx;
    }

    .user-info {
      height: 98rpx;
      color: #707070;
      font-size: 29.75rpx;
      display: flex;

      text {
        height: 98rpx;
        line-height: 98rpx;
        display: block;
      }
      image {
        border-radius: 50%;
        width: 59.5rpx;
        height: 59.5rpx;
        margin-left: 54.25rpx;
        margin-top: 19.25rpx;
        margin-right: 15rpx;
      }
    }
  }
  .comment-infos {
    display: flex;
    border-top: 1px solid #707070;
    justify-content: space-around;
    align-items: center;
    height: 87.5rpx;

    .comment-info {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      color: #707070;

      image {
        width: 60rpx;
        height: 60rpx;
      }
    }
  }
}

.scroll {
  display: flex;
  height: 230rpx;
  /* align-items: center; */
}
</style>
