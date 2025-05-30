
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://www.omdbapi.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;