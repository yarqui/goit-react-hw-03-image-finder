import axios from 'axios';
// import { toast } from 'react-toastify';
const baseURL = `https://pixabay.com/api/?page=1&image_type=photo&orientation=horizontal&per_page=12`;

export const getPics = async query => {
  const options = {
    params: {
      q: query,
      key: '32117995-da98556d394b8c9b5a96c2a58',
    },
  };

  try {
    const res = await axios.get(baseURL, options);
    return res.data;
  } catch (error) {
    console.log(error.name, error.message);
  }
};
