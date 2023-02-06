import Request from 'luch-request';

//https://mock.apifox.cn/m1/1961063-0-default
// https://api.recommend.temp.ziqiang.net.cn
function request(method) {
  const http = new Request();
  return (url) => (params, data) =>
    http
      .request({ method, url, params, data, baseURL: 'https://mock.apifox.cn/m1/1961063-0-default' })
      .then((res) => {
        const data = res.data;
        return data;
      })
      .catch((err) => {
        uni.showToast({ icon: 'error', title: '网络错误' });
      });
}

export const get = request('get');
export const post = request('post');
