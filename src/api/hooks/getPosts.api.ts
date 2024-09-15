import { Post } from '@/types';

export async function getPosts(): Promise<Post[]> {
  // const res = await fetch(`http://127.0.0.1:3500/api/posts`, {
    const res = await fetch(`https://loko.penumbra.press/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(`Error al intentar obtener los posts: ${errorData.error || res.statusText}`);
  }

  const data: Post[] = await res.json();

  // Ordenar los posts de más nuevo a más viejo
  const sortedData = data.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return sortedData;
}
