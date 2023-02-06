//图片文件的前缀, 因为api传的是相对路径
export const baseURL = '';
//https://api.recommend.temp.ziqiang.net.cn

//适配器，处理评论卡片的数据，使其格式保持一致
export const commentAdaptor = (data, situation) => {
  switch (situation) {
    //广场页
    case 'square':
      return {
        shop_id: data.shop.shop_id,
        shop_name: data.shop.shop_name,
        shop_score: data.shop.shop_score,
        comment_content: data.user.comment.comment_content,
        comment_id: data.user.comment.comment_id,
        comment_like_count: data.user.comment.comment_like_count,
        comment_review_count: data.user.comment.comment_review_count,

        //有服务器时补齐前缀
        // image_url: data.user.image_url.map((item) => baseURL + item),
        image_url: data.user.image_url,

        user_name: data.user.user_name,
        user_profile: baseURL + data.user.user_profile_photo_url,
        isLiked: false,
      };
    //我的页面
    case 'mine':
      return {
        shop_id: data.shop_id,
        shop_name: data.shop_name,
        shop_score: data.comment_score,
        comment_content: data.comment_content,
        comment_id: data.comment_id,
        comment_like_count: data.comment_like_count,
        comment_review_count: data.comment_review_count,

        // image_url: data.image_url.map((item) => baseURL + item),
        image_url: data.image_url,

        user_name: data.user_name,
        user_profile: baseURL + data.user_profile_photo_url,
        isLiked: false,
      };
    //店铺详情页
    case 'shop':
      return {
        shop_id: data.shop.shop_id,
        shop_name: data.shop.shop_name,
        shop_score: data.shop.shop_score,
        comment_content: data.user.comment.comment_content,
        comment_id: data.user.comment.comment_id,
        comment_like_count: data.user.comment.comment_like_count,
        comment_review_count: data.user.comment.comment_review_count,

        // image_url: data.user.image_url.map((item) => baseURL + item),
        image_url: data.user.image_url,

        user_name: data.user.user_name,
        user_profile: baseURL + data.user.user_profile_photo_url,
        isLiked: false,
      };
  }
};
