import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

useEffect(() => {
  fetchActors()
},[])

const actorData = actors.map(d => (
  <article key={d.id}>
    <h2>{d.name}</h2>
    <ul>
    {d.movies.map(movie => (
      <li key={movie}>{movie}</li>
    ))}
    </ul>
  </article>
))

  async function fetchActors() {
    try {
      const r = await fetch(`http://localhost:4000/actors`)
      if(!r.ok) {
        throw new Error("💥 Error");
      }
      const data = await r.json()
      setActors(data)
    }catch (error) {console.error("❌ Caught error:", error);}
  }
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {actorData}
      </main>
    </>
  );
};

export default Actors;
