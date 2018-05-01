import axios from 'axios';
import config from '../config';

export const getComments = async (id) => {
  // Would need to send blog ID in real implementation
  try {
    const { data } = await axios.get(`${config.api.comments.url}/Comments/`);
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};

export const createComment = async (blogId, body) => {
  // Would need to send blog ID in real implementation
  try {
    const { data } = await axios.post(
      `${config.api.comments.url}/Comments/`,
      {
        body,
      }
    );

    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
}
