import Movie from "./Movie";
import { useState } from "react";
import AddMovieForm from "./AddMovieForm";

// collection of objects representing movies
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  // const movieItems = movies.map((movie) => (
  //   <Movie
  //     key={movie.id} // key prop is required for lists
  //     title={movie.title}
  //     year={movie.year}
  //     synopsis={movie.synopsis}
  //   />
  // ));

  const handleAddNewMovie = () => {
    let newMovies = [
      ...currentMovies,
      {
        id: currentMovies.length + 1,
        title: "The Whale",
        year: 2022,
        synopsis:
          "A morbidly obese teacher attempts to reconnect with his daughter.",
      },
    ];
    setCurrentMovies(newMovies);
  };

  const handleRemoveMovie = () => {
    // remove an item from an array - RIGHT WAY using filter to create a new array without the removed item
    let idToDelete = 2;
    let newMovies = currentMovies.filter((movie) => movie.id != idToDelete);
    setCurrentMovies(newMovies);
  };

  const handleUpdateSynopsis = () => {
    // replace/update an item in an array - RIGHT WAY using map to create a new array including the updated item
    let updatedSynopsis1 = "Iconic heart-warming prison break movie";
    let newMovies = currentMovies.map((movie) =>
      movie.id === 1 ? { ...movie, synopsis: updatedSynopsis1 } : movie
    );
    setCurrentMovies(newMovies);
  };

  const handleReverseSortMovies = () => {
    // sort/reverse an array - RIGHT WAY cloning the original first
    let newMovies = [...currentMovies];
    newMovies.reverse();
    newMovies.sort();
    setCurrentMovies(newMovies);
  };

  // add this in MoviesList component
const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but succinct
  setCurrentMovies([...currentMovies, newMovie])
  }

  return (
    <div className="MoviesList componentBox">
      <ul>
        {" "}
        {/* iterate over each movie, print the title in a list */}
        {/* {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} <strong>({movie.year})</strong>:{" "}
            <cite>{movie.synopsis}</cite>
          </li>
        ))} */}
        {movieItems}
      </ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={handleAddNewMovie}>Add Movie</button>
      <button onClick={handleRemoveMovie}>Remove Movie</button>
      <button onClick={handleUpdateSynopsis}>Update Synopsis</button>
      <button onClick={handleReverseSortMovies}>Sort List</button>

      <AddMovieForm onAddMovie={handleAddMovie}/>
    </div>
  );
}
export default MoviesList;
