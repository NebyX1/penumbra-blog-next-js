export async function getJournals() {
  // const res = await fetch(`http://127.0.0.1:3500/api/journals`, {
  const res = await fetch(`https://loko.penumbra.press/api/journals`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error al intentar obtener las revistas");
  }

  const data = await res.json();

  // Ordenar los posts de más nuevo a más viejo
  const sortedData = data.sort(
    (a: { date: string }, b: { date: string }) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return sortedData;
}
