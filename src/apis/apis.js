import { get, post } from '@/apis/request';

//Get请求
const getSquare = get('/square/items');
const getSquareDetail = get('/square/detail');
const getShops = get('/shop/');
const getShopDetail = get('/shop/details');
const getMine = get('/user/');
const getCollection = get('/user/collect/');
const getSearch = get('/user/collect/search');
const sendLike = get('/square/like');
const isChiHu = get('/user/renzheng');

//Post请求
const changeAvator = post('/user/change_tx');
const changeName = post('/user/change_name');
const authenticate = post('/user/renzheng');
const login = post('/signin/');
const postComment = post('/square/publish');

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
