import React, { useState, useEffect } from "react";
import style from "../components/HomeInfo.module.css";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import GeleStack from "../components/GeleStack";

const Gele = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [dvWidth, setdvWidth] = useState(800);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, [4000]);

    setdvWidth(window.innerWidth);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <motion.div
      className={style.clipPath}
      initial={{ clipPath: "circle(0% at 0% 0%)" }}
      animate={{
        clipPath: "circle(140% at 0% 0%)",
        // backgroundColor: "#fff"
        backgroundColor: "#242424"
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }} //delay: 4,
      style={{
        position: "absolute",
        top: 0,
        left: 0,

        width: "100%",
        height: "auto",
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "#000"
      }}
    >
      <motion.div
        style={{
          marginBottom: "1em",
          backgroundColor: "#000",
          position: "fixed",
          width: "100%",
          height: "120px"
        }}
      ></motion.div>
      <Box mt={"140px"}>
        {<GeleStack dvWidth={dvWidth} data={data} loading={loading} />}
      </Box>
    </motion.div>
  );
};

export default Gele;
