import axios from 'axios';
import config from '../config';

export const getComments = async (id) => {
  try {
    //const { data } = await axios.get(`${config.api.blog.url}/${id}`);
    let data = [{
        id: 1,
        body: 'test body'
    }]
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};
