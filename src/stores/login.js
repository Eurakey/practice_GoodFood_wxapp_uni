/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia';
import { login } from '../apis/apis';

export const login_store = defineStore('login', {
  state: () => {
    return {
      is_logined: false,
      school_id: 0,
      user_name: '',
      avator: '',
    };
  },
  actions: {
    //登陆
    signIn(sid, password) {
      login({ sid, password }).then((res) => {
        res.is === true
          ? (this.is_logined = true && uni.navigateTo({ url: '../square/index' }))
          : uni.showToast({
              title: '登录失败',
              icon: 'error',
              duration: 2000,
            });
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
