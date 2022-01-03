import React from 'react';

// Imports Pages
import HomePage from "./pages/home"; 
import NwePage from "./pages/New";
//----------------------------------------------------------------

// Import Styled ThemeProvider
import { ThemeProvider } from "styled-components";
//----------------------------------------------------------------

// Routers
import { BrowserRouter, Routes , Route } from "react-router-dom";
//----------------------------------------------------------------

//Import Toasters
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//----------------------------------------------------------------

function App() {

  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#fff"
  };

  return (

   <ThemeProvider theme={theme}>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={ <HomePage/> } />
        <Route path="/new" element={ <NwePage/> } />
      </Routes>
     </BrowserRouter>
     <ToastContainer />
   </ThemeProvider>

  );
}

export default App;
