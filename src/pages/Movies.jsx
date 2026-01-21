import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const backendBaseUrl= import.meta.env.VITE_BACKEND_URL;


export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/movies`)
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Movies</h1>

      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-3">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
