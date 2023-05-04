import "./App.css";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { AnimatePresence } from "framer-motion";
import Explore from "./pages/Explore";
import Gele from "./pages/Gele";
import Hair from "./pages/Hair";
import { dataObj } from "./utils/GeleData";
// import { geleData } from "./utils/GeleData";

function App() {
  const location = useLocation();
  const [backdrop, setBackDrop] = useState("#000");
  const [data, setData] = useState([...dataObj]);

  // console.log(data);
  return (
    <Box bgcolor={backdrop} m="auto" width={"100%"}>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route index element={<Home setBackDrop={setBackDrop} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/gele" element={<Gele data={data} />} />
          <Route path="/explore/hair" element={<Hair />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Box>
  );
}

export default App;
