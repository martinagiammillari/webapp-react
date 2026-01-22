import { useState } from "react";
import axios from "axios";

const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function ReviewForm({ movieId, onReviewAdded }) {
  const [name, setName] = useState("");
  const [vote, setVote] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(`${backendBaseUrl}/api/movies/${movieId}/review`, {
      name,
      vote,
      text
    }).then(() => {
      setName("");
      setVote("");
      setText("");
      onReviewAdded();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4>Add a review</h4>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Vote</label>
        <input
          type="number"
          className="form-control"
          value={vote}
          onChange={(e) => setVote(e.target.value)}
          min="1"
          max="10"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Review</label>
        <textarea
          className="form-control"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <button className="btn btn-success">
        Send review
      </button>
    </form>
  );
}
