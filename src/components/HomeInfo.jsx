import React from "react";
// import $ from "jquery";
import { Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import Catalogue from "./Catalogue";
import { geleData } from "../utils/GeleData";
import style from "./HomeInfo.module.css";

const CatData = [
  {
    id: "001",
    text: (
      <>
        23 Gele Style <br /> Ideas
      </>
    ),
    src: "../images/slide1.jpg" /*geleData[14]*/
  },
  {
    id: "002",
    text: (
      <>
        Hair Style <br /> Ideas
      </>
    ),
    src: "../images/slide2.jpg" /*"https://images2.imgbox.com/35/71/5fsl1tFm_o.jpg"*/
  }
];

const HomeInfo = ({ setScroll, vHeight }) => {
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
        zIndex: -1,
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
        <Catalogue data={CatData} />
      </Box>
    </motion.div>
  );
};

export default HomeInfo;
