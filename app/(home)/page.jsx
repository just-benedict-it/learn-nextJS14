import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";


async function getMoview(){
  // fetch -> NextJS는 프레임워크. 알아서 캐싱까지 진행해줌
  const response = await fetch(API_URL);
  const json = await response.json()
  return json
}


export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 300))
  const movies = await getMoview()
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
