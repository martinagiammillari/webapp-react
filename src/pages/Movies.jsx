import axios from "axios";
import { useEffect } from "react";

export default function Movies() {
  useEffect(()=> {
    console.log("chiamo api")
    axios
    .get("http://localhost:3600/api/movies")
    .then((resp)=>{
      console.log(resp.data.results);
    })
    .catch((err)=>{
      console.log(err);
    });
  
  }, []);
  return (
    <div className="container mt-4">
      <h1>Movies</h1>
      <p>Here you can find you're movie's list</p>
    </div>
  );
}
