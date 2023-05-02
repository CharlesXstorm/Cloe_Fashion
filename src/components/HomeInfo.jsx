import React, { useState } from "react";
// import $ from "jquery";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Catalogue from "./Catalogue";

import style from "./HomeInfo.module.css";

const HomeInfo = ({ catData }) => {
  //   const { scrollYProgress } = useScroll();

  //   useMotionValueEvent(scrollYProgress, "change", (e) => {
  //     setScroll(e > 0.1 ? false : true);
  //   });

  return (
    <motion.div
      className={style.clipPath}
      initial={{ clipPath: "circle(0% at 50% 0%)" }}
      animate={{ clipPath: "circle(120% at 50% 20%)", backgroundColor: "#fff" }}
      transition={{ duration: 2, delay: 4, ease: "easeInOut" }}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 4, ease: "linear" }}
        // mb={"1em"}
        // bgcolor={"#000"}
        style={{
          marginBottom: "1em",
          backgroundColor: "#000",
          position: "fixed",
          width: "100%",
          height: "120px"
        }}
      ></motion.div>
      <Box mt={"140px"}>
        <Catalogue data={catData} />
      </Box>
    </motion.div>
  );
};

export default HomeInfo;
