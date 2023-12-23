// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=da1700a259636aa5359aaeb65d11a54b&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export default api;