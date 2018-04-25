import dotenv from 'dotenv';
import env from 'getenv';

dotenv.config();

export default {
  port: env('PORT', 3005),
  api: {
    blog: {
      url: env('BLOG_API_URL', 'https://test.api.blog'),
    },
    comments: {
      url: env('COMMENTS_URL', 'https://test.api.comments'),
    },
  }
};
