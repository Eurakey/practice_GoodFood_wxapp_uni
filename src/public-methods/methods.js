import { sendLike } from '../apis/apis';
import { login_store } from '../stores/login';

const main = login_store();

//传入数组，点赞
const like_list = (list) => {
  return function (comment_id) {
    main.prevent();
    const liked_index = list.findIndex((item) => item.comment_id === comment_id);
    list[liked_index].isLiked
      ? (list[liked_index].isLiked = false) || (list[liked_index].comment_like_count -= 1)
      : (list[liked_index].isLiked = true) && (list[liked_index].comment_like_count += 1);
    sendLike({ comment_id }).then((res) => console.log(res));
  };
};

//连接数组
const addInfo = (oldInfo, newInfo) => {
  oldInfo.push.apply(oldInfo, newInfo);
};

export { like_list, addInfo };
