import React, { useEffect } from "react";
import { Box } from "@mui/material";

const LiquidSlider = ({ width, src }) => {
  useEffect(() => {
    window.rbgShiftSlider();
  }, []);

  return (
    <Box
      className={"slider"}
      sx={{
        position: "inherit",
        transformOrigin: "0",
        width: { lg: "60vw", xs: "100vw" },
        height: "100vh",
        // border: "2px solid green",
        overflow: "hidden"
      }}
    >
      {/* <img width={width} src={src} alt="fashion" /> */}
      <Box
        sx={{
          width: "100%",
          display: "block",
          height: "100vh"
          // border: "2px solid red",
        }}
        id="rbgShiftSlider"
        className="rbgShiftSlider"
      ></Box>
      {/* <nav>
        <a href="#1" className="scene-nav prev" data-nav="previous">
          Prev <span></span>
        </a>
        <a href="#2" className="scene-nav next" data-nav="next">
          Next <span></span>
        </a>
      </nav> */}
    </Box>
  );
};

export default LiquidSlider;
