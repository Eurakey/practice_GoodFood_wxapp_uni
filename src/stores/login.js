/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia';
import { login, getMine } from '../apis/apis';

export const login_store = defineStore('login', {
  state: () => {
    return {
      is_logined: false,
      school_id: 0,
      user_name: '',
      avator: '',
      is_ch: '',
      comment_shop_name: '',
      comment_shop_id: '',
    };
  },
  actions: {
    //登陆
    signIn(sid, password) {
      login({ sid, password }).then((res) => {
        //mock数据问题，先设置为true
        // res.is === true
        if (true) {
          //登陆成功后初始化数据
          this.is_logined = true;
          this.school_id = sid;
          getMine({ sid }).then((res) => {
            console.log(res);
            this.user_name = res.user_data.user_name;
            this.is_ch = res.user_data.is_ch;
            this.avator = res.user_data.image;
          });
          uni.switchTab({ url: '../square/index' });
        } else {
          uni.showToast({
            title: '登录失败',
            icon: 'error',
            duration: 2000,
          });
        }
      });
    },

    //未登录时阻止点赞评论
    prevent() {
      this.is_logined === true
        ? ''
        : uni.reLaunch({
            url: '../login/index',
          });
    },
  },
});
