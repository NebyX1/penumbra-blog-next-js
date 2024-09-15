export async function getPosts() {
  const res = await fetch(`http://127.0.0.1:3500/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al intentar obtener los posts");
  }

  const data = await res.json();

  // Ordenar los posts de más nuevo a más viejo
  const sortedData = data.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return sortedData;
}
