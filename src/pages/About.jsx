import React from "react";
import { motion } from "framer-motion";
import style from "../components/HomeInfo.module.css";
import { Stack, Box, Typography } from "@mui/material";
import hoverstyle from "../components/NavBar.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      className={style.clipPath}
      initial={{ clipPath: "circle(0% at 0% 0%)" }}
      animate={{
        clipPath: "circle(250% at 0% 0%)",
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

      <Stack
        sx={{
          alignItems: "center",
          marginTop: { lg: "200px", xs: "160px" },
          padding: { lg: "80px", xs: "20px" }
        }}
      >
        <Box>
          <Typography
            // lineHeight={"50px"}
            fontWeight={"100"}
            // fontSize={"20px"}
            sx={{
              fontSize: { lg: "20px", xs: "16px" },
              lineHeight: { lg: "50px", xs: "35px" },
              color: "#fff",
              textAlign: "center"
            }}
          >
            As a fashion agency originated from Lagos Nigeria, the company has
            opened more than 10+ production and support offices around the world
            in strategic countries. Today, after almost fifteen years, Cloe
            continues to act as a bridge and bodyguard for brands globally, with
            networks and techniques that are always original, unexpected,
            eclectic, rebellious, sophisticated and efficient. Cloe balances
            perfectly between the edge of commercial reality, security and
            contemporary culture. Linking brands to our international network of
            professional makers, suppliers, and or creatives in remote
            locations, giving access to the international marketplace more than
            ever before. These opened routes to the market creates employment
            and an opportunity to improve their livelihood and craftsmanship by
            supporting the brands’ vision to reach their goals.
          </Typography>
        </Box>
        <Link
          to="/contact"
          // mt={"80px"}
          className={hoverstyle.link}
          style={{
            // border: "2px solid red",
            marginTop: "40px",
            marginBottom: "80px",
            width: "120px",
            height: "50px",
            cursor: "pointer",
            border: "1px solid orange"
          }}
          // href="#1"
        >
          <Typography
            m="10px 6px 10px 6px"
            sx={{ textAlign: "center", fontWeight: "100" }}
            data-text="Get In Touch"
            className={hoverstyle.hover}
          >
            Get In Touch
          </Typography>
        </Link>
      </Stack>

      {
        //backdropstart
        <motion.div
          style={{
            marginBottom: "1em",
            backgroundColor: "#242424",
            position: "fixed",
            zIndex: "-2",
            left: "0px",
            top: "0px",
            bottom: "0px",
            right: "0px",
            height: "100vh"
            // width: "100%",
            // height: ""
          }}
        ></motion.div>
        //backdropends
      }

      <motion.div
        className={style.circleTrans}
        // style={{ zIndex: "4", position: "absolute" }}
        initial={{ originX: 0 }}
        exit={{ scale: 3000, top: 10, originX: 0 }}
        transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default About;
