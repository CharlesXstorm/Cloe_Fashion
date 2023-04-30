import React from "react";
import { Stack } from "@mui/material";

const HomeInfo = () => {
  return (
    <Stack
      bgcolor={"#fff"}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        margin: "auto"
      }}
    >
      HomeInfo
    </Stack>
  );
};

export default HomeInfo;
