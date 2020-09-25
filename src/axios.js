import axios from 'axios'

const token = localStorage.getItem('token');

export  const axiosinstance = axios.create({
    baseURL: 'http://13.92.41.24//api/',
  //  headers: {'Authorization' : `Token ${token}`}
  });
