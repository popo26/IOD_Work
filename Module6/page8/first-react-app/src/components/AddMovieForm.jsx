import { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");

  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, year, synopsis });
  };

//   try{
//     throw new Error("This is an error from AddMovieForm"); // didnt write any catch but with error Boundary error is caught at parent main.jsx
//   } finally{
//     console.log("Finally clause from AddMovieForm")
//   }

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Synopsis:
          <textarea
            name="synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
