const commentAdaptor = (data, situation) => {
  switch (situation) {
    case 'square':
      return {
        shop_id: data.shop.shop_id,
        shop_name: data.shop.shop_name,
        shop_score: data.shop.shop_score,
        comment_content: data.user.comment.comment_content,
        comment_id: data.user.comment.comment_id,
        comment_like_count: data.user.comment.comment_like_count,
        comment_review_count: data.user.comment.comment_review_count,
        image_url: data.user.image_url,
        user_name: data.user.user_name,
        user_profile: data.user.user_profile_photo_url,
        isLiked: false,
      };
    case 'mine':
      return {
        shop_id: data.shop_id,
        shop_name: data.shop_name,
        shop_score: data.comment_score,
        comment_content: data.comment_content,
        comment_id: data.comment_id,
        comment_like_count: data.comment_like_count,
        comment_review_count: data.comment_review_count,
        image_url: data.image_url,
        user_name: data.user_name,
        user_profile: data.user_profile_photo_url,
        isLiked: false,
      };
  }
};
