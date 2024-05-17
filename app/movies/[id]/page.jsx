import { Suspense } from "react";
import { API_URL } from "../../(home)/page"
import MovieInfo from "../../../components/movie-info";
import MovieVideo from "../../../components/movie-video";

async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function generateMetadata({params:{id}}){
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}


export default async function MovieDetails({params : {id}}) {

    return (
      <div>
        <Suspense fallback={<h1></h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1></h1>}>
          <MovieVideo id={id} />
        </Suspense>
      </div>
    );
}