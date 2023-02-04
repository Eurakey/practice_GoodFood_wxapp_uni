import Request from 'luch-request';

function request(method) {
  const http = new Request();
  return (url) => (params) =>
    http
      .request({ method, url, params, baseURL: 'https://mock.apifox.cn/m1/1961063-0-default' })
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
