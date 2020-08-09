import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.22.185.99:3333'
})

export default api;