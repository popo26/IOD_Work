import "../styles/ExampleComponent.css";
import { getDate, getMonth, DateComponent, daysOfWeek } from "../Utilities";

// function test(){
//   console.log("Test");
//   return "This is a test"
// }

export default function ExampleComponent() {
  // let test = test();

  const date = JSON.stringify(getDate());
  const month = getMonth();
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
      {/* <span>{test}</span> */}
      <span>{date}</span>
      <br />
      <span>{month}</span>
      <DateComponent />
      <span>{daysOfWeek}</span>
    </div>
  );
}

//export default ExampleComponent; // to have single component to be accessed from outside - 1 element only
