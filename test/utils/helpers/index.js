import { post } from 'axios';

export const executeQuery = async query => {
  try {
    const { data: { data } } = await post('http://scaffold-graph:5000', {
      query,
    });

    return data;
  } catch (error) {
    console.log(error); /* eslint-disable-line */
  }
};
