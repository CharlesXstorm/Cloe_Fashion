import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import style from "./CatItem.module.css";
import { Link } from "react-router-dom";

const CatItem = ({ src, srcbw, text, id, isEven, dvWidth }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // console.log(dvWidth);
  const animate = () => {
    setIsAnimating(true);
  };

  const animateOut = () => {
    setIsAnimating(false);
  };

  return (
    <Stack
      sx={{
        flexDirection: { lg: "row" },
        gap: { lg: "40px", xs: "10px" },
        width: "100%",
        height: "624px",
        overflow: "hidden",
        margin: "auto",
        marginTop: "60px",
        justifyContent: `${isEven ? "flex-end" : "flex-start"}`
      }}
    >
      {
        //hover sign starts
        <Stack
          className={style.stylecont}
          sx={{
            flexDirection: "row",
            gap: "100px",

            display: { lg: "flex", xs: "none" }
          }}
        >
          <AnimatePresence mode="wait">
            {isEven && isAnimating && (
              <motion.div
                className={style.sign}
                style={{
                  paddingTop: "50px",
                  width: "auto"
                }}
              >
                {
                  <svg
                    // style={{ transform: "scale(0.5)" }}
                    version="1.1"
                    id="fashion"
                    x="0px"
                    y="0px"
                    width={dvWidth > 800 ? "400px" : "200px"}
                    height={dvWidth > 800 ? "300px" : "100px"}
                    viewBox="0 0 2000 1000"
                    enableBackground="new 0 0 2000 1000"
                    space="preserve"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1248.354,421.456c-2.239-0.458-4.082,0.275-6.026,1.456c-15.069,9.151-30.496,17.649-46.981,24.006
           c-12.678,4.888-25.63,8.253-39.488,6.597c-8.102-0.968-14.422-7.67-15.51-17.059c-1.385-11.96,0.481-23.725,2.056-35.492
           c1.496-11.188,3.286-22.337,4.966-33.5c1.223-8.122,2.108-16.275,1.964-24.497c-0.059-3.322-0.85-6.448-2.348-9.557
           c-1.442-2.993-3.407-2.941-5.591-1.884c-3.891,1.886-7.215,4.637-10.021,7.945c-12.341,14.544-22.675,30.517-32.994,46.494
           c-21.374,33.092-40.798,67.416-63.03,99.962c-7.509,10.992-14.878,22.107-24.406,31.577c-2.008,1.995-4.292,3.513-6.615,4.842
           c-3.753,2.147-7.281-0.362-7.442-4.902c-0.292-8.27,1.929-16.261,4.201-23.937c6.656-22.485,14.509-44.604,22.81-66.546
           c11.104-29.353,22.206-58.708,33.514-87.982c9.84-25.475,19.941-50.849,29.969-76.25c13.547-34.314,26.857-68.716,38.467-103.747
           c1.334-4.027,2.099-8.255,3.596-12.213c1.466-3.876,0.653-7.527-0.073-11.276"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M345.966,207.983c-8.567-0.207-17.02,0.684-25.521,1.817c-5.802,0.773-11.669,1.209-17.479,2.145
           c-9.144,1.473-18.397,2.337-27.474,4.123c-13.563,2.668-27.07,5.684-40.5,8.965c-22.616,5.525-44.939,12.137-66.467,21.034
           c-17.469,7.219-34.615,15.166-50.072,26.352c-8.846,6.401-16.847,13.493-21.397,23.58c-6.148,13.633-2.911,24.856,9.411,32.516
           c5.773,3.588,12.358,5.268,18.277,8.453"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M923.894,449.953c-5.541-1.236-9.934,2.292-14.417,4.19c-21.074,8.923-41.992,18.274-62.045,29.355
           c-17.219,9.516-34.374,19.209-49.476,32c-2.496,2.113-4.831,4.472-6.644,7.384c-1.622,2.604-3.298,5.004-1.853,8.038
           c1.548,3.25,4.896,3.7,7.957,3.964c6.533,0.563,12.874-1.023,18.969-3.013c24.914-8.129,47.294-21.001,68.029-36.907
           c13.215-10.137,25.532-21.128,34.992-35.006c2.125-3.116,5.098-5.778,5.012-10.006c-0.007-0.33,0.254-0.713,0.485-0.993
           c8.032-9.731,8.629-26.011,1.517-36.519c-5.218-7.71-13.284-9.323-21.529-9.894c-18.3-1.267-35.954,3.179-53.446,7.575
           c-13.011,3.269-25.948,6.995-39.09,9.561c-5.839,1.14-12.215,3.021-18.497-0.118c-4.346-2.172-6.304-4.913-5.203-9.607
           c2.985-12.724,9.761-23.409,17.734-33.51c10.497-13.3,22.145-25.504,35.062-36.426c10.941-9.25,22.274-18.014,35.42-24.113
           c2.815-1.306,5.722-0.915,8.547-1.295c3.207-0.432,4.814,2.62,4.508,6.859c-0.466,6.471-3.904,11.655-7.026,16.997
           c-6.981,11.944-14.977,23.26-21.584,35.448c-3.443,6.353-6.282,12.69-6.163,20.044"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M531.943,419.957c-5.276-2.262-10.204,0.565-14.948,1.706c-17.023,4.095-34.225,7.013-51.55,9.243
           c-17.302,2.227-34.638,4.229-51.994,5.98c-10.295,1.039-20.652,1.506-30.99,2.048c-27.311,1.432-54.651,2.015-81.986,1.396
           c-10.829-0.245-21.683-1.081-32.511-1.653c-16.127-0.852-32-3.45-48.01-4.927c-4.038-0.373-6.623-3.55-11.002-3.104
           c-3.511,0.358-7.377-1.833-10.947-3.242c-4.104-1.62-8.163-3.318-11.56-6.403c-5.35-4.857-6.315-8.508-3.391-13
           c3.33-5.114,10.607-6.474,15.849-2.438c8.083,6.224,13.524,14.368,14.58,24.891"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1441.829,427.456c-4.545,5.139-5.324,11.961-6.707,18.063c-2.549,11.245-4.943,22.727-4.23,34.426
           c0.355,5.834,1.072,11.72,3.959,16.991c3.134,5.721,9.684,8.679,16.479,8.043c12.111-1.132,22.214-6.527,31.516-14.004
           c15.739-12.651,28.442-27.991,38.836-45.104c7.625-12.555,14.229-25.713,18.76-39.872c3.204-10.014,5.615-20.068,4.776-30.528
           c-0.983-12.257-5.335-19.362-16.427-21.887c-8.354-1.902-16.903-0.518-24.92,2.037c-7.499,2.39-14.837,5.442-21.637,9.702
           c-2.348,1.471-5.038,3.361-8.431,2.764c-0.856-0.151-2.198,1.026-2.942,1.908c-3.959,4.697-8.561,8.798-12.747,13.268
           c-3.813,4.068-8.947,6.836-12.371,11.638c-4.667,6.548-8.936,13.061-8.428,21.559c0.065,1.093-0.115,2.179-0.986,2.999
           c-21.567,20.284-44.424,39.005-70.07,53.857c-21.172,12.261-43.401,22.705-67.459,27.915c-12.869,2.787-26.151,4.34-39.458,1.26
           c-16.896-3.912-22.344-14.456-22.967-28.04c-0.73-15.96,5.148-30.345,10.207-45.087c2.916-8.5,8.729-15.184,11.77-23.404"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1932.268,418.457c-7.378,7.858-16.686,12.938-26.001,17.991c-23.245,12.609-47.948,21.621-73.536,27.796
           c-16.786,4.05-34.079,6.203-51.434,3.147c-8.312-1.463-16.358-3.872-20.995-11.946c-3.286-5.72-4.301-12.158-3.884-18.482
           c1.025-15.555,5.961-30.387,9.344-45.508c1.507-6.734,3.142-13.467,2.555-20.494c-0.354-4.22-2.352-6.295-6.527-6.507
           c-10.865-0.55-19.488,4.56-27.479,11.032c-14.801,11.991-25.814,27.357-36.946,42.521c-15.268,20.799-29.964,42.017-45.116,62.902
           c-5.201,7.168-10.702,14.324-18.015,19.436c-8.565,5.987-13.884,2.579-16.311-5.93c-1.374-4.816-0.733-9.935-0.166-14.971
           c2.094-18.553,7.632-36.25,13.026-53.995c0.485-1.6,0.945-3.086,0.723-5.016c-0.316-2.73,2.479-4.725,3.41-7.438
           c9.715-28.284,20.156-56.304,31.363-84.036c0.174-0.43,0.021-0.991,0.021-1.491"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M356.965,163.988c-1.376,13.642-4.733,26.839-8.417,40.018c-5.063,18.117-10.819,36.001-17.122,53.705
           c-9.839,27.637-19.68,55.279-30.026,82.728c-11.853,31.447-24.239,62.693-36.501,93.985c-0.429,1.095-0.177,2.043-0.422,3.03"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1006.384,804.908c-3.315-1.086-6.365,0.474-9.495,1.024c-41.554,7.311-81.773,19.479-121.489,33.47
           c-29.092,10.25-57.887,21.247-85.992,33.991c-0.478,0.216-0.985,0.418-1.499,0.493c-5.05,0.745-7.096,4.139-9.779,8.331
           c-6.688,10.45-14.342,20.479-26.712,25.183c-6.811,2.588-13.402,2.061-18.25-1.699c3.267-5.027,8.385-7.826,13.276-10.76
           c9.34-5.604,19.024-10.587,28.987-15.004c0.702-0.312,1.649-1.274,2.482-0.039"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M789.911,417.957c-8.499,4-16.823,8.439-25.533,11.908c-18.839,7.501-37.504,15.721-57.958,18.071
           c-6.173,0.709-12.293,1.004-18.516-0.394c-8.782-1.973-13.594-7.618-16.787-15.563c-3.959-9.855-4.218-20.193-4.658-30.521
           c-0.333-7.825-0.264-15.667-0.562-23.495c-0.28-7.355-4.717-10.092-11.99-8.599c-8.565,1.758-14.595,7.59-21.477,12.097"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M864.401,680.424c0.275-2.88-0.586-5.271-3.157-7.288c-4.167,1.213-5.568,5.257-6.663,8.352
           c-6.202,17.534-11.883,35.252-17.665,52.934c-5.717,17.481-11.242,35.024-17.036,52.48c-6.448,19.428-13.179,38.752-21.43,57.52
           c-4.117,9.365-8.98,18.343-13.598,27.448c-0.371,0.731-0.34,1.347-0.44,2.03"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1133.367,807.908c-4.297-0.818-7.39,2.241-10.964,3.589c-9.938,3.746-19.704,7.849-30.528,8.444
           c-10.657,0.587-14.037-5.819-15.604-13.011c-1.422-6.526-0.575-13.021-0.871-19.521c-0.126-2.778,0.047-5.896-2.585-7.392
           c-2.857-1.623-5.703-0.488-8.477,1.335c-7.38,4.851-14.109,10.476-20.439,16.577c-9.077,8.751-18.022,17.639-27.014,26.479
           c-3.435,3.377-7.132,6.434-11.522,8.449c-2.379,1.093-5.426,1.435-7.351-0.111c-1.902-1.527-2.458-4.264-0.713-6.898
           c0.501-0.757,0.594-1.961,0.984-2.98c7.328-19.138,20.216-33.465,37.62-43.92c1.838-1.104,3.907-2.09,5.989-2.469
           c8.871-1.615,10.2-0.576,14.986,8.432"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1208.858,841.903c-5.599,3.053-10.147,7.546-14.897,11.617c-14.507,12.429-28.808,25.148-41.055,39.911
           c-3.976,4.79-7.999,9.569-9.635,15.938c-1.194,4.651-0.145,6.948,4.588,8.052c6.303,1.471,12.137-0.014,17.475-3.078
           c24.216-13.905,39.444-34.51,44.842-61.978c0.597-3.039,1.689-6.559-0.18-10.037c-0.971-1.806,1.329-2.865,2.825-3.974
           c6.583-4.887,12.745-10.397,19.603-14.844c9.968-6.463,19.293-14.036,30.428-18.604"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M630.431,383.461c-10.702,7.679-20.007,16.968-29.438,26.057c-16.374,15.78-32.237,32.091-48.615,47.868
           c-8.07,7.773-16.794,14.908-27.939,18.042c-7.194,2.024-11.975-1.743-11.692-8.985c0.343-8.792,3.819-16.378,7.33-23.928
           c3.642-7.832,8.569-15.068,13.111-22.407c3.225-5.212,7.743-9.833,11.806-14.606c11.102-13.04,23.38-24.87,37.976-33.989
           c8.804-5.5,18.28-9.051,28.964-9.176c5.211-0.061,9.13,1.764,11.919,5.683c3.022,4.247,5.451,8.921,8.009,13.481
           c0.205,0.365-0.595,1.293-0.929,1.96"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1431.83,820.906c-5.474-0.193-9.838,3.08-14.432,5.146c-15.459,6.954-30.784,14.234-44.623,24.264
           c-2.936,2.127-5.322,4.696-7.915,7.108c-1.246,1.158-2.266,3.017-1.383,4.387c0.783,1.214,2.323,2.151,4.358,2.192
           c4.425,0.089,8.512-1.074,12.487-2.636c19.471-7.653,36.688-18.524,49.484-35.48c3.544-4.695,5.948-9.827,6.089-15.979
           c0.197-8.495-4.783-12.938-14.067-13.471c-11.71-0.672-22.813,2.938-33.945,5.664c-5.335,1.307-10.795,2.139-16.059,3.766
           c-0.912,0.282-2.21,0.418-2.952-0.019c-6.574-3.868-12.181,0.571-18.014,2.133c-12.175,3.262-24.469,5.737-37.019,6.887
           c-1.307,0.119-2.663-0.295-3.995-0.462"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M216.982,434.455c-1.277,5.823,1.123,11.326,1.655,16.983c1.668,17.704,1.244,35.309,0.009,53.019
           c-0.901,12.905-2.593,25.678-4.173,38.482c-0.56,4.536-2.263,9.097,0.509,13.5"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M262.477,439.954c-1.276,7.28-4.975,13.682-7.577,20.467c-11.654,30.398-23.597,60.684-35.352,91.043
           c-0.29,0.748-0.448,1.463-1.068,1.972c-6.318,5.188-6.13,13.2-8.366,20.044c-5.24,16.031-9.8,32.284-14.621,48.452
           c-0.392,1.316-1.292,2.883-0.91,3.964c3.078,8.705-1.997,16.123-3.717,24.005c-1.411,6.461-3.731,12.743-5.952,18.998
           c-0.885,2.494-1.615,5.67-5.426,5.525"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1398.334,792.41c-3.05-2.167-0.776-4.503,0.07-6.47c3.145-7.306,7.651-13.851,11.874-20.562c2.448-3.894,5.457-7.789,4.109-12.758
           c-5.495-2.667-9.858,0.981-13.411,3.495c-13.102,9.27-24.795,20.212-33.571,33.838c-2.563,3.98-4.698,8.373-4.066,13.454"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1630.805,419.457c-3.787-0.844-7.146,0.928-10.472,2.075c-19.396,6.686-39.374,11.004-59.545,14.264
           c-9.882,1.597-19.88,3.097-29.971,3.135c-1.333,0.005-2.666-0.31-3.999-0.477"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M449.453,231.48c-1.619-8.106-7.873-11.742-14.5-14.993c-8.681-4.259-17.928-6.25-27.479-7.613
           c-14.124-2.015-28.273-2.795-42.509-2.964c-5.36-0.063-10.61,2.197-15.999,0.574"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1025.381,418.457c-3.114-1.912-6.145-0.043-8.974,0.61c-28.315,6.535-56.091,14.852-83.047,25.807
           c-1.079,0.438-2.634,1.553-3.967,0.08"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1264.852,809.907c-3.505,10.224-6.764,20.507-3.971,31.488c1.64,6.447,4.942,8.279,11.475,7.031
           c4.86-0.929,9.233-2.884,12.972-6.049c8.593-7.273,16.353-15.287,21.519-25.472"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1523.318,440.954c-1.832-1.338-3.951-0.982-5.999-0.996c-16.036-0.107-32.102,0.693-48.004-2.457
           c-8.825-1.748-17.328-4.19-24.979-9.061c-1.527-0.973-3.039-1.988-3.531-3.979c-0.53-2.147-2.144-3.45-3.977-4.505"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1194.859,787.41c-6.194,1.228-10.648,5.612-15.416,9.11c-15.558,11.415-30.564,23.584-46.609,34.335
           c-3.539,2.371-7.264,4.822-12.165,4.522c-0.498-2.707-0.404-4.817,0.678-6.984c8.072-16.173,18.968-29.861,34.53-39.463
           c1.068-0.659,2.364-0.938,3.48-1.534c6.789-3.624,14.417-1.158,14.559,8.512c0.017,1.09,0.779,2.168,1.196,3.251"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1264.852,806.408c0.98,3.896,4.384,4.832,7.508,5.976c7.089,2.596,14.585,2.809,21.988,3.517c3.656,0.351,7.352-0.559,11.01,0.466
           c1.725,0.482,3.386-0.601,3.911-1.988c3.417-9.021,8.443-17.597,9.01-27.472c0.688-11.994-4.951-18.195-18.443-15.044
           c-3.864,0.903-7.535,2.148-10.978,4.067c-1.89,1.052-3.808,1.784-6.009,1.481"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1283.349,328.468c1.418,2.808-0.205,5.232-2.081,6.365c-4.619,2.792-4.332,7.578-5.278,11.665c-1.179,5.087,1.48,7.192,6.345,5.426
           c8.007-2.907,14.304-8.214,20.108-14.366c2.519-2.67,3.236-5.272,2.796-8.541c-5.097-2.96-9.479-0.455-13.882,1.472
           c-2.415,1.056-4.851,1.765-7.508,1.479"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1215.357,772.412c-6.731,2.689-12.447,6.946-17.45,12.045c-5.546,5.655-5.441,18.343-0.021,26.432
           c2.298,3.428,4.201,7.15,6.605,10.419c3.939,5.355,4.471,11.788,6.865,17.597"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M193.985,625.931c-2.6,1.448-4.13,3.678-5.016,6.494c-3.46,11.011-7.271,21.923-10.321,33.045c-1.021,3.72-0.161,7.955-0.161,11.954
           "
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1484.323,803.908c-15.951,3.162-31.498,7.661-46.506,13.97c-0.909,0.383-1.987,0.361-2.987,0.528"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1456.327,385.96c0.881,2.087,0.57,4.036-0.485,6.007c-4.656,8.704-8.703,17.682-12.031,26.982c-0.594,1.66-1.809,2.846-3.481,3.506
           "
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1128.868,137.492c-3.264-0.274-3.962,2.149-5.046,4.478c-2.519,5.402-5.387,10.641-7.857,16.063
           c-0.427,0.94-1.334,0.717-1.595,1.457"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1271.85,789.41c0.904,4.882-3.49,8.021-4.2,12.466c-0.185,1.158-0.55,3.636-3.208,4.124c-2.09-2.115-1.429-4.545-0.61-7.098
           c1.83-5.713,6.399-9.133,10.487-13.025c3.948-3.758,8.198-7.318,10.53-12.465"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{
                        pathLength: 0,
                        transition: { delay: 0.5, duration: 1 }
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="
           M1480.324,352.465c1.355,3.008-0.687,4.623-2.459,6.537c-2.212,2.389-5.688,4.226-4.54,8.461"
                    />
                  </svg>
                }
              </motion.div>
            )}
          </AnimatePresence>
          {isEven && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{
                paddingTop: "50px",
                width: "auto"
              }}
            >
              <Typography
                onMouseOver={animate}
                onMouseOut={animateOut}
                sx={{
                  display: { lg: "block", xs: "none" },
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
          )}
        </Stack> //hover sign ends
      }

      {
        //Hero Image Starts
        <Link
          onMouseOver={animate}
          onMouseOut={animateOut}
          to={id === 1 ? "./gele" : "#"}
          style={{
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "orange",
            width: "auto",
            height: "625px"
          }}
        >
          <Box
            className={style.cont}
            sx={{
              position: "relative",
              width: { lg: "500px", xs: "100%" },
              height: "625px",
              overflow: "hidden",
              borderLeft: "2px solid orange",
              borderRight: "2px solid orange"
            }}
          >
            <motion.div
              className={style.clipImg}
              initial={{
                clipPath: "polygon(30% 0, 70% 0, 70% 100%, 30% 100%)"
              }}
              animate={{
                clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)"
              }}
              transition={{
                duration: 0.5,
                // delay: 1,
                ease: "easeInOut"
              }}
              style={{
                position: "inherit",
                overflow: "hidden",
                height: "inherit"
              }}
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
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

              <motion.div className={style.before}>
                <img src={srcbw} alt="img" width={"110%"} loading="lazy" />
              </motion.div>

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
            </motion.div>
          </Box>
        </Link> //Hero Image ends
      }

      <Stack
        className={style.stylecont}
        sx={{
          flexDirection: "row",
          gap: "100px",

          display: { lg: "flex", xs: "none" }
        }}
      >
        {!isEven && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ paddingTop: "50px", width: "auto" }}
          >
            <Typography
              onMouseOver={animate}
              onMouseOut={animateOut}
              sx={{
                display: { lg: "block", xs: "none" },
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
        )}
        <AnimatePresence mode="wait">
          {!isEven && isAnimating && (
            <motion.div
              className={style.sign}
              style={{
                paddingTop: "50px",
                width: "auto"
              }}
            >
              {
                <svg
                  // style={{ transform: "scale(0.5)" }}
                  version="1.1"
                  id="fashion"
                  x="0px"
                  y="0px"
                  width={dvWidth > 800 ? "400px" : "200px"}
                  height={dvWidth > 800 ? "300px" : "100px"}
                  viewBox="0 0 2000 1000"
                  enable-background="new 0 0 2000 1000"
                  space="preserve"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1248.354,421.456c-2.239-0.458-4.082,0.275-6.026,1.456c-15.069,9.151-30.496,17.649-46.981,24.006
           c-12.678,4.888-25.63,8.253-39.488,6.597c-8.102-0.968-14.422-7.67-15.51-17.059c-1.385-11.96,0.481-23.725,2.056-35.492
           c1.496-11.188,3.286-22.337,4.966-33.5c1.223-8.122,2.108-16.275,1.964-24.497c-0.059-3.322-0.85-6.448-2.348-9.557
           c-1.442-2.993-3.407-2.941-5.591-1.884c-3.891,1.886-7.215,4.637-10.021,7.945c-12.341,14.544-22.675,30.517-32.994,46.494
           c-21.374,33.092-40.798,67.416-63.03,99.962c-7.509,10.992-14.878,22.107-24.406,31.577c-2.008,1.995-4.292,3.513-6.615,4.842
           c-3.753,2.147-7.281-0.362-7.442-4.902c-0.292-8.27,1.929-16.261,4.201-23.937c6.656-22.485,14.509-44.604,22.81-66.546
           c11.104-29.353,22.206-58.708,33.514-87.982c9.84-25.475,19.941-50.849,29.969-76.25c13.547-34.314,26.857-68.716,38.467-103.747
           c1.334-4.027,2.099-8.255,3.596-12.213c1.466-3.876,0.653-7.527-0.073-11.276"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M345.966,207.983c-8.567-0.207-17.02,0.684-25.521,1.817c-5.802,0.773-11.669,1.209-17.479,2.145
           c-9.144,1.473-18.397,2.337-27.474,4.123c-13.563,2.668-27.07,5.684-40.5,8.965c-22.616,5.525-44.939,12.137-66.467,21.034
           c-17.469,7.219-34.615,15.166-50.072,26.352c-8.846,6.401-16.847,13.493-21.397,23.58c-6.148,13.633-2.911,24.856,9.411,32.516
           c5.773,3.588,12.358,5.268,18.277,8.453"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M923.894,449.953c-5.541-1.236-9.934,2.292-14.417,4.19c-21.074,8.923-41.992,18.274-62.045,29.355
           c-17.219,9.516-34.374,19.209-49.476,32c-2.496,2.113-4.831,4.472-6.644,7.384c-1.622,2.604-3.298,5.004-1.853,8.038
           c1.548,3.25,4.896,3.7,7.957,3.964c6.533,0.563,12.874-1.023,18.969-3.013c24.914-8.129,47.294-21.001,68.029-36.907
           c13.215-10.137,25.532-21.128,34.992-35.006c2.125-3.116,5.098-5.778,5.012-10.006c-0.007-0.33,0.254-0.713,0.485-0.993
           c8.032-9.731,8.629-26.011,1.517-36.519c-5.218-7.71-13.284-9.323-21.529-9.894c-18.3-1.267-35.954,3.179-53.446,7.575
           c-13.011,3.269-25.948,6.995-39.09,9.561c-5.839,1.14-12.215,3.021-18.497-0.118c-4.346-2.172-6.304-4.913-5.203-9.607
           c2.985-12.724,9.761-23.409,17.734-33.51c10.497-13.3,22.145-25.504,35.062-36.426c10.941-9.25,22.274-18.014,35.42-24.113
           c2.815-1.306,5.722-0.915,8.547-1.295c3.207-0.432,4.814,2.62,4.508,6.859c-0.466,6.471-3.904,11.655-7.026,16.997
           c-6.981,11.944-14.977,23.26-21.584,35.448c-3.443,6.353-6.282,12.69-6.163,20.044"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M531.943,419.957c-5.276-2.262-10.204,0.565-14.948,1.706c-17.023,4.095-34.225,7.013-51.55,9.243
           c-17.302,2.227-34.638,4.229-51.994,5.98c-10.295,1.039-20.652,1.506-30.99,2.048c-27.311,1.432-54.651,2.015-81.986,1.396
           c-10.829-0.245-21.683-1.081-32.511-1.653c-16.127-0.852-32-3.45-48.01-4.927c-4.038-0.373-6.623-3.55-11.002-3.104
           c-3.511,0.358-7.377-1.833-10.947-3.242c-4.104-1.62-8.163-3.318-11.56-6.403c-5.35-4.857-6.315-8.508-3.391-13
           c3.33-5.114,10.607-6.474,15.849-2.438c8.083,6.224,13.524,14.368,14.58,24.891"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1441.829,427.456c-4.545,5.139-5.324,11.961-6.707,18.063c-2.549,11.245-4.943,22.727-4.23,34.426
           c0.355,5.834,1.072,11.72,3.959,16.991c3.134,5.721,9.684,8.679,16.479,8.043c12.111-1.132,22.214-6.527,31.516-14.004
           c15.739-12.651,28.442-27.991,38.836-45.104c7.625-12.555,14.229-25.713,18.76-39.872c3.204-10.014,5.615-20.068,4.776-30.528
           c-0.983-12.257-5.335-19.362-16.427-21.887c-8.354-1.902-16.903-0.518-24.92,2.037c-7.499,2.39-14.837,5.442-21.637,9.702
           c-2.348,1.471-5.038,3.361-8.431,2.764c-0.856-0.151-2.198,1.026-2.942,1.908c-3.959,4.697-8.561,8.798-12.747,13.268
           c-3.813,4.068-8.947,6.836-12.371,11.638c-4.667,6.548-8.936,13.061-8.428,21.559c0.065,1.093-0.115,2.179-0.986,2.999
           c-21.567,20.284-44.424,39.005-70.07,53.857c-21.172,12.261-43.401,22.705-67.459,27.915c-12.869,2.787-26.151,4.34-39.458,1.26
           c-16.896-3.912-22.344-14.456-22.967-28.04c-0.73-15.96,5.148-30.345,10.207-45.087c2.916-8.5,8.729-15.184,11.77-23.404"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1932.268,418.457c-7.378,7.858-16.686,12.938-26.001,17.991c-23.245,12.609-47.948,21.621-73.536,27.796
           c-16.786,4.05-34.079,6.203-51.434,3.147c-8.312-1.463-16.358-3.872-20.995-11.946c-3.286-5.72-4.301-12.158-3.884-18.482
           c1.025-15.555,5.961-30.387,9.344-45.508c1.507-6.734,3.142-13.467,2.555-20.494c-0.354-4.22-2.352-6.295-6.527-6.507
           c-10.865-0.55-19.488,4.56-27.479,11.032c-14.801,11.991-25.814,27.357-36.946,42.521c-15.268,20.799-29.964,42.017-45.116,62.902
           c-5.201,7.168-10.702,14.324-18.015,19.436c-8.565,5.987-13.884,2.579-16.311-5.93c-1.374-4.816-0.733-9.935-0.166-14.971
           c2.094-18.553,7.632-36.25,13.026-53.995c0.485-1.6,0.945-3.086,0.723-5.016c-0.316-2.73,2.479-4.725,3.41-7.438
           c9.715-28.284,20.156-56.304,31.363-84.036c0.174-0.43,0.021-0.991,0.021-1.491"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M356.965,163.988c-1.376,13.642-4.733,26.839-8.417,40.018c-5.063,18.117-10.819,36.001-17.122,53.705
           c-9.839,27.637-19.68,55.279-30.026,82.728c-11.853,31.447-24.239,62.693-36.501,93.985c-0.429,1.095-0.177,2.043-0.422,3.03"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1006.384,804.908c-3.315-1.086-6.365,0.474-9.495,1.024c-41.554,7.311-81.773,19.479-121.489,33.47
           c-29.092,10.25-57.887,21.247-85.992,33.991c-0.478,0.216-0.985,0.418-1.499,0.493c-5.05,0.745-7.096,4.139-9.779,8.331
           c-6.688,10.45-14.342,20.479-26.712,25.183c-6.811,2.588-13.402,2.061-18.25-1.699c3.267-5.027,8.385-7.826,13.276-10.76
           c9.34-5.604,19.024-10.587,28.987-15.004c0.702-0.312,1.649-1.274,2.482-0.039"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M789.911,417.957c-8.499,4-16.823,8.439-25.533,11.908c-18.839,7.501-37.504,15.721-57.958,18.071
           c-6.173,0.709-12.293,1.004-18.516-0.394c-8.782-1.973-13.594-7.618-16.787-15.563c-3.959-9.855-4.218-20.193-4.658-30.521
           c-0.333-7.825-0.264-15.667-0.562-23.495c-0.28-7.355-4.717-10.092-11.99-8.599c-8.565,1.758-14.595,7.59-21.477,12.097"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M864.401,680.424c0.275-2.88-0.586-5.271-3.157-7.288c-4.167,1.213-5.568,5.257-6.663,8.352
           c-6.202,17.534-11.883,35.252-17.665,52.934c-5.717,17.481-11.242,35.024-17.036,52.48c-6.448,19.428-13.179,38.752-21.43,57.52
           c-4.117,9.365-8.98,18.343-13.598,27.448c-0.371,0.731-0.34,1.347-0.44,2.03"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1133.367,807.908c-4.297-0.818-7.39,2.241-10.964,3.589c-9.938,3.746-19.704,7.849-30.528,8.444
           c-10.657,0.587-14.037-5.819-15.604-13.011c-1.422-6.526-0.575-13.021-0.871-19.521c-0.126-2.778,0.047-5.896-2.585-7.392
           c-2.857-1.623-5.703-0.488-8.477,1.335c-7.38,4.851-14.109,10.476-20.439,16.577c-9.077,8.751-18.022,17.639-27.014,26.479
           c-3.435,3.377-7.132,6.434-11.522,8.449c-2.379,1.093-5.426,1.435-7.351-0.111c-1.902-1.527-2.458-4.264-0.713-6.898
           c0.501-0.757,0.594-1.961,0.984-2.98c7.328-19.138,20.216-33.465,37.62-43.92c1.838-1.104,3.907-2.09,5.989-2.469
           c8.871-1.615,10.2-0.576,14.986,8.432"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1208.858,841.903c-5.599,3.053-10.147,7.546-14.897,11.617c-14.507,12.429-28.808,25.148-41.055,39.911
           c-3.976,4.79-7.999,9.569-9.635,15.938c-1.194,4.651-0.145,6.948,4.588,8.052c6.303,1.471,12.137-0.014,17.475-3.078
           c24.216-13.905,39.444-34.51,44.842-61.978c0.597-3.039,1.689-6.559-0.18-10.037c-0.971-1.806,1.329-2.865,2.825-3.974
           c6.583-4.887,12.745-10.397,19.603-14.844c9.968-6.463,19.293-14.036,30.428-18.604"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M630.431,383.461c-10.702,7.679-20.007,16.968-29.438,26.057c-16.374,15.78-32.237,32.091-48.615,47.868
           c-8.07,7.773-16.794,14.908-27.939,18.042c-7.194,2.024-11.975-1.743-11.692-8.985c0.343-8.792,3.819-16.378,7.33-23.928
           c3.642-7.832,8.569-15.068,13.111-22.407c3.225-5.212,7.743-9.833,11.806-14.606c11.102-13.04,23.38-24.87,37.976-33.989
           c8.804-5.5,18.28-9.051,28.964-9.176c5.211-0.061,9.13,1.764,11.919,5.683c3.022,4.247,5.451,8.921,8.009,13.481
           c0.205,0.365-0.595,1.293-0.929,1.96"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1431.83,820.906c-5.474-0.193-9.838,3.08-14.432,5.146c-15.459,6.954-30.784,14.234-44.623,24.264
           c-2.936,2.127-5.322,4.696-7.915,7.108c-1.246,1.158-2.266,3.017-1.383,4.387c0.783,1.214,2.323,2.151,4.358,2.192
           c4.425,0.089,8.512-1.074,12.487-2.636c19.471-7.653,36.688-18.524,49.484-35.48c3.544-4.695,5.948-9.827,6.089-15.979
           c0.197-8.495-4.783-12.938-14.067-13.471c-11.71-0.672-22.813,2.938-33.945,5.664c-5.335,1.307-10.795,2.139-16.059,3.766
           c-0.912,0.282-2.21,0.418-2.952-0.019c-6.574-3.868-12.181,0.571-18.014,2.133c-12.175,3.262-24.469,5.737-37.019,6.887
           c-1.307,0.119-2.663-0.295-3.995-0.462"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M216.982,434.455c-1.277,5.823,1.123,11.326,1.655,16.983c1.668,17.704,1.244,35.309,0.009,53.019
           c-0.901,12.905-2.593,25.678-4.173,38.482c-0.56,4.536-2.263,9.097,0.509,13.5"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M262.477,439.954c-1.276,7.28-4.975,13.682-7.577,20.467c-11.654,30.398-23.597,60.684-35.352,91.043
           c-0.29,0.748-0.448,1.463-1.068,1.972c-6.318,5.188-6.13,13.2-8.366,20.044c-5.24,16.031-9.8,32.284-14.621,48.452
           c-0.392,1.316-1.292,2.883-0.91,3.964c3.078,8.705-1.997,16.123-3.717,24.005c-1.411,6.461-3.731,12.743-5.952,18.998
           c-0.885,2.494-1.615,5.67-5.426,5.525"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1398.334,792.41c-3.05-2.167-0.776-4.503,0.07-6.47c3.145-7.306,7.651-13.851,11.874-20.562c2.448-3.894,5.457-7.789,4.109-12.758
           c-5.495-2.667-9.858,0.981-13.411,3.495c-13.102,9.27-24.795,20.212-33.571,33.838c-2.563,3.98-4.698,8.373-4.066,13.454"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1630.805,419.457c-3.787-0.844-7.146,0.928-10.472,2.075c-19.396,6.686-39.374,11.004-59.545,14.264
           c-9.882,1.597-19.88,3.097-29.971,3.135c-1.333,0.005-2.666-0.31-3.999-0.477"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M449.453,231.48c-1.619-8.106-7.873-11.742-14.5-14.993c-8.681-4.259-17.928-6.25-27.479-7.613
           c-14.124-2.015-28.273-2.795-42.509-2.964c-5.36-0.063-10.61,2.197-15.999,0.574"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1025.381,418.457c-3.114-1.912-6.145-0.043-8.974,0.61c-28.315,6.535-56.091,14.852-83.047,25.807
           c-1.079,0.438-2.634,1.553-3.967,0.08"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1264.852,809.907c-3.505,10.224-6.764,20.507-3.971,31.488c1.64,6.447,4.942,8.279,11.475,7.031
           c4.86-0.929,9.233-2.884,12.972-6.049c8.593-7.273,16.353-15.287,21.519-25.472"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1523.318,440.954c-1.832-1.338-3.951-0.982-5.999-0.996c-16.036-0.107-32.102,0.693-48.004-2.457
           c-8.825-1.748-17.328-4.19-24.979-9.061c-1.527-0.973-3.039-1.988-3.531-3.979c-0.53-2.147-2.144-3.45-3.977-4.505"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1194.859,787.41c-6.194,1.228-10.648,5.612-15.416,9.11c-15.558,11.415-30.564,23.584-46.609,34.335
           c-3.539,2.371-7.264,4.822-12.165,4.522c-0.498-2.707-0.404-4.817,0.678-6.984c8.072-16.173,18.968-29.861,34.53-39.463
           c1.068-0.659,2.364-0.938,3.48-1.534c6.789-3.624,14.417-1.158,14.559,8.512c0.017,1.09,0.779,2.168,1.196,3.251"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1264.852,806.408c0.98,3.896,4.384,4.832,7.508,5.976c7.089,2.596,14.585,2.809,21.988,3.517c3.656,0.351,7.352-0.559,11.01,0.466
           c1.725,0.482,3.386-0.601,3.911-1.988c3.417-9.021,8.443-17.597,9.01-27.472c0.688-11.994-4.951-18.195-18.443-15.044
           c-3.864,0.903-7.535,2.148-10.978,4.067c-1.89,1.052-3.808,1.784-6.009,1.481"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1283.349,328.468c1.418,2.808-0.205,5.232-2.081,6.365c-4.619,2.792-4.332,7.578-5.278,11.665c-1.179,5.087,1.48,7.192,6.345,5.426
           c8.007-2.907,14.304-8.214,20.108-14.366c2.519-2.67,3.236-5.272,2.796-8.541c-5.097-2.96-9.479-0.455-13.882,1.472
           c-2.415,1.056-4.851,1.765-7.508,1.479"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1215.357,772.412c-6.731,2.689-12.447,6.946-17.45,12.045c-5.546,5.655-5.441,18.343-0.021,26.432
           c2.298,3.428,4.201,7.15,6.605,10.419c3.939,5.355,4.471,11.788,6.865,17.597"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M193.985,625.931c-2.6,1.448-4.13,3.678-5.016,6.494c-3.46,11.011-7.271,21.923-10.321,33.045c-1.021,3.72-0.161,7.955-0.161,11.954
           "
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1484.323,803.908c-15.951,3.162-31.498,7.661-46.506,13.97c-0.909,0.383-1.987,0.361-2.987,0.528"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1456.327,385.96c0.881,2.087,0.57,4.036-0.485,6.007c-4.656,8.704-8.703,17.682-12.031,26.982c-0.594,1.66-1.809,2.846-3.481,3.506
           "
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1128.868,137.492c-3.264-0.274-3.962,2.149-5.046,4.478c-2.519,5.402-5.387,10.641-7.857,16.063
           c-0.427,0.94-1.334,0.717-1.595,1.457"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1271.85,789.41c0.904,4.882-3.49,8.021-4.2,12.466c-0.185,1.158-0.55,3.636-3.208,4.124c-2.09-2.115-1.429-4.545-0.61-7.098
           c1.83-5.713,6.399-9.133,10.487-13.025c3.948-3.758,8.198-7.318,10.53-12.465"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{
                      pathLength: 0,
                      transition: { delay: 0.5, duration: 1 }
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="
           M1480.324,352.465c1.355,3.008-0.687,4.623-2.459,6.537c-2.212,2.389-5.688,4.226-4.54,8.461"
                  />
                </svg>
              }
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};

export default CatItem;
