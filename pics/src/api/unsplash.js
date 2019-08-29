import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2ebd98c2fdf73064aee01fee3bc602f9518f7292e68aa479f60f0de422a52a10'
    }
});