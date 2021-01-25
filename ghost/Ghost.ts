import GhostContentAPI from '@tryghost/content-api';

export default class Ghost {
  api: any;

  constructor() {
    const { GHOST_URL, GHOST_KEY } = process.env;

    this.api = new GhostContentAPI({
      url: GHOST_URL,
      key: GHOST_KEY,
      version: 'v3',
    });
  }

  async getPosts() {
    return await this.api.posts
      .browse({
        limit: 'all',
        include: 'tags',
      })
      .catch(err => console.error(err));
  }

  async getSinglePost(postSlug) {
    return await this.api.posts
      .read(
        { slug: postSlug },
        { include: 'tags' },
      )
      .catch(err => {
        console.error(err);
      });
  }
}
