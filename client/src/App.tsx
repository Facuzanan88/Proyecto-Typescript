import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import Error from "./components/Error";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/LoginButtons/Profile";
import Registro from "./components/Registro/Registro";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" Component={Root} />
        <Route path="/registrarse" Component={Registro} />
        <Route path="*" Component={Error} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
