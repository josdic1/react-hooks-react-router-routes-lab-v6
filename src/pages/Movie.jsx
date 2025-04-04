import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading ] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    fetchMovie()
  },[id])



  const genreData = movie?.genres?.map(g => (
    <span key={g}>{g}</span>
  ));

async function fetchMovie() {
  try {
    setIsLoading(true);
    const r = await fetch(`http://localhost:4000/movies/${id}`)
    const data = await r.json()
    setMovie(data)
    setIsLoading(false);
  }catch (error) {console.error("❌ Caught error:", error);}
}

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      {isLoading ? 
    <h1>Loading...</h1> :
    <>
    <h1>{movie.title}</h1>
    <p>{movie.time} min.</p>
    {genreData}
    </>
    }
    </main>
    </>
  );
}; 

export default Movie;
