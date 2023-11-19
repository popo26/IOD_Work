import Movies from "./Movies";

export default function Profile({ currentUser }) {
  return (
    <div
      className="borderBox"
      style={{ backgroundColor: "#ffb3ba" }}
    >
      <p style={{ fontWeight: "bold" }}>Hello {currentUser.name} !</p>
      <p>Check out this movies</p>

      <Movies currentUser={currentUser} />
    </div>
  );
}
