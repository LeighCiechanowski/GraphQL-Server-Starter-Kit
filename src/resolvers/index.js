import BlogQuery from './blog/blog-query';
import BlogMap from './blog/blog-map';
import CommentMutation from './comment/comment-mutation';

export default {
  Query: {
    ...BlogQuery,
  },
  Mutation: {
    ...CommentMutation,
  },
  Blog: BlogMap,
};
