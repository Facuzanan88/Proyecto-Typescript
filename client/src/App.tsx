import React from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Root} />
    </Routes>
  );
}

export default App;
