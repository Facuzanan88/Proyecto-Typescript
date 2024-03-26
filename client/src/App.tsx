import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import Perfil from "./components/Perfil/Perfil";
import Registro from "./components/Registro/Registro";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import CardDetail from "./components/CardDetail/CardDetail";
import Sucursales from "./components/Sucursales/Sucursales";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Contacto from "./components/Contacto/Contacto";
import CowCuts from "./components/CowCuts/CowCuts";
import PigCuts from "./components/PigCuts/PigCuts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/cow" Component={CowCuts} />
        <Route path="/pig" Component={PigCuts} />
        <Route path="/:id" Component={CardDetail} />
        <Route path="/registrarse" Component={Registro} />
        <Route path="/profile" Component={Perfil} />
        <Route path="*" Component={Error} />
        <Route path="/sucursales" Component={Sucursales} />
        <Route path="/quienessomos" Component={QuienesSomos} />
        <Route path="/contacto" Component={Contacto} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
