import "./App.css";
import React, { useEffect, useState } from "react";
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
import { imgSlide } from "./utils/GeleData";
import Footer from "./components/Footer";
// import { geleData } from "./utils/GeleData";

const { slide1, slide2, slide3 } = imgSlide;

function App() {
  const location = useLocation();
  const [fill, setFill] = useState("#fff");
  const [data, setData] = useState([...dataObj]);
  const [isLoading, setIsLoading] = useState(true);
  const [vWidth, setVwidths] = useState(1280);
  // const [{ slide1, slide2, slide3 }] = useState(imgSlide);
  // const[{slide2}] = useState(imgSlide)
  // const[{slide1}] = useState(imgSlide)

  useEffect(() => {
    const imgs = [slide1, slide2, slide3];

    cacheImages(imgs);
  }, []);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setVwidths(window.innerWidth);
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  };

  return (
    <Box bgcolor={"#fff"} m="auto" width={"100%"}>
      <NavBar fill={fill} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            index
            element={
              <Home
                fill={fill}
                setFill={setFill}
                slide1={slide1}
                slide2={slide2}
                slide3={slide3}
                isLoading={isLoading}
                vWidth={vWidth}
              />
            }
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/gele" element={<Gele data={data} />} />
          <Route path="/explore/hair" element={<Hair />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Box>
  );
}

export default App;
