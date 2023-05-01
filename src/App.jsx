import "./App.css";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [backdrop, setBackDrop] = useState("#000");
  return (
    <Box bgcolor={backdrop} m="auto" width={"100%"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setBackDrop={setBackDrop} />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
