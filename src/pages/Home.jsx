import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
  },[])




  const movieData = movies.map(m => (
    <MovieCard key={m.id} movie={m}/>
  ))



  async function fetchMovies() {
    try {
      const r = await fetch(`http://localhost:4000/movies`)
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      setMovies(data)
    }catch (error) {console.error("❌ Caught error:", error);}
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
      {movieData}
      </main> 
    </>
  );
};   

export default Home;
