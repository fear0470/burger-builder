import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerbuilder-60be5.firebaseio.com/'
});

export default instance;