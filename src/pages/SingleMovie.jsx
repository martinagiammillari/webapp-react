import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!movie) {
    return (
      <div className="container mt-4">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Year:</strong> {movie.release_year}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p>{movie.abstract}</p>
    </div>
  );
}
