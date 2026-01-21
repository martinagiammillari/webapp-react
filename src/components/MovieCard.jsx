import { Link } from "react-router-dom";

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img
        src={`${backendBaseUrl}/images/${movie.image}`}
        className="card-img-top"
        alt={movie.title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>

        <h6 className="card-subtitle mb-2 text-muted">
          Directed by {movie.director}
        </h6>

        <p className="card-text">{movie.abstract}</p>

        <p className="card-text mt-auto">
          <small className="text-muted">
            Year: {movie.release_year} • Genre: {movie.genre}
          </small>
        </p>

        {/* BOTTONE */}
        <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-3">
          Discover more
        </Link>
      </div>
    </div>
  );
}
