import "../App.css";
import Movie from "./Movie";

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

  return (
    <>
      <div className="MovieList componentBox">
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              year={movie.year}
              synopsis={movie.synopsis}
              title={movie.title}
            ></Movie>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MovieList;
