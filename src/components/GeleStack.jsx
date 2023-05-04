import React from "react";
import { Stack } from "@mui/material";
import GeleModal from "./GeleModal";

const GeleStack = ({ data, loading, dvWidth }) => {
  //   console.log(dvWidth);
  return (
    <Stack
      m="40px"
      sx={{
        flexDirection: { lg: "row", xs: dvWidth > 800 ? "row" : "column" },
        flexWrap: "wrap",
        gap: { lg: "40px", xs: "10px" },
        width: "100%",

        overflow: "hidden",
        margin: "auto",

        justifyContent: `center`
      }}
    >
      {data.map((item, index) => (
        <GeleModal
          dvWidth={dvWidth}
          index={index}
          loading={loading}
          key={index}
          src={item.src}
          srcbw={item.srcbw}
        />
      ))}
    </Stack>
  );
};

export default GeleStack;
