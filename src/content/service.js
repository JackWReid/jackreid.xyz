import { createClient } from 'contentful';

const space = 'ixsvrch5ksw3'
const accessToken = '77e9703639cf6c0aa24f5fae80b531febc654a73771f2df5dbc7c9cbe0811498'

const client = createClient({space, accessToken});

export async function getWritingPosts() {
  return client.getEntries({
    content_type: 'writingPost',
  })
  .then(response => response.items)
  .catch(error => console.error(error));
}

export async function getPostBySlug(slug) {
  return client.getEntries({
    'content_type': 'writingPost',
    'fields.slug': slug,
  })
  .then(response => response.items[0].fields)
  .catch(error => console.error(error));
}
