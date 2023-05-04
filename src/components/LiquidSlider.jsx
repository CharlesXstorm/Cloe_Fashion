import React, { useEffect } from "react";
import { Box } from "@mui/material";

const LiquidSlider = () => {
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
    </Box>
  );
};

export default LiquidSlider;
