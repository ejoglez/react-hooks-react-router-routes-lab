import React from "react";
import { directors } from "../data";

function Directors() {

  const allDirectors = directors.map(e => {
    
    const listOfMovies = e.movies.map(movie => {
      return( 
        <li key={movie}>
          {movie}
        </li>
      )
    })

    return (
      <div key={e.name}>
        <h1>Name: {e.name}</h1>
        <p>Movies: </p>
        <ul>
          {listOfMovies}
        </ul>
      </div>)
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>);
}

export default Directors;
