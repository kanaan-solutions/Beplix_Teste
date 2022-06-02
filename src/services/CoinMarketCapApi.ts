import axios from 'axios';
import { API_KEY } from '../utils/CoinMarketCapCredential';

const api = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/',
});

export default api;