import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <div className="app">
      <Navbar onSearchResults={handleSearchResults} />
      <RouterConfig data={searchResults} />
    </div>
  );
}

export default App;
