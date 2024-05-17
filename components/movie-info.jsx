import { API_URL } from "../app/(home)/page";

async function getMovies(id) {
  console.log(`${API_URL}/${id}`);

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}


export default async function MovieInfo({id}) {
    const movie = await getMovies(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}