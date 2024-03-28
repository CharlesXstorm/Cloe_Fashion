import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import LoaderHome from "../components/LoaderHome";
import Landing from "../components/Landing";

// import HomeInfo from "../components/HomeInfo";
// import { AnimatePresence } from "framer-motion";

const Home = ({ setFill, fill, slide1, slide2, slide3, isLoading, vWidth }) => {
  // const [hasLoaded, setHasLoaded] = useState(true);
  // const [vWidth, setVwidths] = useState(1280);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHasLoaded(false);
  //   }, [1000]);

  //   setVwidths(window.innerWidth);
  // }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <LoaderHome
          isLoading={isLoading}
          vWidth={vWidth}
          // setVheight={setVheight}
        />,
        document.getElementById("loader")
      )}

      <Landing
        width={vWidth < 1024 ? "180%" : "100%"}
        scale={vWidth > 1280 ? 1.3 : 1}
        // setIsExploring={setIsExploring}
        setFill={setFill}
        fill={fill}
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
      />

      {/* <AnimatePresence>
        {!isExploring && (
          <Landing
            width={vWidth < 1024 ? "180%" : "100%"}
            scale={vWidth > 1280 ? 1.3 : 1}
            setIsExploring={setIsExploring}
            setBackDrop={setBackDrop}
          />
        )}
      </AnimatePresence> */}
      {/* {isExploring && <HomeInfo vHeight={vHeight} />} */}
    </>
  );
};

export default Home;
