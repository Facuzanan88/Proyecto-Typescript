import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import Error from "./components/Error";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" Component={Root} />
        <Route path="*" Component={Error} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
