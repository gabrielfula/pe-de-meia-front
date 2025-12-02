import axios from "axios";
import { parseCookies } from "nookies";

export const authInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API}/v1`,
})

export const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API}/v1`,
})

authInstance.interceptors.request.use(
    async (config) => {
        const cookies = parseCookies();
        const token = JSON.parse(cookies.token);
        const userId = JSON.parse(cookies.id);

        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        if (userId) {
            config.headers["user_id"] = userId;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);