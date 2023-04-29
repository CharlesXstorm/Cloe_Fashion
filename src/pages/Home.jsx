import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import ReactDOM from "react-dom";
import LoaderHome from "../components/LoaderHome";
import Landing from "../components/Landing";
import $ from "jquery";

const Home = ({ setFillColor }) => {
  const [hasLoaded, setHasLoaded] = useState(true);
  const [vWidth, setVwidths] = useState(1280);

  const [hasLanded, setHasLanded] = useState(false);

  useEffect(() => {
    setVwidths(window.innerWidth);
  }, []);

  $(() => {
    setTimeout(() => {
      setHasLanded(true);
      setFillColor(true);
    }, 8000);
  });
  return (
    <>
      {ReactDOM.createPortal(
        <LoaderHome
          hasLoaded={hasLoaded}
          setHasLoaded={setHasLoaded}
          vWidth={vWidth}
        />,
        document.getElementById("loader")
      )}
      {hasLanded && (
        <Landing
          width={vWidth < 1024 ? "180%" : "100%"}
          scale={vWidth > 1280 ? 1.3 : 1}
        />
      )}
    </>
  );
};

export default Home;
