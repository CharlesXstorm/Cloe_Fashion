import React, { useState, useEffect } from "react";

import { Stack, Box, Typography } from "@mui/material";

import LiquidSlider from "./LiquidSlider";
import { AnimatePresence, motion } from "framer-motion";
import style from "./CloeBack.module.css";

const img = {
  hidden: {
    opacity: 0.2,
    scale: (1, 1)
  },
  visible: {
    opacity: 1,
    scale: (1.1, 1.1),
    transition: { duration: 5, opacity: { duration: 1 }, ease: "linear" }
  }
};

const CloeBack = ({ width, slide1, slide2, slide3 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => (count >= 2 ? 0 : count + 1));
    }, [5000]);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      {/* <NavBar /> */}
      <Stack
        position={"absolute"}
        sx={{
          direction: { lg: "row" },
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          top: "0px",
          left: "0px",
          bottom: "0px"
        }}
      >
        {
          //rgbkineticstarts

          <LiquidSlider>
            {/* <AnimatePresence mode="wait"> */}
            {count === 0 && (
              <motion.div
                className={style.imgCont}
                variants={img}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <img className={style.imgbody} src={slide1} alt="hero" />
              </motion.div>
            )}
            {count === 1 && (
              <motion.div
                className={style.imgCont}
                variants={img}
                initial="hidden"
                animate="visible"
                exit="hidden"
                // transition={{ duration: 1, ease: "easeInOut" }}
              >
                <img
                  className={style.imgbody}
                  src={slide2}
                  alt="hero"
                  // height="100%"
                />
              </motion.div>
            )}
            {count === 2 && (
              <motion.div
                className={style.imgCont}
                variants={img}
                initial="hidden"
                animate="visible"
                exit="hidden"
                // transition={{ duration: 1, ease: "easeInOut" }}
              >
                <img
                  className={style.imgbody}
                  src={slide3}
                  alt="hero"
                  // height="100%"
                />
              </motion.div>
            )}
            {/* </AnimatePresence> */}
          </LiquidSlider>

          //rgbkineticends
        }
        <Box
          sx={{
            position: "inherit",
            display: { lg: "block", xs: "block" },
            right: { lg: "150px", xs: "calc((100vw-100%)/2)" },
            marginLeft: { lg: "", xs: "40px" }
          }}
        >
          <Typography
            mt="30vh"
            sx={{ marginTop: { lg: "30vh", xs: "60vh" } }}
            fontSize={"100px"}
            fontFamily={"mutalis_fashion_personal_usRg"}
            color={"#fff"}
          >
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              width="279"
              height="139"
              viewBox="0 0 279 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6163 133.605C33.7282 129.265 31.2146 123.875 29.0757 117.436C27.0167 110.891 25.4705 103.942 24.437 96.5878C24.2539 95.2847 24.0707 93.9815 23.8876 92.6783C23.7044 91.3751 23.5678 90.0653 23.4777 88.7491C22.4669 88.9861 21.4691 89.3161 20.4844 89.7393C19.4866 90.0694 18.5354 90.3929 17.6307 90.7099C16.9922 90.8946 15.921 91.3773 14.417 92.1583C13.0061 92.9261 12.0942 93.5289 11.6811 93.9666C11.348 94.2982 10.9953 94.4902 10.6229 94.5425C9.87823 94.6472 9.64703 94.0152 9.9293 92.6466C10.2916 91.1718 10.8124 90.1494 11.4916 89.5793C11.9978 89.1285 13.1025 88.546 14.8057 87.8321C16.5889 87.0119 17.9394 86.4899 18.8572 86.266L23.2468 85.0795C23.0058 79.9875 23.0105 74.9559 23.2611 69.9846C23.5917 64.9072 24.2938 60.1098 25.3676 55.5924C24.2098 56.1348 23.0651 56.7703 21.9335 57.4989C20.8819 58.1213 19.8303 58.7437 18.7787 59.3661C17.8332 60.0685 16.5882 61.0029 15.0434 62.1692C13.4857 63.2425 11.9344 64.3623 10.3897 65.5286C8.93806 66.6818 7.79915 67.6962 6.97296 68.5717C6.55986 69.0095 6.16714 69.2545 5.7948 69.3068C5.51555 69.3461 5.3563 69.2261 5.31705 68.9468C5.21239 68.2021 5.44007 67.4582 6.00009 66.715C6.57319 66.065 7.49901 65.2229 8.77755 64.1889C10.043 63.0618 11.355 61.9282 12.7135 60.788C14.0721 59.6479 15.1441 58.8327 15.9295 58.3427C17.4873 57.2694 19.1513 56.2762 20.9214 55.3629C22.6784 54.3566 24.442 53.3968 26.2122 52.4836C27.379 47.9531 29.1232 43.8161 31.4448 40.0725C32.6056 38.2008 34.2914 36.3501 36.5023 34.5206C38.7002 32.5981 41.0557 31.4601 43.569 31.1069C45.0584 30.8976 46.5201 31.1668 47.9541 31.9145C49.4812 32.6491 50.9537 34.0084 52.3716 35.9924C52.6363 36.5247 52.7817 36.884 52.8079 37.0702C52.9125 37.8148 52.7321 38.2199 52.2667 38.2853C51.8013 38.3507 51.2835 38.0438 50.7134 37.3645C49.5748 35.3413 47.8884 34.4867 45.6544 34.8006C43.6065 35.0885 41.5237 36.1406 39.4058 37.957C37.288 39.7734 35.8087 41.4052 34.9679 42.8523C34.2741 43.9939 33.6333 45.1756 33.0456 46.3973C32.551 47.6059 32.0099 48.821 31.4222 50.0427C33.4046 49.2895 35.3471 48.5893 37.2495 47.9423C39.232 47.189 41.2276 46.5289 43.2362 45.9618C44.9786 45.5271 46.6811 45.1454 48.3435 44.8169C50.086 44.3821 51.795 44.047 53.4705 43.8115C57.7524 43.2098 61.7143 43.0326 65.3562 43.2802C69.0781 43.4216 72.1942 43.9804 74.7045 44.9565C75.5946 45.2111 76.4905 45.8446 77.3922 46.8569C78.3738 47.7631 78.9432 48.7747 79.1001 49.8918C79.2048 50.6364 79.1298 51.4538 78.8752 52.3439C78.6206 53.234 78.0402 54.1699 77.134 55.1516C76.2948 55.934 75.6424 56.3579 75.177 56.4233C75.0839 56.4364 74.9908 56.4495 74.8977 56.4626C74.8846 56.3695 74.8781 56.3229 74.8781 56.3229C74.8389 56.0437 75.0592 55.5856 75.5393 54.9486C76.6316 53.9407 77.1124 52.9714 76.9816 52.0405C76.8377 51.0166 76.1483 50.1642 74.9136 49.4834C73.7719 48.7896 72.8556 48.3488 72.1648 48.1611C66.3196 46.4197 59.3943 46.1115 51.3889 47.2366C49.8996 47.4459 48.3302 47.7614 46.6808 48.183C45.0184 48.5116 43.409 48.8802 41.8527 49.2887C39.8441 49.8558 37.842 50.4694 35.8465 51.1296C33.944 51.7766 32.0546 52.5168 30.1783 53.35C28.4922 58.2383 27.3574 63.3338 26.7737 68.6366C26.19 73.9395 26.0318 79.23 26.299 84.5082C26.8444 84.3366 27.3964 84.2115 27.9549 84.133C28.6065 84.0415 29.2581 83.9499 29.9097 83.8583C34.0985 83.2696 38.1404 82.9863 42.0354 83.0085C45.9173 82.9375 48.808 83.2432 50.7074 83.9255C51.9029 84.327 52.5596 84.9467 52.6773 85.7844C52.7689 86.436 52.3231 86.6411 51.3399 86.3995C49.932 85.838 47.7591 85.5738 44.8212 85.6071C41.9632 85.5341 38.9052 85.7266 35.6472 86.1844C32.4823 86.6292 29.4301 87.2006 26.4907 87.8985C26.5807 89.2147 26.6773 90.5776 26.7805 91.9869C26.9636 93.2901 27.1468 94.5933 27.3299 95.8965C28.2457 102.412 29.7069 108.757 31.7135 114.93C33.707 121.009 35.974 126.671 38.5145 131.914C38.8854 132.527 39.11 133.112 39.1885 133.671C39.2801 134.322 39.0932 134.681 38.6277 134.746C38.0692 134.825 37.3988 134.444 36.6163 133.605ZM76.0927 116.524C74.8826 116.694 73.8798 116.313 73.0843 115.38C72.3819 114.435 71.846 113.324 71.4767 112.047C71.2004 110.757 71.0565 109.733 71.0449 108.975C71.0017 104.614 71.8427 100.13 73.5681 95.5207C75.2934 90.9118 77.6427 86.6897 80.6159 82.8546C83.6821 79.0064 87.0785 76.156 90.8049 74.3033C91.5104 73.9194 92.1358 73.6417 92.6812 73.4701C93.3197 73.2854 93.9182 73.1539 94.4767 73.0754C97.3624 72.6698 98.9622 73.5841 99.2762 75.8181C99.4332 76.9351 99.2178 78.1045 98.6301 79.3262L97.7682 81.2983C97.7144 81.5907 97.5944 81.7499 97.4082 81.7761C97.222 81.8022 97.0628 81.6822 96.9304 81.4161C96.7981 81.1499 96.8054 80.8641 96.9523 80.5587C97.0992 80.2533 97.1996 79.9544 97.2535 79.662C97.4004 79.3566 97.5473 79.0512 97.6942 78.7458C98.0288 77.7495 98.1634 77.0187 98.098 76.5532C98.0064 75.9016 97.6683 75.522 97.0836 75.4143C96.579 75.2005 95.9543 75.1459 95.2096 75.2506C94.8373 75.3029 94.4249 75.4083 93.9726 75.5668C93.6002 75.6191 93.2344 75.718 92.8752 75.8634C91.012 76.7897 89.4076 77.8695 88.0622 79.1028C86.8098 80.3229 85.5967 81.8224 84.4228 83.6011C82.9958 85.6052 81.5077 88.1874 79.9585 91.3478C78.3962 94.415 77.0731 97.4962 75.9893 100.591C74.9986 103.673 74.5205 106.351 74.5553 108.624C74.4476 109.209 74.4788 110.106 74.6489 111.316C74.7666 112.154 74.984 113.025 75.301 113.93C75.698 114.728 76.2222 115.082 76.8738 114.99C77.7116 114.872 78.444 114.342 79.0709 113.4C79.6978 112.457 80.2048 111.674 80.5917 111.05C81.8602 108.594 83.2363 105.553 84.7202 101.927C86.204 98.3012 87.2951 94.9205 87.9935 91.7848L88.0569 90.2096C88.1384 89.4388 88.393 88.5487 88.8207 87.5393C89.2484 86.53 89.9742 85.9533 90.9981 85.8094C91.8359 85.6917 92.3202 86.0983 92.451 87.0291C92.4641 87.1222 92.4306 87.2218 92.3506 87.328C92.3637 87.4211 92.3768 87.5142 92.3899 87.6072C92.3184 89.8005 92.3401 91.9807 92.4548 94.1479C92.5564 96.2219 92.7577 98.3294 93.0586 100.47C93.595 104.287 94.3663 107.074 95.3726 108.831C96.3659 110.495 97.421 111.248 98.538 111.091C99.6551 110.934 100.78 110.159 101.913 108.766C103.139 107.359 104.253 105.827 105.254 104.167C106.335 102.401 107.142 101.054 107.676 100.125L110.159 95.5041C110.386 95.0925 110.592 94.8737 110.778 94.8475C110.965 94.8213 111.077 94.9479 111.117 95.2271C111.182 95.6926 111.141 96.078 110.994 96.3834C110.286 98.0967 109.404 99.9292 108.35 101.881C107.375 103.727 106.227 105.691 104.907 107.776C103.906 109.435 102.733 110.881 101.387 112.115C100.042 113.348 98.7174 114.056 97.4142 114.239C96.2041 114.409 95.0086 114.008 93.8277 113.035C92.6468 112.061 91.5408 110.271 90.5098 107.663C90.1797 106.665 89.7843 105.202 89.3234 103.273C88.9425 101.239 88.6481 99.1443 88.4403 96.9902C88.078 98.465 87.5223 100.252 86.7731 102.35C86.0239 104.449 85.0885 106.574 83.9669 108.725C82.9254 110.77 81.705 112.555 80.3057 114.081C78.9864 115.5 77.582 116.314 76.0927 116.524ZM120.171 112.607C119.799 112.659 118.955 112.731 117.638 112.821C116.415 112.898 115.684 112.763 115.446 112.417C115.446 112.417 115.333 112.29 115.108 112.037L114.75 111.518C114.724 111.332 114.99 111.2 115.548 111.121C116.479 110.99 117.317 110.872 118.062 110.768C118.886 110.557 119.718 110.393 120.555 110.275C121.393 110.157 122.397 109.874 123.568 109.424C124.726 108.882 125.725 108.22 126.564 107.437C127.39 106.562 127.731 105.612 127.587 104.588C127.496 103.936 127.125 103.324 126.475 102.751C125.905 102.072 125.361 101.579 124.843 101.272C122.811 100.323 120.673 99.2947 118.429 98.1862C116.185 97.0777 114.234 95.6908 112.576 94.0253C110.905 92.2667 109.893 90.1308 109.54 87.6175C109.187 85.1042 109.625 82.4797 110.854 79.744C112.163 76.9022 113.971 74.2276 116.276 71.7203C118.581 69.2131 121.039 67.1116 123.648 65.4159C126.338 63.6141 128.893 62.5431 131.313 62.203C132.895 61.9806 134.636 62.2105 136.536 62.8928C138.515 63.4689 139.636 64.6879 139.897 66.5496C139.976 67.1081 139.861 67.9785 139.552 69.161C139.324 70.2372 138.884 70.8212 138.232 70.9127C137.953 70.952 137.747 70.8385 137.615 70.5723C137.576 70.2931 137.543 70.0604 137.517 69.8742C137.438 69.3157 137.413 68.7972 137.441 68.3187C137.455 67.7471 137.43 67.2286 137.364 66.7632C137.129 65.0876 136.173 64.3676 134.498 64.6031C132.264 64.917 129.889 65.9153 127.372 67.5979C124.843 69.1874 122.465 71.1827 120.24 73.5838C118.014 75.9849 116.287 78.5533 115.058 81.289C113.829 84.0247 113.391 86.6492 113.744 89.1625C114.019 91.1173 115.065 92.8212 116.883 94.2744C118.688 95.6344 120.719 96.9152 122.976 98.1168C125.313 99.2122 127.364 100.3 129.13 101.381C130.896 102.462 131.877 103.7 132.073 105.097C132.295 106.679 131.628 108.007 130.07 109.08C128.605 110.14 126.868 110.954 124.86 111.521C122.944 112.075 121.381 112.437 120.171 112.607ZM151.222 112.515C150.782 112.766 150.53 112.659 150.465 112.194C149.525 110.238 148.759 108.162 148.166 105.967C147.559 103.68 147.08 101.279 146.726 98.7656C146.334 95.9731 146.075 93.1144 145.948 90.1895C145.822 87.2646 145.749 84.3797 145.729 81.5348C145.806 76.6828 145.977 71.8177 146.24 66.9396C146.504 62.0614 146.914 57.2101 147.47 52.3858C147.551 51.615 147.72 50.4522 147.976 48.8974C148.325 47.3295 148.708 45.662 149.124 43.8949C149.633 42.1147 150.175 40.5673 150.75 39.2525C151.312 37.8446 151.905 37.0018 152.53 36.7241C152.61 36.6179 152.744 36.5518 152.93 36.5256C153.116 36.4994 153.322 36.6129 153.547 36.866C153.772 37.1191 153.945 37.3322 154.064 37.5053C154.196 37.7714 154.302 38.1838 154.38 38.7423C154.524 39.7662 154.429 40.7763 154.094 41.7726C153.598 43.6459 153.095 45.4726 152.586 47.2528C152.17 49.0199 151.767 50.8801 151.377 52.8334C150.705 56.1553 150.064 60.3745 149.454 65.4912C148.831 70.5148 148.394 75.8445 148.142 81.4805C147.97 87.0102 148.084 92.215 148.485 97.0946C149.051 93.6927 149.996 90.2851 151.32 86.8716C152.724 83.352 154.213 80.4374 155.786 78.1279C156.266 77.4909 156.859 76.9804 157.565 76.5965C157.831 76.4642 158.15 76.3719 158.522 76.3195C159.453 76.1887 160.124 76.5691 160.534 77.4607C160.918 78.1661 161.539 79.5501 162.399 81.6125C163.338 83.5688 164.39 85.6517 165.555 87.8611C166.72 90.0705 167.885 91.9475 169.052 93.4922C169.98 94.6908 171.095 95.1985 172.398 95.0153C173.515 94.8583 174.534 94.3355 175.453 93.4469C176.452 92.4522 177.166 91.4501 177.593 90.4408C177.807 89.9361 178.054 89.6642 178.333 89.6249C178.612 89.5857 178.778 89.7522 178.83 90.1246C178.856 90.3107 178.763 90.6562 178.549 91.1608C177.948 92.2894 177.121 93.4973 176.068 94.7844C175.108 96.0584 174.222 96.8473 173.41 97.1512C173.237 97.2705 173.011 97.3497 172.732 97.389C172.453 97.4282 172.22 97.4609 172.034 97.4871C171.103 97.6179 170.192 97.556 169.302 97.3014C168.492 96.9407 167.696 96.3406 166.914 95.5014C165.336 93.7297 163.865 91.7058 162.501 89.4294C161.217 87.047 160.21 85.2899 159.482 84.1583C158.289 82.4274 157.321 81.6143 156.576 81.719C155.924 81.8105 155.252 82.4272 154.558 83.5689C152.876 86.463 151.672 90.0496 150.944 94.3285C150.203 98.5143 149.836 102.315 149.841 105.732C150.091 106.836 150.375 107.84 150.692 108.745C151.022 109.743 151.392 110.687 151.802 111.579C151.854 111.951 151.661 112.263 151.222 112.515ZM186.205 63.7434C185.833 63.7957 185.401 63.7615 184.909 63.6408C184.511 63.5069 184.272 63.1607 184.194 62.6022C184.05 61.5783 184.544 60.702 185.676 59.9735C186.887 59.1387 187.912 58.6625 188.75 58.5447C189.215 58.4793 189.647 58.5135 190.046 58.6474C190.537 58.7681 190.816 59.0612 190.881 59.5266C191.025 60.5506 190.491 61.4799 189.279 62.3147C188.068 63.1494 187.043 63.6257 186.205 63.7434ZM198.998 93.9823C197.838 95.854 196.597 97.4996 195.278 98.919C194.039 100.232 192.768 100.981 191.464 101.164C190.254 101.334 189.105 100.926 188.018 99.9395C186.917 98.8602 185.851 97.0166 184.82 94.4087C184.609 93.584 184.299 92.3935 183.891 90.8372C183.575 89.2679 183.3 87.6454 183.064 85.9699C182.816 84.2013 182.627 82.5192 182.497 80.9237C182.448 79.222 182.404 77.8991 182.367 76.9552C182.448 76.1844 182.703 75.2943 183.131 74.2849C183.651 73.2625 184.377 72.6859 185.308 72.5551C186.146 72.4373 186.63 72.8439 186.761 73.7747C186.774 73.8678 186.74 73.9674 186.66 74.0736C186.674 74.1667 186.687 74.2598 186.7 74.3529C186.628 76.5461 186.65 78.7263 186.765 80.8935C186.866 82.9675 187.068 85.075 187.368 87.216C187.892 90.9394 188.55 93.5996 189.344 95.1966C190.231 96.7806 191.233 97.4941 192.351 97.3371C193.188 97.2194 194.113 96.7097 195.126 95.808C196.125 94.8132 197.231 93.5661 198.444 92.0667C199.497 90.7796 200.484 89.3594 201.405 87.8062C202.326 86.2529 203.288 84.3142 204.29 81.9901C204.411 81.4985 204.657 81.2266 205.029 81.1742C205.681 81.0827 205.84 81.535 205.505 82.5313C204.783 84.1514 203.849 85.944 202.701 87.9088C201.553 89.8737 200.319 91.8982 198.998 93.9823ZM273.158 102.07C271.948 102.24 270.486 101.971 268.773 101.262C267.059 100.554 265.739 99.6005 264.811 98.4019C264.002 97.3765 263.367 96.2318 262.904 94.9678C262.548 93.7839 262.285 92.5869 262.115 91.3768C261.775 88.9565 261.714 86.4971 261.932 83.9984C262.231 81.3935 262.449 78.8948 262.587 76.5022C262.708 76.0106 262.777 75.1467 262.793 73.9104C262.889 72.568 262.872 71.4314 262.741 70.5005C262.597 69.4766 262.292 68.9973 261.827 69.0627C261.268 69.1412 260.515 69.864 259.568 71.2311C258.622 72.5982 257.454 74.4234 256.066 76.7068C254.679 78.9901 253.411 81.1142 252.263 83.0791C251.116 85.0439 250.441 86.3252 250.241 86.923C250.04 87.5208 249.886 88.112 249.778 88.6967C249.657 89.1882 249.244 89.626 248.539 90.0099C248.446 90.023 248.359 90.0826 248.279 90.1888C248.279 90.1888 248.232 90.1953 248.139 90.2084C247.488 90.3 246.89 90.0992 246.346 89.6061C245.802 89.113 245.484 88.5407 245.393 87.8891C245.314 87.3306 245.389 86.8455 245.616 86.4339C246.125 84.6537 246.489 82.5143 246.707 80.0156C246.925 77.5169 246.997 74.9912 246.923 72.4387C246.85 69.8862 246.688 67.7256 246.44 65.9569C245.445 58.8825 242.295 55.7181 236.99 56.4638C235.035 56.7385 232.686 57.5906 229.945 59.0201C234.661 60.1608 237.399 63.4306 238.158 68.8295C238.59 71.9013 238.17 74.9978 236.9 78.1189C235.711 81.1339 233.923 83.9481 231.537 86.5615C229.245 89.1618 226.654 91.3295 223.766 93.0644C220.864 94.7062 217.924 95.7364 214.945 96.1551C212.897 96.4429 210.883 96.2987 208.904 95.7226C206.911 95.0534 205.745 93.5087 205.405 91.0885C205.366 90.8092 205.326 90.5299 205.287 90.2507C205.341 89.9584 205.348 89.6726 205.309 89.3933C203.929 88.3533 203.102 86.8558 202.827 84.9011C202.539 82.8532 202.743 80.5937 203.44 78.1227C204.23 75.6386 205.172 73.5603 206.266 71.8877C208.214 68.8612 210.812 66.0755 214.062 63.5305C217.391 60.8793 220.918 59.2921 224.641 58.7688L226.177 58.5529L228.433 57.3815C231.255 55.8459 233.783 54.9211 236.017 54.6071C240.112 54.0315 243.367 55.2353 245.779 58.2185C248.285 61.1887 249.911 65.3267 250.656 70.6326C250.918 72.4943 251.013 74.5218 250.942 76.7151C250.95 78.8022 250.6 80.7024 249.892 82.4157C251.012 80.9293 251.972 79.6553 252.772 78.5936C253.559 77.4389 254.419 76.1314 255.353 74.6712C256.194 73.2241 257.128 71.764 258.155 70.2907C259.182 68.8174 260.029 67.4169 260.697 66.089C261.058 65.2789 261.645 64.3896 262.458 63.421C263.258 62.3593 264.123 61.7631 265.054 61.6323C265.706 61.5407 266.09 61.9138 266.208 62.7515C266.247 63.0308 266.213 63.4628 266.105 64.0474C266.024 64.8183 265.86 66.6923 265.614 69.6695C265.355 72.5537 265.208 75.8967 265.172 79.6986C265.217 83.3943 265.475 86.9177 265.946 90.2688C266.051 91.0135 266.155 91.7581 266.26 92.5028C266.458 93.2344 266.649 93.9195 266.834 94.558C267.295 96.4866 268.169 97.9775 269.456 99.0306C270.849 100.164 272.151 100.645 273.361 100.475C274.105 100.371 274.857 99.9801 275.617 99.3038C276.469 98.6145 277.022 97.8248 277.277 96.9347C277.357 96.8285 277.431 96.6758 277.497 96.4766C277.577 96.3704 277.664 96.3108 277.757 96.2977C277.85 96.2846 277.916 96.4177 277.956 96.6969C278.165 98.1863 277.577 99.408 276.193 100.362C274.914 101.396 273.902 101.965 273.158 102.07ZM214.709 94.4795C218.433 93.9562 221.972 92.4621 225.328 89.9971C228.684 87.5321 231.343 84.5005 233.305 80.9024C235.254 77.2112 235.961 73.4574 235.424 69.6409C235.058 67.0345 234.192 64.9255 232.826 63.3138C231.461 61.7022 229.582 60.8272 227.189 60.6888C223.554 63.1931 220.284 66.2631 217.377 69.899C214.471 73.5348 212.17 77.0857 210.474 80.5515C208.871 84.0042 208.127 86.8141 208.241 88.9812C208.547 89.1281 209.098 89.3354 209.895 89.6031C210.772 89.7646 211.224 89.9385 211.25 90.1246C211.289 90.4039 211.122 90.5697 210.75 90.622C210.378 90.6744 209.999 90.6801 209.613 90.6394C209.228 90.5986 208.843 90.5579 208.457 90.5171C208.706 92.2857 209.348 93.477 210.383 94.0908C211.499 94.5985 212.941 94.7281 214.709 94.4795ZM205.918 84.609C206.28 83.1342 207.129 81.069 208.465 78.4133C209.8 75.7576 211.541 72.9499 213.688 69.9903C215.915 66.9245 218.52 64.1853 221.504 61.7727C218.617 62.8429 215.927 64.6447 213.435 67.1781C211.024 69.6054 209.09 72.3927 207.634 75.54C206.258 78.5811 205.686 81.6041 205.918 84.609Z"
                fill="white"
              />
            </motion.svg>
          </Typography>
          <Typography
            mt="5vh"
            sx={{
              marginRight: { lg: "15vw", md: "", xs: "" },
              marginTop: { lg: "5vh", xs: "0px" },
              top: { lg: 0, xs: "75vh" },
              position: { lg: "relative", xs: "absolute" }
            }}
            fontSize={"100px"}
            fontFamily={"mutalis_fashion_personal_usRg"}
            color={"#fff"}
          >
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              width="146"
              height="74"
              viewBox="0 0 146 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.16 49.36C33.48 49.36 29.7733 48.5867 26.04 47.04C22.3067 45.5467 18.68 43.8933 15.16 42.08C14.7867 42.7733 14.4667 43.4133 14.2 44C13.9333 44.64 13.6667 45.1733 13.4 45.6C11.96 48.0533 10.28 49.28 8.36 49.28C6.6 49.28 4.97333 48.2667 3.48 46.24C2.62667 45.0133 1.93333 43.6267 1.4 42.08C0.866667 40.5333 0.6 39.0933 0.6 37.76C0.6 36.5333 0.813333 35.52 1.24 34.72C1.72 33.92 2.46667 33.52 3.48 33.52C4.54667 33.52 6.06667 34.0267 8.04 35.04C10.0133 36.0533 12.28 37.28 14.84 38.72C16.76 33.9733 18.5733 29.1733 20.28 24.32C21.9867 19.4667 23.88 14.6933 25.96 10C26.6 8.56 27.4533 7.12 28.52 5.68C29.5867 4.18666 30.8133 2.96 32.2 2C33.5867 0.986664 35.0533 0.479998 36.6 0.479998C37.7733 0.479998 39 0.879997 40.28 1.68C41.56 2.53333 42.5467 3.81333 43.24 5.52C43.9867 7.17333 44.4933 8.88 44.76 10.64C45.08 12.3467 45.2133 13.7333 45.16 14.8C45.1067 15.0133 44.9467 15.2267 44.68 15.44C44.4133 15.6 44.3067 15.4933 44.36 15.12C44.2533 13.6267 43.9067 12.08 43.32 10.48C42.7867 8.82666 41.96 7.41333 40.84 6.24C39.7733 5.06666 38.3333 4.48 36.52 4.48C35.1867 4.48 33.8533 5.09333 32.52 6.32C31.1867 7.49333 29.9067 9.06666 28.68 11.04C27.4533 13.12 26.2267 15.52 25 18.24C23.7733 20.9067 22.6267 23.6267 21.56 26.4C20.4933 29.12 19.5067 31.6533 18.6 34C17.6933 36.2933 16.9467 38.1067 16.36 39.44C18.76 40.72 21.2933 42 23.96 43.28C26.68 44.56 29.4 45.6267 32.12 46.48C34.84 47.3333 37.4533 47.76 39.96 47.76C41.56 47.7067 42.8933 47.2267 43.96 46.32C45.0267 45.4133 45.4267 44.0533 45.16 42.24C45 41.4933 44.68 40.88 44.2 40.4C43.7733 39.92 43.5867 39.5733 43.64 39.36C43.7467 39.0933 43.88 38.9867 44.04 39.04C44.2533 39.0933 44.44 39.1733 44.6 39.28C46.36 40.56 47.24 41.9467 47.24 43.44C47.24 44.8267 46.52 46.0533 45.08 47.12C43.6933 48.24 41.9867 48.9333 39.96 49.2C39.48 49.2533 39 49.28 38.52 49.28C38.0933 49.3333 37.64 49.36 37.16 49.36ZM8.28 48.24C8.97333 48.24 9.66667 47.92 10.36 47.28C11.0533 46.64 11.6667 45.8133 12.2 44.8C12.6267 44.0533 13.16 42.9067 13.8 41.36C12.84 40.88 11.9067 40.4 11 39.92C10.1467 39.44 9.26667 39.0133 8.36 38.64C7.18667 38.0533 6.25333 37.76 5.56 37.76C4.65333 37.76 4.2 38.3733 4.2 39.6C4.2 39.8133 4.2 40.08 4.2 40.4C4.25333 40.6667 4.30667 40.9867 4.36 41.36C4.68 43.8133 5.18667 45.5733 5.88 46.64C6.62667 47.7067 7.42667 48.24 8.28 48.24ZM64.405 44.72C62.9117 44.72 62.165 43.5733 62.165 41.28C62.165 39.84 62.3783 38.48 62.805 37.2C63.2317 35.8667 63.6317 34.5333 64.005 33.2C63.1517 34.1067 62.325 34.9867 61.525 35.84C60.7783 36.6933 59.9517 37.5467 59.045 38.4C58.1917 39.2 57.3117 40 56.405 40.8C55.4983 41.5467 54.5917 42.2133 53.685 42.8C52.0317 43.8667 50.7783 44.4 49.925 44.4C49.0717 44.4 48.645 43.8933 48.645 42.88C48.645 41.7067 49.0983 40.1333 50.005 38.16C50.5383 36.9867 51.2583 35.7067 52.165 34.32C53.125 32.9333 54.1117 31.5733 55.125 30.24C56.085 29.0667 57.205 27.8667 58.485 26.64C59.8183 25.4133 61.2583 24.3733 62.805 23.52C64.3517 22.6667 65.8983 22.24 67.445 22.24C68.6717 22.24 69.685 22.5333 70.485 23.12C71.3383 23.6533 71.765 24.5333 71.765 25.76C71.765 27.04 71.525 27.8133 71.045 28.08C70.885 28.24 70.7783 28.2933 70.725 28.24C70.6717 28.1867 70.645 28.16 70.645 28.16C70.5917 27.6267 70.3517 27.0933 69.925 26.56C69.4983 25.9733 68.965 25.5733 68.325 25.36C67.6317 25.1467 66.8583 25.04 66.005 25.04C64.0317 25.04 62.165 25.6267 60.405 26.8C58.6983 27.92 57.2317 29.2533 56.005 30.8C54.9917 32.1333 54.165 33.52 53.525 34.96C52.9383 36.3467 52.645 37.5733 52.645 38.64C52.645 40.24 53.0717 41.04 53.925 41.04C54.4583 41.04 55.045 40.8 55.685 40.32C56.325 39.84 56.8583 39.4133 57.285 39.04C58.8317 37.6533 60.2717 36.1333 61.605 34.48C62.9917 32.7733 63.9517 31.5733 64.485 30.88C64.5917 30.7733 64.885 30.6133 65.365 30.4C65.8983 30.1333 66.4583 29.92 67.045 29.76L68.725 29.36C69.045 29.36 69.205 29.3867 69.205 29.44C68.885 29.8667 68.4317 30.7467 67.845 32.08C67.3117 33.4133 66.8317 34.8533 66.405 36.4C65.9783 37.8933 65.765 39.1733 65.765 40.24C65.765 41.0933 65.925 41.6533 66.245 41.92C66.405 42.08 66.6183 42.16 66.885 42.16C67.3117 42.16 67.765 42.0267 68.245 41.76C68.725 41.44 69.2317 41.0933 69.765 40.72C71.6317 39.3333 73.3917 37.6267 75.045 35.6C76.7517 33.5733 78.1917 31.76 79.365 30.16C79.365 30.16 79.4183 30.2133 79.525 30.32C79.6317 30.5867 79.6317 30.8 79.525 30.96C78.8317 31.8667 78.1117 32.8267 77.365 33.84C76.6183 34.8 75.8717 35.76 75.125 36.72C74.325 37.6267 73.4983 38.5333 72.645 39.44C71.845 40.2933 70.9917 41.0933 70.085 41.84C69.0183 42.6933 67.9783 43.3867 66.965 43.92C66.005 44.4533 65.1517 44.72 64.405 44.72ZM63.2694 73.52C60.016 73.52 57.3227 72.9067 55.1894 71.68C53.0027 70.5067 51.9094 68.8267 51.9094 66.64C51.9094 65.2533 52.4427 63.6533 53.5094 61.84C54.5227 60.0267 56.176 58.0533 58.4694 55.92C60.976 53.5733 64.0427 51.5733 67.6694 49.92C71.296 48.32 75.0827 47.0667 79.0294 46.16C83.0294 45.3067 86.7894 44.8267 90.3094 44.72C90.3094 42.8 90.256 40.88 90.1494 38.96C90.096 36.9867 90.016 35.04 89.9094 33.12C88.9494 35.04 87.9894 36.5867 87.0294 37.76C85.696 39.4133 84.256 40.72 82.7094 41.68C81.216 42.64 79.8027 43.28 78.4694 43.6C77.616 43.8133 76.7894 43.92 75.9894 43.92C74.816 43.92 73.9894 43.6533 73.5094 43.12C73.0294 42.5867 72.7894 41.8933 72.7894 41.04C72.7894 39.7067 73.1894 38.24 73.9894 36.64C74.8427 35.04 75.936 33.5733 77.2694 32.24C78.176 31.3333 79.056 30.5867 79.9094 30C80.816 29.4133 81.776 28.8 82.7894 28.16C84.1227 27.36 85.2694 26.6667 86.2294 26.08C87.1894 25.4933 88.256 24.7733 89.4294 23.92C89.4294 23.6 89.456 23.28 89.5094 22.96C89.5627 22.64 89.616 22.3733 89.6694 22.16C89.936 20.9867 90.3894 20.16 91.0294 19.68C91.6694 19.1467 92.256 18.88 92.7894 18.88C93.4827 18.88 93.8294 19.2267 93.8294 19.92C93.8294 20.5067 93.4294 21.28 92.6294 22.24L90.4694 24.32L90.7094 26.48C91.0827 29.5733 91.5627 32.64 92.1494 35.68C92.736 38.6667 93.1627 41.7067 93.4294 44.8H93.5094C95.7494 44.8 97.376 45.12 98.3894 45.76C99.4027 46.4 99.936 47.1467 99.9894 48C99.9894 48.64 99.8294 48.96 99.5094 48.96C99.2427 48.96 99.1094 48.72 99.1094 48.24C99.1094 47.6533 98.7627 47.1733 98.0694 46.8C97.376 46.48 96.576 46.2133 95.6694 46C94.816 45.7867 94.096 45.6533 93.5094 45.6C93.5627 45.9733 93.5894 46.3467 93.5894 46.72C93.5894 47.1467 93.5894 47.5733 93.5894 48C93.5894 51.9467 92.816 55.44 91.2694 58.48C89.7227 61.5733 87.616 64.1867 84.9494 66.32C82.2827 68.4533 79.2427 70.1067 75.8294 71.28C72.416 72.5067 68.816 73.2267 65.0294 73.44C64.7627 73.44 64.4694 73.44 64.1494 73.44C63.8294 73.4933 63.536 73.52 63.2694 73.52ZM79.5894 42C80.7627 42 81.776 41.7067 82.6294 41.12C83.536 40.48 84.7894 39.2533 86.3894 37.44C87.0827 36.64 87.696 35.8133 88.2294 34.96C88.7627 34.0533 89.296 33.0133 89.8294 31.84C89.776 30.9867 89.696 30.1333 89.5894 29.28C89.536 28.4267 89.5094 27.6 89.5094 26.8V25.2L85.5894 28.32C84.3094 29.3333 83.056 30.4 81.8294 31.52C80.656 32.5867 79.5627 33.8133 78.5494 35.2C78.176 35.7333 77.8294 36.4 77.5094 37.2C77.2427 37.9467 77.1094 38.6933 77.1094 39.44C77.1094 40.1333 77.296 40.7467 77.6694 41.28C78.0427 41.76 78.6827 42 79.5894 42ZM62.1494 72.56C63.056 72.56 64.016 72.48 65.0294 72.32C69.7227 71.6267 73.9627 70.1067 77.7494 67.76C81.5894 65.4667 84.6294 62.4267 86.8694 58.64C89.1627 54.9067 90.3094 50.5867 90.3094 45.68V45.6C86.9494 45.7067 83.536 46.16 80.0694 46.96C76.656 47.8133 73.376 49.0133 70.2294 50.56C67.0827 52.1067 64.2827 54.0267 61.8294 56.32C59.3227 58.6667 57.5094 60.7733 56.3894 62.64C55.2694 64.5067 54.7094 66.1333 54.7094 67.52C54.7094 69.1733 55.4027 70.4267 56.7894 71.28C58.1227 72.1333 59.9094 72.56 62.1494 72.56ZM103.284 44.72C102.004 44.72 100.91 44.24 100.004 43.28C99.1504 42.32 98.7238 40.8267 98.7238 38.8C98.7238 36.9867 99.1238 35.1733 99.9238 33.36C100.724 31.5467 101.79 29.92 103.124 28.48C104.51 26.9867 106.03 25.8667 107.684 25.12C108.11 24.96 108.51 24.8267 108.884 24.72C109.257 24.6133 109.63 24.56 110.004 24.56C110.804 24.56 111.497 24.7733 112.084 25.2C112.67 25.6267 112.964 26.2933 112.964 27.2C112.964 27.4133 112.937 27.6 112.884 27.76C112.884 27.92 112.857 28.1067 112.804 28.32C112.75 28.5333 112.59 28.6667 112.324 28.72C112.11 28.7733 112.004 28.6933 112.004 28.48C112.11 27.5733 111.924 26.88 111.444 26.4C111.017 25.8667 110.457 25.6 109.764 25.6C109.284 25.6 108.83 25.7067 108.404 25.92C107.07 26.56 105.897 27.5467 104.884 28.88C103.924 30.16 103.177 31.5733 102.644 33.12C102.164 34.6667 101.924 36.16 101.924 37.6C101.977 40.6933 103.017 42.24 105.044 42.24C106.164 42.24 107.337 41.7867 108.564 40.88C109.79 39.9733 110.857 38.72 111.764 37.12C112.67 35.52 113.39 33.8133 113.924 32C114.457 30.1333 114.724 28.4533 114.724 26.96C114.724 26.0533 114.617 25.2267 114.404 24.48C114.19 23.7333 113.817 23.1733 113.284 22.8C113.017 22.5867 112.59 22.48 112.004 22.48C111.097 22.48 110.404 22.6667 109.924 23.04C109.604 23.2533 109.417 23.36 109.364 23.36C109.15 23.36 109.044 23.2267 109.044 22.96C109.044 22.7467 109.15 22.48 109.364 22.16C109.684 21.6267 110.19 21.2267 110.884 20.96C111.577 20.6933 112.297 20.56 113.044 20.56C113.897 20.56 114.644 20.7467 115.284 21.12C116.67 21.8667 117.364 23.44 117.364 25.84C117.364 27.5467 116.99 29.4667 116.244 31.6C115.55 33.7333 114.564 35.7867 113.284 37.76C112.057 39.68 110.644 41.2533 109.044 42.48C107.124 43.9733 105.204 44.72 103.284 44.72ZM121.806 51.6C120.686 51.6 119.833 51.1467 119.246 50.24C118.66 49.3333 118.233 48.2933 117.966 47.12C117.753 46 117.593 45.04 117.486 44.24C116.633 43.8667 115.94 43.4667 115.406 43.04C114.926 42.56 114.686 42.1333 114.686 41.76C114.686 41.6 114.793 41.4133 115.006 41.2C115.166 40.9867 115.353 40.88 115.566 40.88C115.993 41.04 116.58 41.2533 117.326 41.52C118.126 41.7867 118.953 42.0267 119.806 42.24C120.66 42.4 121.353 42.4533 121.886 42.4C122.046 41.4933 122.153 40.5867 122.206 39.68C122.313 38.72 122.393 37.8133 122.446 36.96C122.553 36.0533 122.66 35.1733 122.766 34.32C122.873 33.4133 123.033 32.5333 123.246 31.68C123.993 29.0667 125.166 26.8267 126.766 24.96C128.42 23.0933 130.766 21.6267 133.806 20.56C134.713 20.2933 135.486 20.16 136.126 20.16C136.926 20.16 137.646 20.32 138.286 20.64C138.926 20.96 139.3 21.44 139.406 22.08C139.46 22.24 139.486 22.4533 139.486 22.72C139.486 23.7867 139.06 24.8267 138.206 25.84C137.406 26.8 136.446 27.6533 135.326 28.4C134.26 29.1467 133.3 29.7067 132.446 30.08C132.393 30.1333 132.366 30.08 132.366 29.92C132.42 29.76 132.446 29.68 132.446 29.68C132.873 29.52 133.486 29.12 134.286 28.48C135.086 27.84 135.753 27.1733 136.286 26.48C136.873 25.7333 137.166 25.0667 137.166 24.48C137.166 23.7333 136.686 23.36 135.726 23.36C135.3 23.36 134.793 23.44 134.206 23.6C132.233 24.1333 130.34 25.04 128.526 26.32C126.766 27.6 125.513 29.28 124.766 31.36C124.446 32.2667 124.206 33.36 124.046 34.64C123.94 35.8667 123.886 37.0933 123.886 38.32C123.886 39.1733 123.913 39.9733 123.966 40.72C124.02 41.4667 124.073 42.0533 124.126 42.48C124.5 42.5333 124.846 42.56 125.166 42.56C125.486 42.56 125.806 42.56 126.126 42.56C127.726 42.56 129.246 42.3467 130.686 41.92C132.18 41.44 133.593 40.6933 134.926 39.68C136.473 38.5067 137.94 37.04 139.326 35.28C140.766 33.52 141.913 32.0267 142.766 30.8C142.82 30.7467 142.9 30.72 143.006 30.72C143.273 30.72 143.406 30.9067 143.406 31.28C143.406 31.3333 143.14 31.7067 142.606 32.4C142.126 33.0933 141.486 33.9467 140.686 34.96C139.94 35.9733 139.113 36.9867 138.206 38C137.353 38.96 136.553 39.76 135.806 40.4C133.993 41.7867 132.206 42.7467 130.446 43.28C128.74 43.76 127.273 44 126.046 44C125.673 44 125.326 44 125.006 44C124.74 43.9467 124.473 43.8933 124.206 43.84C124.153 44.32 124.1 44.96 124.046 45.76C123.993 46.6133 123.886 47.4933 123.726 48.4C123.566 49.3067 123.326 50.0533 123.006 50.64C122.74 51.28 122.34 51.6 121.806 51.6ZM120.046 48.08C120.686 48.08 121.14 47.6267 121.406 46.72L121.806 44.32C121.326 44.32 120.846 44.2933 120.366 44.24C119.886 44.1867 119.326 44.1333 118.686 44.08C118.633 44.4533 118.66 44.9333 118.766 45.52C118.873 46.1067 118.953 46.5333 119.006 46.8C119.166 47.6533 119.513 48.08 120.046 48.08ZM142.772 44.4C142.345 44.4 141.972 44.16 141.652 43.68C141.385 43.2533 141.252 42.9067 141.252 42.64C141.252 42.2667 141.385 41.9467 141.652 41.68C141.919 41.4133 142.239 41.1467 142.612 40.88C143.465 40.24 144.212 39.92 144.852 39.92C145.492 39.92 145.812 40.2133 145.812 40.8C145.812 41.6 145.252 42.56 144.132 43.68C143.652 44.16 143.199 44.4 142.772 44.4Z"
                fill="white"
              />
            </motion.svg>
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default CloeBack;
