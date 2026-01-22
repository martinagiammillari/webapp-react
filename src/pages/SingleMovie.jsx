import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  function fetchMovie() {
    axios
      .get(`${backendBaseUrl}/api/movies/${id}`)
      .then((resp) => {
        setMovie(resp.data);
      });
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div className="container mt-4">
      <h1>{movie?.title}</h1>

      <p><strong>Director:</strong> {movie?.director}</p>
      <p><strong>Year:</strong> {movie?.release_year}</p>
      <p><strong>Genre:</strong> {movie?.genre}</p>

      <p>{movie?.abstract}</p>

      <hr />

      <h3>Reviews</h3>

      {movie?.reviews?.length > 0 ? (
        movie.reviews.map((review) => (
          <div key={review.id} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{review.name}</h5>
              <p className="card-text">{review.text}</p>
              <p className="card-text">
                <small className="text-muted">
                  Vote: {review.vote}/10
                </small>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      {/* FORM RECENSIONE */}
      <ReviewForm movieId={id} onReviewAdded={fetchMovie} />
    </div>
  );
}
