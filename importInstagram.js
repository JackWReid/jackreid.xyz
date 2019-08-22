const cheerio = require('cheerio');
const axios = require('axios');
const posts = require('./instagramPosts.json');

(async () => {
  async function getPostDateLocation (post) {
    const { data } = await axios(post.key);
    const $ = cheerio.load(data);  
    const scriptTagData = $('script[type="application/ld+json"]')[0].children[0].data;
    const postDataExtended = JSON.parse(scriptTagData);

    return {
      dateTime: postDataExtended.uploadDate,
      location: postDataExtended.contentLocation.name,
    };
  }

  function removeHashtags(text) {
    return text.replace(/\#\w\w+\s?/g, '');
  }

  function slugify(text, instagramId) {
    const slug = removeHashtags(text.toString().toLowerCase())
      .slice(0, 50)                   // Trim to max 50 chars
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
    
    return slug || instagramId;
  }

  function parsePostId(post) {
    const split = post.key.split('/');
    return split[split.length - 2];
  }

  function createPostFrontmatter(post) {
    return `---
  title: ${removeHashtags(post.caption).replace('\n', '')}
  slug: ${slugify(post.caption, post.id)}
  date: ${post.dateTime}
  draft: false
  instagram_url: ${post.url}
  instagram: ${post.id}
  ---`
    ;
  }

  for (let post of posts) {
    const id = parsePostId(post);
    const { dateTime, location } = await getPostDateLocation(post);
    const postData = {
      id,
      url: post['key'],
      dateTime,
      location,
      image: post['img_url'],
      caption: post['caption'],
    };
    const frontMatter = createPostFrontmatter(postData);
    console.log(postData);
  }
})();
