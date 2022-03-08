import React from "react";
import { movies } from "../data";


function Movies() {

  const movieCard = movies.map(movie => {

    const listGenres = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>;
    })

    return(
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres:</p>
      <ul>
      {listGenres}
      </ul>
    </div>
    )
  })

  return (
  <div>
    <h1>Movies Page</h1>
    {movieCard}
  </div>);
}

export default Movies;
