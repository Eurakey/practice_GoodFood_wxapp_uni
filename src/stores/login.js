/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia';

export default defineStore('login', {
  state: () => {
    return {
      isLogined: false,
    };
  },
});
