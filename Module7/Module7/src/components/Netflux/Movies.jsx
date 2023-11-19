import FavoriteMovies from "./FavoriteMovies";
import RecentMovies from "./RecentMovies";

export default function Movies({ currentUser }) {
  return (
    <>
      <RecentMovies />

      {/* <FavoriteMovies currentUser={currentUser} /> */}
      <FavoriteMovies  />

    </>
  );
}
