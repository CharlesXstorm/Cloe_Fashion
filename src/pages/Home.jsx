import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import ReactDOM from "react-dom";
import LoaderHome from "../components/LoaderHome";
import Landing from "../components/Landing";
import $ from "jquery";

const Home = () => {
  const [hasLoaded, setHasLoaded] = useState(true);
  const [vWidth, setVwidths] = useState(1280);

  // const [hasLanded, setHasLanded] = useState(!false);

  useEffect(() => {
    $(() => {
      $(window).on("load", () => {
        setHasLoaded(false);
      });
    });
    setVwidths(window.innerWidth);
  }, []);

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

      <Landing
        width={vWidth < 1024 ? "180%" : "100%"}
        scale={vWidth > 1280 ? 1.3 : 1}
      />
    </>
  );
};

export default Home;
