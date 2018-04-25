import BlogQuery from './blog/blog-query';
import BlogMap from './blog/blog-map';
//import BlogMutation from './reaction/reaction-mutation';

export default {
  Query: {
    ...BlogQuery,
  },
  Mutation: {
    //...BlogMutation,
  },
  Blog: BlogMap,
};
