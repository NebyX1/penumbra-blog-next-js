export async function getSinglePost(slug: string) {
//   const res = await fetch(`http://127.0.0.1:3500/api/posts/slug/${slug}`, {
    const res = await fetch(`https://loko.penumbra.press/api/posts/slug/${slug}`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
      cache: 'no-store',
  });

  if (!res.ok) {
      throw new Error(`Error al cargar el post con id ${slug}: ${res.statusText}`);
  }

  // Verifica el tipo de contenido que estás recibiendo
  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      console.log("Respuesta no es JSON, se recibió:", text);
      throw new Error("La respuesta no es un JSON válido");
  }

  const data = await res.json();
  return data;
}