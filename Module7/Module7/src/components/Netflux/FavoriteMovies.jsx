import MoviesList from "./MoviesList";

export default function FavoriteMovies({ currentUser }) {
  return (
    <div
      className="borderBox"
      style={{ backgroundColor: "#baffc9" }}
    >
      <p>Here are your favs movies</p>

      {/* <MoviesList currentUser={currentUser} /> */}
      <MoviesList isFav={true}/>

    </div>
  );
}
