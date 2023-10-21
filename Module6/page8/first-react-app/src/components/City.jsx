// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults
function City({ name, state = "NSW", country = "Australia", children }) {
  return (
    <div className="City componentBox">
      <strong>{name}</strong> is in {state}, {country} <br />
      {"Here are my children"}
      {children}
    </div>
  );
}
export default City;
