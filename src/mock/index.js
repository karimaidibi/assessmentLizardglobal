import { createServer } from 'miragejs';
import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    /* GET all posts
      - get the page number from the query params
      - get the limit from the query params
      - get the posts from the data
     */
    this.get('/posts', (schema, request) => {
      const page = request.queryParams.page || 1;
      const limit = request.queryParams.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      return data.posts.slice(startIndex, endIndex);
    });

    /* GET single post by id
      - get the id from the request params
      - find the post with the matching id
     */
    this.get('/posts/:id', (schema, request) => {
      const id = request.params.id;
      const post = data.posts.find((post) => post.id === id);
      return post;
    });
  },

});