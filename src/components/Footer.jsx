import { Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Stack
      sx={{
        position: "fixed",
        // zIndex: "5",
        left: 0,
        bottom: 0,
        backgroundColor: "#000",
        width: "100%",
        margin: "0px",
        padding: "10px"
      }}
    >
      <Typography
        fontWeight={"100"}
        fontSize={"15px"}
        sx={{ color: "#fff", textAlign: "center", textTransform: "capitalize" }}
      >
        website by Xstorm
      </Typography>
    </Stack>
  );
};

export default Footer;
