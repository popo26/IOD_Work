import { useState } from "react";
import Clock from "./components/Clock";
import ClockDisplay from "./components/ClockDisplay";
import ActivityFinder from "./components/ActivityFinder";
import BitcoinRates from "./components/BitcoinRates";
import RefCounter from "./components/RefCounter";
import VideoPlayer from "./components/VideoPlayer";
import ReducerCounter from "./components/ReducerCounter";

import "./App.css";
import PostListReducer from "./components/PostListReducer";

function App() {
  return <>

  <ClockDisplay/>
  <ActivityFinder/>
  <BitcoinRates/>
  <RefCounter/>
  <VideoPlayer />
  <ReducerCounter/>
  <PostListReducer />
  </>;
}

export default App;
