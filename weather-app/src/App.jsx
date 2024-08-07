import { useState } from "react";
import "./App.css";
import SearchCity from "./components/SearchCity";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <SearchCity />
      </div>
    </div>
  );
}

export default App;
