import { getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection('blog');
  const data = posts.map(post => ({
    title: post.data.title,
    date: post.data.date,
    slug: post.slug
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
} 