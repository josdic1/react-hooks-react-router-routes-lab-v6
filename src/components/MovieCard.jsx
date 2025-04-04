import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


function MovieCard({movie, onMovieClick}) {
  const { id } = useParams();

  return (
    <article onClick={() => onMovieClick(movie)}>
        <h2>{movie.title}</h2>
        <Link to={`/movie/${id}`}/>
    </article>
  )
  }

export default MovieCard;