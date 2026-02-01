import "../App.css";
import Movie from "./Movie";

import { useState } from "react";

import AddMovieForm from "./AddMovieForm.jsx";

function MovieList() {
  // collection of objects representing movies
  const movies = [
    {
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  function HandleReverseList() {
    let newMovies = [...currentMovies];
    newMovies.reverse();
    setCurrentMovies(newMovies);
  }

  function handleAddMovie({
    title,
    year,
    synopsis = "Default Synopsis",
  }) {
    let updatedMovies = [...currentMovies];
    updatedMovies.push({
      id: updatedMovies.length + 1,
      title,
      year,
      synopsis,
    });
    setCurrentMovies(updatedMovies);
  }
  return (
    <>
      <div className="MovieList componentBox">
        <ul>
          {currentMovies.map((movie) => (
            <Movie
              key={movie.id}
              year={movie.year}
              synopsis={movie.synopsis}
              title={movie.title}
            ></Movie>
          ))}
        </ul>
        <button onClick={HandleReverseList}>Reverse List</button>
      </div>
      <div>
        <AddMovieForm onAddMovie={handleAddMovie}></AddMovieForm>
      </div>
    </>
  );
}

export default MovieList;
