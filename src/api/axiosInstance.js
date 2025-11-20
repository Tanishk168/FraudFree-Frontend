import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL || "http://localhost:5000",
    // baseURL:  "http://localhost:5000",
    timeout: 30000, // Increased from 3000ms to 30000ms (30 seconds) for AI requests
    headers: {
        'Content-Type': 'application/json',
    },
});
