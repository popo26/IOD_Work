import { useState } from "react";
import Clock from "./components/Clock";
import ClockDisplay from "./components/ClockDisplay";
import ActivityFinder from "./components/ActivityFinder";
import BitcoinRates from "./components/BitcoinRates";
import RefCounter from "./components/RefCounter";
import VideoPlayer from "./components/VideoPlayer";
import ReducerCounter from "./components/ReducerCounter";
import SubscribeForm from "./components/SubscribeForm";
import ActivityFinderWithCustomHook from "./components/ActivityFinderWithCustomHook";
import Netflux from "./components/Netflux/Netflux";
import { UserProvider } from "./context/userContext";

import "./App.css";
import PostListReducer from "./components/PostListReducer";
import MyThemeProvider from "./context/myThemeContext";
import ThemeButtonSwitch from "./components/ThemeButtonSwitch";
// import { CurrentUserProvider } from "./context/currentUserContext";

function App() {
  return (
    <>
      {/* value should be same as state of Netflux */}
      <UserProvider>
        <MyThemeProvider>
          <ThemeButtonSwitch />
          {/* <Netflux /> */}

          <ClockDisplay />
          <ActivityFinder />
          <ActivityFinderWithCustomHook />
          <BitcoinRates />
          <RefCounter />
          <VideoPlayer />
          <ReducerCounter />
          <PostListReducer />
          <SubscribeForm />
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
