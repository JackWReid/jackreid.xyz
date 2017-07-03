import { createClient } from 'contentful';

import trips from './trips';

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

export async function getTripPosts() {
  return trips.map(trip => ({
    title: trip.title,
    postDate: trip.postDate,
    slug: trip.slug,
    photo: trip.photos[0],
  }));
}

export async function getTripPost(slug) {
  return trips.find(trip => trip.slug === slug);
}

export async function getRandomPhoto() {
  const random = array => array[Math.floor(Math.random() * array.length)];
  const post = random(trips);
  return {
    title: post.title,
    slug: post.slug,
    url: random(post.photos),
  };
}
