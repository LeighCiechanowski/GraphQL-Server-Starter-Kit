import axios from 'axios';
import config from '../config';

let comments = [{
  id: 1,
  body: 'test body'
}];

export const getComments = async (id) => {
  try {
    //const { data } = await axios.get(`${config.api.blog.url}/${id}`);
    let data = comments;
    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};

export const createComment = async (blogId, body) => {
  try {
    let comment = { id: comments.length + 1, body };
    comments.push(comment)
    return comment;
  } catch (error) {
    console.log(error);
  }
}
