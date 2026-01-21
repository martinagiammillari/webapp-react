export default function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>

        <p className="card-text">
          Year: {movie.release_year}
        </p>

        <p className="card-text">
          Genre: {movie.genre}
        </p>
      </div>
    </div>
  );
}
