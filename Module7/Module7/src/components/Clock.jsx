import { useState, useEffect } from "react";

// Renders a digital time that updates every second
export default function Clock() {
  const [date, setDate] = useState(new Date());
  // ++ Try to add another state variable tickCount, to keep
  // track of (and display) the number of seconds the clock
  // has ticked since mounting. Reset it to 0 on unmount.
  const [tickCount, setTickCount] = useState(0);

  useEffect(() => {
    let clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    // CLEANUP function
    // function returned from useEffect is run on unmount
    // and used to cleanup any side effects
    // ++ Watch the console when the Clock is removed -
    // does the ticking still continue now?
    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
      setTickCount(0);
    };
  }, []);

  //   function initClock() {
  //     // first arg is usually an arrow function
  //     setInterval(() => tick(), 1000);
  //     console.log("Clock component mounted");
  //   }
  //   //When you want to do something specific after a component is mouted, use useEffect()
  //   //useEffect(initClock, []); // only run when component is mounted
  //   //useEffect(()=> {console.log("I run every render of the component")}); //run every render

  const tick = () => {
    setTickCount(Math.floor((new Date().getTime() - date.getTime()) / 1000));
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };

  // Same as above
  //   useEffect(() => {
  //     // first arg is usually an arrow function
  //     setInterval(() => tick(), 1000);
  //     console.log("Clock component mounted");
  //   }, []); // second arg is an array of dependencies
  //   const tick = () => {
  //     setDate(new Date());
  //     console.log("tick"); // track the effect frequency
  //   };

  return (
    <div className="Clock componentBox">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
      <p>My clock was displayed for {tickCount} seconds.</p>
    </div>
  );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?
