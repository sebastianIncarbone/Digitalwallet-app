import axios from 'axios';

//const server = 'http://localhost:7000';

const server = 'https://randomuser.me/'

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data);

export const getUser = request('get', '/api')

export const getAccount = cvu => request('get', `/account/${cvu}`);

export const getTransaccions = cvu => request('get', `/transaccions/${cvu}`);

export const getCVUByEmail = email => request('get', `/getCVU/${email}`);

export default { loginUser: (email, password) => {}  }