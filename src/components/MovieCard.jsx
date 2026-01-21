export default function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      {/* Immagine */}
      <img
        src={`http://localhost:3600/images/${movie.image}`}
        className="card-img-top"
        alt={movie.title}
      />

      <div className="card-body d-flex flex-column">
        {/* Titolo */}
        <h5 className="card-title">{movie.title}</h5>

        {/* Regista */}
        <h6 className="card-subtitle mb-2 text-muted">
          Directed by {movie.director}
        </h6>

        {/* Abstract */}
        <p className="card-text">
          {movie.abstract}
        </p>

        {/* Info extra */}
        <p className="card-text mt-auto">
          <small className="text-muted">
            Year: {movie.release_year} • Genre: {movie.genre}
          </small>
        </p>
      </div>
    </div>
  );
}
