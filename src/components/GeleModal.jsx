import React from "react";
import { Stack, Box, Skeleton, Typography } from "@mui/material";
import { motion } from "framer-motion";

const modalVariant = {
  hidden: {
    borderLeft: "0px",
    borderRight: "0px",
    transition: {
      duration: 3,
      ease: "easeInOut"
    }
  },
  visible: {
    borderLeft: "14px solid orange",
    borderRight: "14px solid orange",
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const GeleModal = ({ src, loading, index, dvWidth }) => {
  //   console.log(src);
  return (
    <Stack
      sx={{
        gap: { lg: "40px", xs: "10px" },
        width: { lg: "400px", xs: dvWidth > 800 ? "400px" : "100%" },
        height: "624px",
        overflow: "hidden",
        margin: "auto",
        justifyContent: `center`
      }}
    >
      <motion.div
        variants={modalVariant}
        initial="hidden"
        whileHover="visible"
        style={{ width: "100%", height: "550px", overflow: "hidden" }}
      >
        {loading === true ? (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height="550px"
            animation="wave"
          />
        ) : (
          <img
            src={src}
            loading="lazy"
            alt="gele"
            width={"110%"}
            // height="550px"
          />
        )}
      </motion.div>
      <Box mt="10px">
        {loading === true ? (
          <Skeleton
            variant="text"
            width={"100%"}
            height={"25px"}
            animation="wave"
          />
        ) : (
          <Typography
            variant="body1"
            fontSize={"25px"}
            fontFamily={"newyorkregular"}
            sx={{ textAlign: "center", color: "#fff" }}
          >
            Style {index + 1}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};

export default GeleModal;
