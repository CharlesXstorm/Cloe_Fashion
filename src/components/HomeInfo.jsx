import React, { useState, useEffect } from "react";
// import $ from "jquery";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Catalogue from "./Catalogue";

import style from "./HomeInfo.module.css";

const HomeInfo = ({ catData }) => {
  const [dvWidth, setDvWidth] = useState(1000);

  useEffect(() => {
    setDvWidth(window.innerWidth);
  }, []);

  return (
    <motion.div
      className={style.clipPath}
      initial={{ clipPath: "circle(0% at 0% 0%)" }}
      animate={{
        clipPath: "circle(140% at 0% 0%)",
        backgroundColor: "#242424"
      }}
      // transition={{ duration: 1.2, ease: "easeInOut" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        // zIndex: 1,
        width: "100%",
        height: "auto",
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "#000"
        // opacity: opacity
      }}
    >
      {
        //clipPath starts
        // <motion.div
        //   style={{
        //     position: "absolute",
        //     zIndex: 2,
        //     width: "500px",
        //     height: "500px",
        //     backgroundColor: "#fff"
        //   }}
        // ></motion.div>
        //clipPathends
      }
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 4, ease: "linear" }} //delay: 4,
        // mb={"1em"}
        // bgcolor={"#000"}
        style={{
          marginBottom: "1em",
          backgroundColor: "#000",
          position: "fixed",
          width: "100%",
          height: "120px",
          zIndex: 2
        }}
      ></motion.div>
      <Box mt={"140px"}>
        <Catalogue dvWidth={dvWidth} data={catData} />
      </Box>
      <motion.div
        className={style.circleTrans}
        initial={{ originX: 0 }}
        exit={{ scale: 3000, top: 10, originX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        // transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default HomeInfo;
