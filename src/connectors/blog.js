import axios from 'axios';
import config from '../config';

export const getBlog = async (id) => {
  try {
    const { data } = await axios.get(`${config.api.blog.url}/Blog/${id}`);
    
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};
