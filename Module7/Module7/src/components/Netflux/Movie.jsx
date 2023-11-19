export default function Movie({ title, year, synopsis }) {
  return (
    <li
      className="borderBox"
      style={{ backgroundColor: "#bae1ff" }}
    >
      <p>
        {title} ({year})
      </p>
      <p>{synopsis}</p>
    </li>
  );
}
