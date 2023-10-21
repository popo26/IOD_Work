// const movieItems = movies.map((movie) => (
//   <Movie
//     key={movie.id} // key prop is required for lists
//     title={movie.title}
//     year={movie.year}
//     synopsis={movie.synopsis}
//   />
// ));



export default function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}
