import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3600/api/movies")
      .then((resp) => {
        console.log("MOVIE LIST:", resp.data.results);
        setMovies(resp.data.results); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>Movies</h1>
      <p>Here you can find your movie's list</p>

      <ul className="list-group">
        {movies.map((movie) => (
          <li key={movie.id} className="list-group-item">
            <strong>{movie.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
