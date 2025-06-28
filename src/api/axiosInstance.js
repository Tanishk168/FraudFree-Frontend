import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:"https://fraudfree-backend.onrender.com",
    timeout:3000,
    headers:{
        'Content-Type': 'application/json',
    },
});