import { useEffect } from "react";

export default function Movies() {
  useEffect(()=> {
    console.log("chiamo api")
  })
  return (
    <div className="container mt-4">
      <h1>Movies</h1>
      <p>Here you can find you're movie's list</p>
    </div>
  );
}
