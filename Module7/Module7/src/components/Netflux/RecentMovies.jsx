import MoviesList from "./MoviesList";

export default function RecentMovies() {
  return (
    <div
      className="borderBox"
      style={{ backgroundColor: "#ffdfba" }}
    >
      <p>Here are the recent movies</p>
      <MoviesList />
    </div>
  );
}
