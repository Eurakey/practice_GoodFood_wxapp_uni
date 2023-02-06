import Request from 'luch-request';

//https://mock.apifox.cn/m1/1961063-0-default/user/
// https://api.recommend.temp.ziqiang.net.cn
function request(method) {
  const http = new Request();
  return (url) => (params, data) =>
    http
      .request({ method, url, params, data, baseURL: 'https://api.recommend.temp.ziqiang.net.cn' })
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((err) => {
        uni.showToast({ icon: 'error' });
      });
}

export const get = request('get');
export const post = request('post');
