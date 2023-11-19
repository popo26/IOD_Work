import Movie from "./Movie";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";
import { useUserContext } from "../../context/userContext";

const movies = [
  {
    id: 1,
    title: "Finding Nemo",
    year: 2004,
    synopsis: "finding Nemo",
    favsUsers: [1],
  },
  {
    id: 2,
    title: "The Lion King",
    year: 1995,
    synopsis: "the lion king",
    favsUsers: [2, 3],
  },
  {
    id: 3,
    title: "Toy Story",
    year: 2000,
    synopsis: "toy story",
    favsUsers: [1, 3],
  },
  {
    id: 4,
    title: "The Little Mermaid",
    year: 1997,
    synopsis: "the little mermaid",
    favsUsers: [2],
  },
];

// export default function MoviesList({ currentUser }) {
export default function MoviesList({ isFav = false }) {
  let moviesToDisplay = movies;

  // const currentUser = useContext(CurrentUserContext)
  const { currentUser } = useUserContext();

  // if (currentUser) {
  if (isFav) {
    moviesToDisplay = moviesToDisplay.filter((movie) => {
      if (movie.favsUsers.includes(currentUser.id)) {
        return movie;
      }
    });
  }

  moviesToDisplay = moviesToDisplay.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  return <ul>{moviesToDisplay}</ul>;
}
