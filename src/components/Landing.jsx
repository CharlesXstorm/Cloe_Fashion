import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CloeBack from "./CloeBack";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = ({ width, scale, setIsExploring, fill, setFill }) => {
  const [stroke, setStroke] = useState("#fff");

  // console.log(fill);
  return (
    <Stack
      position="fixed"
      bgcolor={"#000"}
      color={"#fff"}
      height={"100vh"}
      width={"100%"}
      m={"0px"}
      sx={{ overflow: "hidden", top: 0, left: 0 }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "0px",
          right: "0px",
          top: "0px",
          bottom: "0px",
          width: "100vw",
          overflow: "hidden",
          zIndex: "1"
        }}
      >
        <svg
          version="1.1"
          id="Layer_1"
          link="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="1280px" //
          height="812px"
          viewBox={`0 0 1280 812`}
          enableBackground={`new 0 0 1280 812`}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "0"
          }}
        >
          <g>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { duration: 4, delay: 4, ease: "easeInOut" }
              }}
              exit={{
                pathLength: 0,
                transition: { duration: 2, ease: "easeInOut" }
              }}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeMiterlimit="10"
              d="
		M1,771.903c15.679,1.83,31.316,4.639,47.044,5.292c37.066,1.541,73.364-4.333,108.964-14.316
		c49.56-13.898,96.879-33.082,140.505-60.797c26.79-17.02,50.053-38.187,71.327-61.464c24.583-26.898,48.302-54.585,72.496-81.842
		c2.038-2.295,4.962-3.781,7.221-5.912c1.306-1.231,2.566-2.862,3.064-4.546c8.997-30.445,16.725-61.319,27.005-91.321
		c25.601-74.713,53.708-148.518,85.874-220.686c22.398-50.251,44.719-100.575,68.826-150.012
		c13.668-28.027,30.872-54.328,46.478-81.411c0.735-1.277,1.408-2.592,2.11-3.888c20.332,0,40.662,0,60.993,0
		c-10.314,16.099-21.102,31.916-30.857,48.345c-34.907,58.782-62.602,121.064-88.082,184.354
		c-21.914,54.431-43.366,109.048-64.904,163.629c-5.729,14.518-11.144,29.162-16.427,43.848c-1.057,2.936-0.862,6.32-1.245,9.498
		c0.531,0.389,1.061,0.777,1.591,1.165c2.751-1.54,6.089-2.527,8.151-4.716c8.662-9.196,16.945-18.749,25.36-28.176
		c49.707-55.676,95.464-114.53,139.966-174.375c48.438-65.137,93.489-132.388,126.014-207.196
		c5.144-11.833,8.979-24.237,13.418-36.376c6.999,0,13.998,0,20.998,0c-7.638,35.022-20.816,67.999-37.35,99.656
		c-38.014,72.788-86.31,138.614-137.362,202.599c-42.911,53.782-88.315,105.378-134.931,155.942
		c-12.175,13.206-24.943,25.91-34.38,41.442c-14.364,23.642-22.925,49.358-28.379,76.303
		c-7.318,36.148-12.362,72.538-12.002,109.507c0.135,13.848,0.843,27.715,7.255,40.425c5.547,10.993,14.926,16.872,26.965,18.052
		c17.666,1.733,33.352-4.504,48.396-12.951c47.579-26.715,89.09-60.737,123.333-103.292c21.697-26.964,43.08-54.197,64.007-81.762
		c10.343-13.622,18.637-28.807,29.077-42.344c22.943-29.742,50.6-54.325,84.186-71.612c17.723-9.123,36.206-16.194,56.734-15.012
		c12.301,0.71,23.596,4.551,33.066,12.485c12.537,10.502,14.579,24.759,13.037,39.986c-0.384,3.795-1.142,7.557-1.811,11.318
		c-0.847,4.767-3.619,7.685-8.421,8.712c-4.442,0.95-5.887-0.501-5.956-5.184c-0.095-6.451,0.499-13.211-1.189-19.287
		c-6.119-22.019-27.837-37.53-56.258-26.719c-20.734,7.888-38.272,21.057-53.014,37.437c-44.354,49.28-66.282,107.31-65.824,173.613
		c0.103,14.846,2.192,29.541,7.617,43.563c9.793,25.314,30.138,36.842,57.043,32.541c25.702-4.11,46.398-17.607,65.182-34.586
		c24.918-22.524,41.722-50.782,55.92-80.739c16.546-34.908,28.437-71.337,34.482-109.556c4.562-28.845,5.998-57.661-2.419-86.141
		c-1.217-4.119-2.891-8.174-4.891-11.975c-8.043-15.29-20.561-22.97-38.115-22.2c-13.55,0.596-26.494,2.82-37.491,11.557
		c-0.777,0.618-1.623,1.316-2.545,1.551c-2.556,0.648-6.595,2.314-7.459,1.323c-1.759-2.02-2.915-5.746-2.378-8.37
		c1.866-9.111,7.328-16.351,14.269-22.298c12.387-10.615,27.484-14.63,43.205-16.48c17.191-2.023,33.809-0.16,49.479,8.083
		c20.247,10.652,30.298,28.31,34.798,49.75c5.926,28.229,3.955,56.464-2.254,84.278c-16.465,73.763-47.234,140.844-96.188,198.866
		c-25.067,29.71-54.488,54.25-90.648,69.706c-19.236,8.223-39.322,12.596-60.334,10.948c-32.943-2.582-58.634-23.738-67.361-55.616
		c-9.908-36.188-7.226-72.203,2.396-108.014c0.466-1.734,0.905-3.475,0.703-5.575c-6.49,8.404-12.925,16.852-19.481,25.205
		c-16.955,21.602-33.164,43.838-53.219,62.816c-33.5,31.699-70.845,57.322-114.871,72.225c-17.412,5.894-35.315,8.086-53.667,5.537
		c-26.431-3.672-43.667-18.614-53.649-42.965c-8.979-21.901-11.073-44.715-10.419-68.066c0.68-24.244,4.316-48.049,9.781-71.622
		c0.184-0.794,0.27-1.61-0.303-2.916c-1.037,1.281-2.113,2.534-3.104,3.851c-28.064,37.267-57.353,73.515-90.037,106.878
		c-43.245,44.146-95.137,74.404-153.061,94.969c-46.694,16.578-94.716,25.824-144.311,25.587
		c-15.602-0.075-31.192-2.182-46.79-3.342c-1.646-0.122-3.3-0.13-4.95-0.19C1,796.567,1,784.234,1,771.903z"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { duration: 4, delay: 4, ease: "easeInOut" }
              }}
              exit={{
                pathLength: 0,
                transition: { duration: 2, ease: "easeInOut" }
              }}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeMiterlimit="10"
              d="
		M855.893,1c-4.439,12.139-8.274,24.543-13.418,36.376c-32.524,74.808-77.576,142.059-126.014,207.196
		c-44.502,59.845-90.26,118.699-139.966,174.375c-8.416,9.427-16.699,18.979-25.36,28.176c-2.062,2.188-5.4,3.176-8.151,4.716
		c-0.53-0.388-1.061-0.776-1.591-1.165c0.382-3.178,0.188-6.563,1.245-9.498c5.284-14.686,10.698-29.33,16.427-43.848
		c21.539-54.581,42.99-109.198,64.904-163.629c25.48-63.29,53.175-125.572,88.082-184.354C721.806,32.916,732.593,17.099,742.907,1"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { duration: 4, delay: 4, ease: "easeInOut" }
              }}
              exit={{
                pathLength: 0,
                transition: { duration: 2, ease: "easeInOut" }
              }}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeMiterlimit="10"
              d="
		M1,175.978c3.333-2.678,6.727-5.285,9.989-8.046c55.006-46.547,116.106-82.197,185.297-103.22
		c43.355-13.174,87.796-19.351,133.054-17.497c24.698,1.012,49.61,1.723,73.53,9.65c8.796,2.916,17.112,6.362,23.873,13.525
		c7.188-8.675,12.682-17.894,16.317-28.139c3.905-11.005,10.137-20.116,19.942-26.697c8.749-5.871,18.147-8.133,28.473-5.564
		c9.55,2.375,14.36,10.225,11.571,19.746c-1.182,4.035-3.249,8.081-5.849,11.387c-30.631,38.928-59.546,79.083-80.457,124.147
		c-15.658,33.747-29.145,68.5-43.643,102.786c-1.287,3.044-2.527,6.226-4.448,8.862c-4.001,5.489-11.485,6.589-17.457,3.016
		c-5.143-3.076-6.318-7.968-3.377-14.854c13.185-30.87,26.853-61.545,39.405-92.67c4.991-12.377,8.725-25.54,10.939-38.696
		c3.715-22.08-7.052-39.602-27.743-48.131c-51.775-21.341-103.734-19.28-155.357,0.005c-41.4,15.465-77.137,40.385-109.801,69.728
		C67.102,189.592,33.112,227.674,3.307,269.454c-0.655,0.918-1.533,1.678-2.307,2.512C1,239.97,1,207.974,1,175.978z"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                transition: { duration: 3, delay: 4, ease: "easeInOut" }
              }}
              exit={{
                pathLength: 0,
                transition: { duration: 1, ease: "easeInOut" }
              }}
              fillRule="evenodd"
              clipRule="evenodd"
              fill="none"
              stroke={stroke}
              strokeWidth="2"
              strokeMiterlimit="10"
              d="
		M1115.145,592.923c-13.172-11.176-12.257-20.614,2.667-29.12c3.023-1.724,6.14-3.556,9.453-4.446
		c6.23-1.673,10.041-5.602,13.358-10.915c18.77-30.071,37.521-60.161,56.779-89.92c18.185-28.099,39.555-53.581,65.465-74.97
		c5.201-4.294,11.158-7.673,17.572-12.02c0.191,2.511,0.385,3.893,0.387,5.275c0.021,17.497,0.146,34.997-0.129,52.49
		c-0.042,2.636-1.395,5.77-3.157,7.78c-29.713,33.88-56.985,69.493-78.566,109.212c-1.077,1.985-1.972,4.069-2.603,6.636
		c27.519-12.046,58.613-14.12,84.222-32.448c0,9.248,0,17.66,0,26.246c-12.136,3.418-24.422,6.399-36.384,10.362
		c-17.652,5.848-35.104,12.309-52.577,18.684c-6.775,2.472-11.654,7.004-15.146,13.6c-12.399,23.424-24.283,47.042-29.992,73.155
		c-3.408,15.597-4.327,31.334-0.361,47.039c5.837,23.112,21.089,35.264,44.336,38.386c30.513,4.1,59.729,0.085,87.543-13.345
		c0.715-0.346,1.479-0.592,2.822-1.121c0,6.426,0.277,12.382-0.191,18.28c-0.119,1.503-2.355,3.311-4.033,4.148
		c-19.877,9.915-40.975,15.718-63.047,17.802c-21.178,2-42.218,1.327-63.051-3.646c-35.104-8.377-53.313-33.114-58.596-65.541
		c-4.781-29.357,2.045-57.25,12.264-84.515C1107.607,610.862,1111.501,601.886,1115.145,592.923z"
            />
          </g>
        </svg>
      </Box>
      <Box
        className={style.box}
        sx={{
          position: "absolute",
          zIndex: 1,
          top: { lg: "70vh", xs: "50vh" },
          left: { lg: "15em", xs: "4em" }
        }}
        onClick={() => {
          // setIsExploring(true);
          setFill("orange");
          setStroke("orange");
        }}
      >
        <motion.div
          // className={style.div}
          whileHover={{
            backgroundColor: "#000",
            color: "#000",
            scale: 1.1,
            cursor: "pointer",
            transition: {
              type: "spring",
              stiffness: 500,
              ease: "easeInOut"
            }
          }}
          style={{
            padding: "1em",
            borderRadius: "10px",
            border: "2px solid #fff",
            justifyContent: "center",
            backdropFilter: "blur(12px)",
            cursor: "pointer"
            // "&:hover": { border: "2px solid #000" }
            // backgroundColor: `${stroke === "#fff" ? "transparent" : stroke}`
          }}
        >
          <Link
            className={style.link}
            to="/explore"
            // className={style.link}
            style={{ textDecoration: "none" }}
          >
            <Typography
              className={style.typo}
              fontFamily={"newyorkregular"}
              fontSize={"25px"}
              // sx={{ "&:hover": { color: "#000" } }}
            >
              Explore
            </Typography>
          </Link>
        </motion.div>
      </Box>
      <motion.div
        className={style.circleTrans}
        initial={{ originX: 0 }}
        exit={{ scale: 3000, top: 10, originX: 0 }}
        transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
      ></motion.div>
      <CloeBack width={width} />
    </Stack>
  );
};

export default Landing;
