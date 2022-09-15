// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import addPerson from "./components/addPerson";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <addPerson />
    </div>
  );
}

export default App;
