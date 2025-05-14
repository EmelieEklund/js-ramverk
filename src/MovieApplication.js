import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import Button from './Button';

export default function MovieApplication() {
  const [movies, setMovies] = useState([{
      id: 1,
      title: "Eternal Sunshine of the Spotless Mind",
      grade: 5
  }]);

  function deleteItem(id) {
    setMovies(movies.filter((item) => item.id !== id));
  }

    function sortAlphabetic() {
    setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)
    ));
  }

  function sortByGrade() {
    setMovies([...movies].sort((a, b) => b.grade - a.grade
    ));
  }


  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <h4>Lägg till en film vettja</h4>
      <hr></hr>

      <AddMovieForm movies={movies} setMovies={setMovies}/>
      <Movies movies={movies} deleteItem={deleteItem} />

      <hr></hr>

      <div className="d-flex gap-2 justify-content-start">
        <Button text="Alfabetisk ordning" onClick={sortAlphabetic} />
        <Button text="Betygsordning" onClick={sortByGrade} />
      </div>

    </div>
  );
}


