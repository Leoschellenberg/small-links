import axios from 'axios';

export const key = "f69f4c15cd01a5af17524f9b6b58c78bf42afd7b";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;

