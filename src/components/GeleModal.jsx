import React from "react";
import { Stack, Box, Skeleton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import style from "./CatItem.module.css";

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

const GeleModal = ({ src, srcbw, loading, index, dvWidth }) => {
  //   console.log(src);
  return (
    <Stack
      sx={{
        gap: { lg: "40px", xs: "10px" },
        width: { lg: "400px", xs: dvWidth > 800 ? "400px" : "100%" },
        height: "624px",
        overflow: "hidden",
        margin: "auto",
        marginBottom: { lg: "", xs: "40px" },
        justifyContent: `center`
      }}
    >
      {/* <motion.div
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
            
          />
        )}
      </motion.div> */}

      {
        //start
        <motion.div
          className={style.cont}
          style={{
            position: "relative",
            width: { lg: "500px", xs: "100%" },
            height: "625px",
            overflow: "hidden",
            borderLeft: `${dvWidth < 800 ? "2px solid orange" : ""}`,
            borderRight: `${dvWidth < 800 ? "2px solid orange" : ""}`
          }}
        >
          {loading === true ? (
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height="550px"
              animation="wave"
            />
          ) : (
            <Box>
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
                    // display: { lg: "none", xs: "block" },
                    textAlign: "center",
                    cursor: "pointer",
                    color: "#fff"
                  }}
                  fontFamily={"newyorkregular"}
                  fontSize={"50px"}
                >
                  Style {index + 1}
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
                  }}
                >
                  <img src={src} alt="img" width={"110%"} loading="lazy" />
                </motion.div>
              }
            </Box>
          )}
        </motion.div>
        //end
      }

      {/* {dvWidth >= 800 ? (
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
      ) : (
        ""
      )} */}
    </Stack>
  );
};

export default GeleModal;
