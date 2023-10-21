import { useState } from "react";

// Child component to display and convert temp if needed
export default function Temperature({ temp, units = "C" }) {
  const [currentUnits, setCurrentUnits] = useState(units);
  const [currentTemp, setCurrentTemp] = useState(temp);

  //   currentUnits === "C" ? temp : (temp * 9) / 5 + 32

  const handleConversion = () => {
    if (currentUnits === "C") {
      //Need to conver to F
      setCurrentTemp((currentTemp * 9) / 5 + 32);
      setCurrentUnits("F");
    } else if (currentUnits === "F") {
      //Need to conver to C
      setCurrentTemp((currentTemp - 32) * 5 / 9);
      setCurrentUnits("C");
    }
  };
  // default to celcius
  // convert to Fahrenheit if units is F (or not C)
  return (
    <>
      <span className="Temperature">
        <strong>
          {" "}
          {parseInt(currentTemp)}&deg;{currentUnits}{" "}
        </strong>
      </span>
      <br />
      <button onClick={handleConversion}>Convert</button>
    </>
  );
}
// ++ Try adding a button to convert between C and F temps
