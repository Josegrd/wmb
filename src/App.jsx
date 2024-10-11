import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Hero />
      <Login />
    </>
  );
}

export default App;
