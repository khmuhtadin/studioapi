import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export async function getStaticPaths() {
  const docs = await getCollection('docs');
  return docs.map((doc) => ({
    params: { slug: doc.id.replace(/\.md$/, '').replace(/\/+$/, '') },
    props: { body: doc.body },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const body = props.body as string;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
