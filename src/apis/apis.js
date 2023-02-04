import { get, post } from '@/apis/request';

//Get请求
const getSquare = get('https://mock.apifox.cn/m1/1961063-0-default/square/items');
const getSquareDetail = get('https://mock.apifox.cn/m1/1961063-0-default/square/detail');
const getShops = get('https://mock.apifox.cn/m1/1961063-0-default/shop');
const getShopDetail = get('https://mock.apifox.cn/m1/1961063-0-default/shop/details');
const getMine = get('https://mock.apifox.cn/m1/1961063-0-default/user/');
const getCollection = get('https://mock.apifox.cn/m1/1961063-0-default/user/collect/');
const getSearch = get('https://mock.apifox.cn/m1/1961063-0-default/user/collect/search');
const sendLike = get('https://mock.apifox.cn/m1/1961063-0-default/square/like');
const isChiHu = get('https://mock.apifox.cn/m1/1961063-0-default/user/renzheng');

//Post请求
const changeAvator = post('https://mock.apifox.cn/m1/1961063-0-default/user/change_tx');
const changeName = post('https://mock.apifox.cn/m1/1961063-0-default/user/change_name');
const authenticate = post('https://mock.apifox.cn/m1/1961063-0-default/user/renzheng');
const login = post('https://mock.apifox.cn/m1/1961063-0-default/signin/');
const postComment = post('https://mock.apifox.cn/m1/1961063-0-default/square/publish');

export {
  getSquare,
  getSquareDetail,
  getShops,
  getShopDetail,
  getMine,
  getCollection,
  getSearch,
  sendLike,
  isChiHu,
  changeAvator,
  changeName,
  authenticate,
  login,
  postComment,
};
