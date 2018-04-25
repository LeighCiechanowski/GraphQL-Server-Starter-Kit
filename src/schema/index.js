import { makeExecutableSchema } from 'graphql-tools';

import RootQuery from './root_query.graphql';
import resolvers from '../resolvers';
import Blog from './blog';
import Comment from './comment'

export default makeExecutableSchema({
  typeDefs: [RootQuery, Blog, Comment],
  resolvers,
});
