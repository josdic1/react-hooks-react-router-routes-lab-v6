import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

const [directors, setDirectors] = useState([])

useEffect(() => {
  fetchDirectors()
},[])

const directorData = directors.map(d => (
  <article key={d.id}>
    <h2>{d.name}</h2>
    <ul>
    {d.movies.map(movie => (
      <li key={movie}>{movie}</li>
    ))}
    </ul>
  </article>
))

  async function fetchDirectors() {
    try {
      const r = await fetch(`http://localhost:4000/directors`)
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      setDirectors(data)
    }catch (error) {console.error("❌ Caught error:", error);}
  }

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
       {directorData}
      </main>
    </>
  );
};

export default Directors;
