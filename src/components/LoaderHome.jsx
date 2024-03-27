import React, { useRef, useState, useEffect } from "react";
import { Stack } from "@mui/material";
// import cloe from "../assets/icons/Cloe.png";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useMotionValue
} from "framer-motion";
import $ from "jquery";
import NavBar from "./NavBar";

const LoaderHome = ({ vWidth, setVheight, hasLoaded, setHasLoaded }) => {
  // const [vWidth, setVwidth] = useState("");
  let cloeRef = useRef(null);
  let lineRef = useRef(null);

  // $(() => {
  //   setTimeout(() => {
  //     setHasLoaded(false);
  //   }, 4000);
  // });

  // const width = useMotionValue("2px");

  // useMotionValueEvent(width, "change", (e) => {
  //   let ls = e.split("").length;

  //   let widthChange = Math.floor(
  //     e
  //       .split("")
  //       .slice(0, ls - 2)
  //       .join("")
  //   );

  //   setLeft(
  //     `${
  //       Math.floor(cloeRef.current.clientWidth / 2) -
  //       Math.floor(widthChange / 2)
  //     }px`
  //   );
  // });

  // useEffect(() => {
  //   // setVwidth(cloeRef.current.clientWidth);
  //   setVheight(cloeRef.current.clientHeight);
  // }, []);

  return (
    <AnimatePresence mode="wait">
      {hasLoaded && (
        <Stack
          id="remove"
          ref={cloeRef}
          bgcolor={"#fff"}
          position={"fixed"}
          sx={{
            left: "0px",
            top: "0px",
            bottom: "0px",
            right: "0px",
            width: "100vw",
            height: "100vh",
            zIndex: 3
          }}
        >
          <motion.div
            ref={lineRef}
            initial={{ height: "0vh" }}
            transition={{
              duration: 2,
              // delay: 2,
              times: [0, 0.7, 1],
              ease: "easeInOut"
            }}
            exit={{
              height: ["0vh", "100vh", "100vh"],
              width: ["2px", "2px", `${vWidth}px`],
              left: [
                `${Math.floor(vWidth / 2)}px`,
                `${Math.floor(vWidth / 2)}px`,
                `0px`
              ],
              originX: 0
            }}
            style={{
              position: "absolute",
              margin: "auto",
              width: "2px" /*lg: lgwidth, xs: xswidth*/,
              height: "0vh",
              left: `${Math.floor(
                vWidth / 2
              )}px` /*{ lg: lgleft, sm: smleft, xs: xsleft }*/,
              top: "0px",
              backgroundColor: "#000",
              overflow: "hidden"
            }}
          >
            <NavBar />
          </motion.div>
          <Stack
            m="auto"
            width={"100%"}
            fontSize={"120px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <svg
              width="162"
              height="86"
              viewBox="0 0 162 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6 85.07C19.3533 85.07 15.4967 84.2467 12.03 82.6C8.56333 81.04 5.79 78.6567 3.71 75.45C1.63 72.2433 0.59 68.2133 0.59 63.36C0.59 60.1533 1.11 56.6 2.15 52.7C3.62333 47.5867 5.79 42.7333 8.65 38.14C11.5967 33.46 15.1067 29.3 19.18 25.66C23.34 22.02 27.89 19.16 32.83 17.08C37.77 15 42.97 13.96 48.43 13.96C49.1233 13.96 49.7733 14.0033 50.38 14.09C51.0733 14.09 51.7667 14.1333 52.46 14.22C53.76 14.3067 54.93 14.5233 55.97 14.87C57.01 15.13 57.79 15.5633 58.31 16.17C59.0033 15.3033 59.5233 14.3933 59.87 13.44C60.2167 12.4867 60.6933 11.7933 61.3 11.36C61.9933 10.7533 62.73 10.45 63.51 10.45C64.81 10.45 65.46 10.97 65.46 12.01C65.46 12.3567 65.33 12.7467 65.07 13.18C62.21 16.7333 59.87 20.2 58.05 23.58C56.3167 26.96 54.7133 30.6867 53.24 34.76C52.98 35.4533 52.5467 35.8 51.94 35.8C51.5933 35.8 51.29 35.67 51.03 35.41C50.77 35.0633 50.77 34.63 51.03 34.11L54.54 25.92C55.32 24.1 55.71 22.6267 55.71 21.5C55.71 19.5067 54.7567 18.1633 52.85 17.47C50.77 16.6033 48.5167 16.17 46.09 16.17C42.6233 16.17 39.2433 17.0367 35.95 18.77C32.6567 20.5033 29.5367 22.8433 26.59 25.79C23.6433 28.65 20.9567 31.8133 18.53 35.28C16.19 38.7467 14.1533 42.2133 12.42 45.68C10.7733 49.06 9.56 52.18 8.78 55.04C7.65333 58.7667 7.09 62.2767 7.09 65.57C7.09 71.1167 8.65 75.2333 11.77 77.92C14.9767 80.52 19.0067 81.82 23.86 81.82C29.06 81.82 34.78 80.4333 41.02 77.66C45.0933 75.84 48.43 73.63 51.03 71.03C53.7167 68.43 56.62 65.2233 59.74 61.41C60 61.0633 60.3467 60.89 60.78 60.89C61.3867 60.89 61.4733 61.2367 61.04 61.93C57.8333 66.35 54.7567 70.12 51.81 73.24C48.8633 76.36 45.44 78.8733 41.54 80.78C35.56 83.64 29.58 85.07 23.6 85.07ZM66.3568 80.91C63.6701 80.91 61.7635 80 60.6368 78.18C59.5101 76.36 58.9468 74.1067 58.9468 71.42C58.9468 69.86 59.0768 68.2133 59.3368 66.48C59.6835 64.66 60.0735 62.84 60.5068 61.02C61.1135 58.42 62.0235 55.3 63.2368 51.66C64.5368 48.02 65.9668 44.1633 67.5268 40.09C69.1735 36.0167 70.8635 32.03 72.5968 28.13C74.3301 24.1433 76.0201 20.5033 77.6668 17.21C79.4001 13.9167 80.9601 11.2733 82.3468 9.28C84.4268 6.24666 86.5501 4.07999 88.7168 2.77999C90.9701 1.39333 92.9635 0.699998 94.6968 0.699998C96.4301 0.699998 97.8168 1.26333 98.8568 2.39C99.9835 3.43 100.547 4.94666 100.547 6.94C100.547 7.72 100.417 8.58666 100.157 9.53999C99.3768 13.18 97.8168 17.0367 95.4768 21.11C93.2235 25.0967 90.5801 29.0833 87.5468 33.07C84.5135 37.0567 81.4368 40.87 78.3168 44.51C75.1968 48.0633 72.3801 51.1833 69.8668 53.87C67.7868 56.1233 66.3568 59.1567 65.5768 62.97C64.7968 66.6967 64.4068 70.0767 64.4068 73.11C64.4068 75.19 64.7101 76.6633 65.3168 77.53C66.0101 78.3967 66.9201 78.83 68.0468 78.83C68.8268 78.83 69.6935 78.6567 70.6468 78.31C71.6001 77.8767 72.5535 77.3567 73.5068 76.75C77.0601 74.5833 80.1368 71.9833 82.7368 68.95C85.4235 65.83 87.9368 62.6233 90.2768 59.33C90.2768 59.2433 90.4935 59.2867 90.9268 59.46C91.4468 59.6333 91.6201 59.8067 91.4468 59.98C88.8468 63.4467 86.1168 67 83.2568 70.64C80.3968 74.1933 76.9301 77.01 72.8568 79.09C70.4301 80.3033 68.2635 80.91 66.3568 80.91ZM68.9568 51.27C68.9568 51.6167 69.2168 51.6167 69.7368 51.27C70.2568 50.8367 71.0801 49.9267 72.2068 48.54C72.9001 47.76 74.2435 46.2 76.2368 43.86C78.2301 41.4333 80.4835 38.5733 82.9968 35.28C85.5968 31.9 88.1101 28.39 90.5368 24.75C92.9635 21.0233 94.9568 17.4267 96.5168 13.96C97.9901 10.9267 98.7268 8.41333 98.7268 6.41999C98.7268 4.51333 97.9468 3.56 96.3868 3.56C95.1735 3.56 93.5701 4.29666 91.5768 5.76999C89.6701 7.15666 87.8501 9.23667 86.1168 12.01C83.9501 15.4767 81.8701 19.3767 79.8768 23.71C77.9701 27.9567 76.1935 32.2467 74.5468 36.58C72.9001 40.8267 71.3401 44.7267 69.8668 48.28C69.2601 49.7533 68.9568 50.75 68.9568 51.27ZM93.8752 81.17C91.7952 81.17 90.0185 80.39 88.5452 78.83C87.1585 77.27 86.4652 74.8433 86.4652 71.55C86.4652 68.6033 87.1152 65.6567 88.4152 62.71C89.7152 59.7633 91.4485 57.12 93.6152 54.78C95.8685 52.3533 98.3385 50.5333 101.025 49.32C101.718 49.06 102.368 48.8433 102.975 48.67C103.582 48.4967 104.188 48.41 104.795 48.41C106.095 48.41 107.222 48.7567 108.175 49.45C109.128 50.1433 109.605 51.2267 109.605 52.7C109.605 53.0467 109.562 53.35 109.475 53.61C109.475 53.87 109.432 54.1733 109.345 54.52C109.258 54.8667 108.998 55.0833 108.565 55.17C108.218 55.2567 108.045 55.1267 108.045 54.78C108.218 53.3067 107.915 52.18 107.135 51.4C106.442 50.5333 105.532 50.1 104.405 50.1C103.625 50.1 102.888 50.2733 102.195 50.62C100.028 51.66 98.1218 53.2633 96.4752 55.43C94.9152 57.51 93.7018 59.8067 92.8352 62.32C92.0552 64.8333 91.6652 67.26 91.6652 69.6C91.7518 74.6267 93.4418 77.14 96.7352 77.14C98.5552 77.14 100.462 76.4033 102.455 74.93C104.448 73.4567 106.182 71.42 107.655 68.82C109.128 66.22 110.298 63.4467 111.165 60.5C112.032 57.4667 112.465 54.7367 112.465 52.31C112.465 50.8367 112.292 49.4933 111.945 48.28C111.598 47.0667 110.992 46.1567 110.125 45.55C109.692 45.2033 108.998 45.03 108.045 45.03C106.572 45.03 105.445 45.3333 104.665 45.94C104.145 46.2867 103.842 46.46 103.755 46.46C103.408 46.46 103.235 46.2433 103.235 45.81C103.235 45.4633 103.408 45.03 103.755 44.51C104.275 43.6433 105.098 42.9933 106.225 42.56C107.352 42.1267 108.522 41.91 109.735 41.91C111.122 41.91 112.335 42.2133 113.375 42.82C115.628 44.0333 116.755 46.59 116.755 50.49C116.755 53.2633 116.148 56.3833 114.935 59.85C113.808 63.3167 112.205 66.6533 110.125 69.86C108.132 72.98 105.835 75.5367 103.235 77.53C100.115 79.9567 96.9952 81.17 93.8752 81.17ZM129.434 81.56C125.968 81.56 123.498 80.78 122.024 79.22C120.638 77.66 119.944 75.71 119.944 73.37C119.944 71.9833 120.161 70.5533 120.594 69.08C121.028 67.6067 121.591 66.1333 122.284 64.66C121.678 64.3133 121.374 63.88 121.374 63.36C121.374 62.58 122.284 61.8867 124.104 61.28C124.884 60.1533 125.838 58.6367 126.964 56.73C128.178 54.7367 129.478 52.7433 130.864 50.75C132.338 48.7567 133.854 47.0667 135.414 45.68C136.974 44.2933 138.491 43.6 139.964 43.6C141.178 43.6 141.958 44.0767 142.304 45.03C142.651 44.9433 143.128 44.9 143.734 44.9C146.248 44.9 147.504 46.2 147.504 48.8C147.504 50.7933 146.811 52.7 145.424 54.52C144.038 56.2533 142.391 57.3367 140.484 57.77L140.614 58.42C140.614 58.42 141.048 58.3767 141.914 58.29C142.781 58.1167 143.518 57.9867 144.124 57.9C145.598 57.8133 147.201 57.8133 148.934 57.9C150.668 57.9867 151.794 58.3767 152.314 59.07C152.488 59.2433 152.444 59.3733 152.184 59.46C152.011 59.5467 151.838 59.5467 151.664 59.46C150.971 59.1133 149.844 58.94 148.284 58.94C146.204 58.94 143.734 59.2 140.874 59.72C138.101 60.24 135.544 60.89 133.204 61.67C130.864 62.3633 129.261 63.0133 128.394 63.62C127.614 64.8333 126.834 66.3933 126.054 68.3C125.274 70.12 124.884 71.8967 124.884 73.63C124.884 75.19 125.318 76.5333 126.184 77.66C127.138 78.7 128.828 79.22 131.254 79.22C133.854 79.22 136.238 78.57 138.404 77.27C140.658 75.97 142.738 74.3667 144.644 72.46C146.551 70.4667 148.241 68.6033 149.714 66.87C149.888 66.6967 150.494 66.0033 151.534 64.79C152.574 63.5767 153.658 62.2767 154.784 60.89C155.998 59.4167 156.864 58.29 157.384 57.51C157.384 57.51 157.471 57.5967 157.644 57.77C157.818 58.1167 157.774 58.4633 157.514 58.81C156.388 60.1967 155.261 61.67 154.134 63.23C153.008 64.79 151.838 66.3067 150.624 67.78C148.891 69.9467 146.941 72.1133 144.774 74.28C142.694 76.36 140.398 78.0933 137.884 79.48C135.371 80.8667 132.554 81.56 129.434 81.56ZM129.694 61.02C131.341 60.4133 132.641 59.98 133.594 59.72C134.548 59.46 135.414 59.1567 136.194 58.81C136.974 58.3767 137.711 57.9 138.404 57.38C139.184 56.7733 140.008 55.95 140.874 54.91C141.654 53.9567 142.304 52.9167 142.824 51.79C143.344 50.5767 143.604 49.4933 143.604 48.54C143.604 47.6733 143.344 46.98 142.824 46.46C142.304 45.94 141.394 46.2867 140.094 47.5C138.794 48.6267 137.408 50.0567 135.934 51.79C134.548 53.5233 133.248 55.2567 132.034 56.99C130.908 58.7233 130.128 60.0667 129.694 61.02ZM156.52 80.65C155.827 80.65 155.22 80.26 154.7 79.48C154.267 78.7867 154.05 78.2233 154.05 77.79C154.05 77.1833 154.267 76.6633 154.7 76.23C155.133 75.7967 155.653 75.3633 156.26 74.93C157.647 73.89 158.86 73.37 159.9 73.37C160.94 73.37 161.46 73.8467 161.46 74.8C161.46 76.1 160.55 77.66 158.73 79.48C157.95 80.26 157.213 80.65 156.52 80.65Z"
                fill="black"
              />
            </svg>
          </Stack>
        </Stack>
      )}
    </AnimatePresence>
  );
};

export default LoaderHome;
