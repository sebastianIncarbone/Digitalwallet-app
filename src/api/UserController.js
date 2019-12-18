import axios from 'axios';

const server = 'http://localhost:7000/';

export const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export default request

