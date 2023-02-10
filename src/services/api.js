import axios from 'axios';
import { toast } from 'react-toastify';
const baseURL = `https://pixabay.com/api/?page=1&image_type=photo&orientation=horizontal&per_page=12`;

export const getPics = async query => {
  const options = {
    params: {
      q: query,
      key: '32117995-da98556d394b8c9b5a96c2a58',
    },
  };

  try {
    const { data, status } = await axios.get(baseURL, options);

    if (status !== 200 || data.total === 0) {
      return toast.error(`Sorry, there are no pictures with search "${query}"`);
    }

    return data;
  } catch (error) {
    console.log('error.name: ', error.name, 'error.message: ', error.message);
  }
};
