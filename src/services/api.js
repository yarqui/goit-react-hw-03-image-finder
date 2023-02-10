import axios from 'axios';

const API_KEY = '32117995-da98556d394b8c9b5a96c2a58';

axios.defaults.baseURL = `https://pixabay.com/api/?page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12/`;
