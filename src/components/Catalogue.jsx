import React from "react";
import CatItem from "./CatItem";
import { Box } from "@mui/material";

const Catalogue = ({ data }) => {
  return (
    <Box sx={{ margin: { lg: "10em", xs: "0em" } }}>
      {data.map((item) => (
        <CatItem key={item.id} id={item.id} src={item.src} text={item.text} />
      ))}
    </Box>
  );
};

export default Catalogue;
