import axios from 'axios';
import config from '../config';

export const getBlog = async (id) => {
  try {
    //const { data } = await axios.get(`${config.api.blog.url}/${id}`);
    let data = {
        id: 1,
        title: 'test blog',
        body: 'test body'
    }
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};
