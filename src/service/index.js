import { createClient } from 'contentful';

import photoPosts from './photoPosts';

const space = 'ixsvrch5ksw3'
const accessToken = '77e9703639cf6c0aa24f5fae80b531febc654a73771f2df5dbc7c9cbe0811498'

const contentfulClient = createClient({space, accessToken});

export async function getWritingPosts() {
  return contentfulClient.getEntries({
    content_type: 'writingPost',
  })
  .then(response => response.items.map(item => ({
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      date: item.fields.postDate,
      slug: item.fields.slug,
      body: item.fields.body,
    })))
  .catch(error => console.error(error));
}

export async function getWritingPost(slug) {
  return contentfulClient.getEntries({
    'content_type': 'writingPost',
    'fields.slug': slug,
  })
  .then(response => response.items[0].fields)
  .catch(error => console.error(error));
}

export async function getPhotoPosts() {
  return photoPosts.map(post => ({
    title: post.title,
    postDate: post.postDate,
    slug: post.slug,
    photo: post.photos[0],
  }));
}

export async function getPhotoPost(slug) {
  return photoPosts.find(post => post.slug === slug);
}

export async function getRandomPhoto() {
  const random = array => array[Math.floor(Math.random() * array.length)];
  const post = random(photoPosts);
  return {
    title: post.title,
    slug: post.slug,
    url: random(post.photos),
  };
}
