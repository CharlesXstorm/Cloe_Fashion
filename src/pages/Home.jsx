import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import LoaderHome from "../components/LoaderHome";
import Landing from "../components/Landing";

import HomeInfo from "../components/HomeInfo";
import { AnimatePresence } from "framer-motion";

const Home = ({ setBackDrop }) => {
  const [hasLoaded, setHasLoaded] = useState(true);
  const [vWidth, setVwidths] = useState(1280);
  const [isExploring, setIsExploring] = useState(false);
  const [vHeight, setVheight] = useState(0);

  // const [hasLanded, setHasLanded] = useState(!false);

  // const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (e) => {
  //   // setScroll(e > 0.1 ? false : true);
  //   console.log(e);
  // });

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(false);
    }, [2000]);

    setVwidths(window.innerWidth);
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <LoaderHome
          hasLoaded={hasLoaded}
          setHasLoaded={setHasLoaded}
          vWidth={vWidth}
          setVheight={setVheight}
        />,
        document.getElementById("loader")
      )}

      <Landing
        width={vWidth < 1024 ? "180%" : "100%"}
        scale={vWidth > 1280 ? 1.3 : 1}
        setIsExploring={setIsExploring}
        setBackDrop={setBackDrop}
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
