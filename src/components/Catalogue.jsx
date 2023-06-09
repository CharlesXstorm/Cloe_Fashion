import React from "react";
// import CatItem from "./CatItem";
import CatItem from "./CatItem";
import { Box } from "@mui/material";

const Catalogue = ({ data, dvWidth }) => {
  return (
    <Box sx={{ margin: { lg: "10em", xs: "0em" }, paddingBottom: "40px" }}>
      {data.map((item) => (
        <CatItem
          key={item.id}
          id={item.id}
          src={item.src}
          dvWidth={dvWidth}
          srcbw={item.srcbw}
          isEven={item.id % 2 === 0 ? true : false}
          text={item.text}
        />
      ))}
    </Box>
  );
};

export default Catalogue;
