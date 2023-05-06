import React, { useEffect } from "react";
import { Box } from "@mui/material";

const LiquidSlider = (props) => {
  useEffect(() => {
    window.rbgShiftSlider();

    // return () => window.rbgShiftSlider();
  }, []);

  return (
    <Box
      className={"slider"}
      sx={{
        position: "inherit",
        transformOrigin: "0",
        width: { lg: "60vw", xs: "100vw" },
        height: "100vh",

        overflow: "hidden"
      }}
    >
      {props.children}
      {/* <Box
        sx={{
          width: "100%",
          display: "block",
          height: "100vh"
        }}
        id="rbgShiftSlider"
        className="rbgShiftSlider"
      ></Box> */}
    </Box>
  );
};

export default LiquidSlider;
