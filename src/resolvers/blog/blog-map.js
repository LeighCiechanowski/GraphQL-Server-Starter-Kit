import { getComments } from '../../connectors/comments';

export default {
  comments: async ({ id }) => {
    return await getComments(id);
  },
};
