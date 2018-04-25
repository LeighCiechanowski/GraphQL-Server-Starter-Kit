import { getBlog } from '../../connectors/blog';

export default {
  blog: async (_, { id }) => {
    return await getBlog(id);
  },
};
