import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000",
    // base url problem de rha tha env variable ki jagah normal locala ddress call ghora isliye abhi bnad rakha he isey
    // baseURL: process.env.REACT_APP_API_URL,
    timeout: 30000, // Increased from 3000ms to 30000ms (30 seconds) for AI requests
    headers: {
        'Content-Type': 'application/json',
    },
});
