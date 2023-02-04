import Request from 'luch-request';

function request(method) {
  const http = new Request();
  return (url) => (params) =>
    http
      .request({ method, url, params })
      .then((res) => {
        const { data } = res.data;
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
}

export const get = request('get');
export const post = request('post');
