<template>
  <view style="height: 100%">
    <input class="input1" placeholder="添加店铺" />

    <!-- 图标和店铺名 -->
    <view class="head">
      <image class="location" src="/static/images/xrxmui(1)/svg/coordinates_fill.svg"></image>
      <text class="storeName" @tap="goToDetail">店铺名称</text>
    </view>

    <!-- 星星组件 -->
    <view class="mb-5" v-for="(item, index) in optionList" :key="index">
      <score @scoring="scoring($event, { tagId: item })" :id="item"></score>
    </view>

    <!-- 输入框 -->
    <textarea class="input2" placeholder="输入评价内容......"></textarea>

    <!-- 点击上传图片 -->
    <text class="word-class">点击上传图片，长按删除</text>
    <!-- 以下为图片选择 -->
    <view class="img_box">
      <view class="imgs" v-for="(item, index) in tempFilePaths" :key="index">
        <image :src="item" @longpress="DeleteImg" @tap="PreviewImg" :data-index="index" mode="widthFix" />
      </view>
      <view class="imgs">
        <view class="images" @tap="ChooseImg">
          <image src="/static/images/xrxmui(1)/svg/camera.svg" mode="widthFix" />
        </view>
      </view>
    </view>

    <!-- 上传按钮 -->
    <view class="UploadBtnarea">
      <button class="UploadBtnclass" style="width: 70%" @tap="UploadBtntap">
        <view>发布评价</view>
        <image src="/static/images/xrxmui(1)/svg/send (1).svg"></image>
      </button>
    </view>
  </view>
</template>

<script>
import score from '@/components/star/star';
// pages/publish/publish.js
export default {
  components: {
    score,
  },
  data() {
    return {
      optionList: ['level'],
      tempFilePaths: [],
      imageList: [],
      // 上传图片集合
      form: {
        // 用于其他功能提交的参数
        ossUrl: [],
      },
    };
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    uni.stopPullDownRefresh();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
  methods: {
    // 评分
    scoring: function (e, _dataset) {
      /* ---处理dataset begin--- */
      this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      // console.log(e.detail.fraction)
      let optionsList = this.optionList;
      optionsList.map((item) => {
        const child = this.selectComponent(`#${item}`);
        // console.log(child.data.number)
        let key = `${item}Fraction`;
        this.setData({
          [key]: child.number,
        });
      });
    },

    //选择图片
    ChooseImg: function () {
      let that = this;
      uni.chooseImage({
        count: 3,
        // 最多3张图片
        sizeType: ['original', 'compressed'],
        // 指定是原图或压缩图
        sourceType: ['album', 'camera'],
        // 指定来源是相册或相机
        success: (res) => {
          uni.showToast({
            title: '正在上传...',
            icon: 'loading',
            mask: true,
            duration: 1000,
          });

          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          let tempFilePath = res.tempFilePaths;
          that.setData({
            tempFilePaths: tempFilePath,
          });
        },
      });
    },

    //预览图片
    PreviewImg: function (e) {
      let index = e.target.dataset.index;
      let that = this;
      //console.log(that.data.tempFilePaths[index]);
      //console.log(that.data.tempFilePaths);
      uni.previewImage({
        current: that.tempFilePaths[index],
        urls: that.tempFilePaths,
      });
    },

    //长按删除图片
    DeleteImg: function (e) {
      var that = this;
      var tempFilePaths = that.tempFilePaths;
      var index = e.currentTarget.dataset.index; //获取当前长按图片下标
      uni.showModal({
        title: '提示',
        content: '确定要删除此图片吗？',
        success: function (res) {
          if (res.confirm) {
            //console.log('点击确定了');
            tempFilePaths.splice(index, 1);
          } else if (res.cancel) {
            //console.log('点击取消了');
            return false;
          }
          that.setData({
            tempFilePaths,
          });
        },
      });
    },

    goToDetail() {
      console.log('占位：函数 goToDetail 未声明');
    },

    UploadBtntap() {
      console.log('占位：函数 UploadBtntap 未声明');
    },
  },
};
</script>
<style>
/* pages/publish/publish.wxss */
.input1 {
  background-color: rgb(199, 196, 191);
  height: 80rpx;
  margin: 30rpx;
  margin-left: 7%;
  margin-right: 7%;
  border-radius: 50rpx;
  text-decoration-color: rgb(199, 196, 191);
  padding-left: 40rpx;
}

.location {
  height: 60rpx;
  width: 60rpx;
}

.storeName {
  color: rgb(32, 25, 19);
  font-size: large;
  font-weight: 800;
}

.head {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 30rpx;
  margin-bottom: 0rpx;
}

.input2 {
  border: solid 1px grey;
  width: auto;
  height: 330rpx;
  padding-left: 40rpx;
  padding-right: 40rpx;
  padding-top: 10rpx;
  padding-bottom: 10rpx;
}

.word-class {
  font-size: 14px;
  color: rgb(95, 87, 87);
  margin-left: 10px;
}

/* 选择图片 */
.img_box {
  width: 690rpx;
  height: 340rpx;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 20px;
}

.imgs {
  width: 33.33333333%;
  display: flex;
  justify-content: center;
  margin-bottom: 20rpx;
}

.imgs image {
  width: 90%;
  max-height: 212rpx;
  border: 1px solid rgba(214, 212, 212, 0.1);
}

.imgs .images {
  position: relative;
}

.images button {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.img_box .images {
  width: 90%;
  height: 212rpx;
  border: 1px dashed #4b4b4b;
  border-radius: 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img_box .images > image {
  width: 60rpx;
  height: 60rpx;
}

/* 上传按钮 */
.UploadBtnarea {
  width: 100%;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.UploadBtnclass {
  height: 100%;
  background-color: rgb(255, 255, 255);
  align-self: center;
  box-shadow: 5rpx 7rpx 5rpx #aaa9a9e1;
  border-radius: 50rpx;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.UploadBtnclass view {
  font-size: 40rpx;
  color: rgb(253, 169, 12);
  width: 40%;
  padding: 4rpx;
}

.UploadBtnclass image {
  height: 60rpx;
  width: 60rpx;
}
</style>
