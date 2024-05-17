import { Suspense } from "react";
import { API_URL } from "../../(home)/page"
import MovieInfo from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";



async function getVideos(id) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

async function getMovies(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}


export default async function MovieDetails({params : {id}}) {
    // const movie = await getMovies(id);
    // const video = await getVideos(id);
    // const [movie, video] = await Promise.all([getMovies(id), getVideos(id)])
    // return <h1>{movie.title} {JSON.stringify(video)}</h1>

    return (
      <div>
        <Suspense fallback={<h1>Loading movie details...</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie details...</h1>}>
          <MovieVideo id={id} />
        </Suspense>
      </div>
    );
}