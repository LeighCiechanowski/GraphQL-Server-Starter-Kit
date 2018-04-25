import { createComment } from '../../connectors/comments';

export default {
  createComment: async (_, { blogId, body}) => {
    return await createComment(blogId, body);
  },
};
