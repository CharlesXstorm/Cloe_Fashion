import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import style from "./CatItem.module.css";

const CatItem = ({ src, srcbw, text, id, isEven }) => {
  console.log("rendering");
  return (
    <Stack
      // direction={"row"}
      sx={{
        flexDirection: { lg: "row" },
        gap: { lg: "40px", xs: "10px" },
        width: "100%",
        margin: "auto",
        marginTop: { lg: "60px" },
        justifyContent: `${isEven ? "flex-end" : "flex-start"}`
      }}
    >
      {isEven && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ paddingTop: "50px", width: "auto" }}
        >
          <Typography
            sx={{
              display: { lg: "block", xs: "none" },
              textAlign: "center",
              cursor: "pointer"
            }}
            fontFamily={"newyorkregular"}
            fontSize={"50px"}
          >
            {text}
          </Typography>
        </motion.div>
      )}
      <Box
        className={style.cont}
        sx={{
          position: "relative",
          width: { lg: "500px", xs: "100%" },
          height: "625px",
          overflow: "hidden"
        }}
      >
        <motion.div
          className={style.clipImg}
          initial={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" }}
          animate={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{
            // type: "spring",
            // stiffness: 400,
            duration: 1.5,
            delay: 2, //delay: 5.8,
            ease: "easeInOut"
          }}
          style={{ position: "inherit", overflow: "hidden", height: "inherit" }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            // animate={{ y: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{
              zIndex: "2",
              position: "absolute",
              top: "65%",
              left: "40px",
              paddingTop: "50px",
              width: "auto"
            }}
          >
            <Typography
              sx={{
                display: { lg: "none", xs: "block" },
                textAlign: "center",
                cursor: "pointer",
                color: "#fff"
              }}
              fontFamily={"newyorkregular"}
              fontSize={"50px"}
            >
              {text}
            </Typography>
          </motion.div>

          <div className={style.before}>
            <img src={srcbw} alt="img" width={"110%"} loading="lazy" />
          </div>

          {
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
              className={style.gele}
              style={{
                width: "100%",
                height: "625px",
                overflow: "hidden"
                // backgroundImage: `url(${src})`,
                // backgroundPosition: "center",
                // backgroundSize: "cover"
              }}
            >
              <img src={src} alt="img" width={"110%"} loading="lazy" />
            </motion.div>
          }
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
            className={style.gele}
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${src})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          ></motion.div> */}
        </motion.div>
      </Box>
      {!isEven && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ paddingTop: "50px", width: "auto" }}
        >
          <Typography
            sx={{
              display: { lg: "block", xs: "none" },
              textAlign: "center",
              cursor: "pointer"
            }}
            fontFamily={"newyorkregular"}
            fontSize={"50px"}
          >
            {text}
          </Typography>
        </motion.div>
      )}
    </Stack>
  );
};

export default CatItem;
