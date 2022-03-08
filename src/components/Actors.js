import React from "react";
import { actors } from "../data";

function Actors() {

  const allActors = actors.map(e => {

    const actorsWork = e.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })

    return (
      <div key={e.name}>
        <h2>Name: {e.name}</h2>
        <p>Movies:</p>
        <ul>
          {actorsWork}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1> 
    {allActors}
  </div>);
}

export default Actors;
