import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Movie() {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        <MovieCard />
      </main>
    </>
  );
}; 

export default Movie;
