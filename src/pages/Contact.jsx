import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Skeleton,
  TextField,
  MenuItem,
  FormControl,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import style from "../components/HomeInfo.module.css";

const services = [
  {
    value: "Log",
    label: "Logistics"
  },
  {
    value: "Con",
    label: "Consulting"
  },
  {
    value: "Des",
    label: "Design"
  },
  {
    value: "Src",
    label: "Sourcing"
  }
];

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "orange"
  },
  "& label": {
    color: "#fff"
  },
  "&:hover label": {
    color: "orange"
  },
  fontFamily: "newyorkregular",
  "& .MuiInputBase-input": {
    color: "orange"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderBottomColor: "#fff"
    },
    "&:hover fieldset": {
      borderColor: "orange"
    },

    "&.Mui-focused fieldset": {
      borderColor: "orange"
    }
  }
});

const Contact = () => {
  const [loading, setLoading] = useState(true);
  // const [dvWidth, setdvWidth] = useState(800);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, [4000]);

    // setdvWidth(window.innerWidth);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const onChangeHandler = (e) => {
    alert(e.target.value);
  };

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
      <Box
        // mt={"140px"}
        sx={{
          marginTop: { lg: "250px", xs: "200px" },
          width: "100vw"
          // border: "2px solid red"
        }}
        // fontFamily={"mutalis_fashion_personal_usRg"}
        // fontSize={"80px"}
        color={"#fff"}
      >
        {
          <Stack
            sx={{
              flexDirection: { lg: "row" },
              gap: { lg: "4em", xs: "40px" },
              justifyContent: "center",

              width: { lg: "80%", xs: "90%" },

              // border: "2px solid green",
              margin: "auto",
              paddingBottom: "80px"
              // fontFamily: "mutalis_fashion_personal_usRg"
            }}
          >
            <Box width={"auto"}>
              <Typography
                // variant="h2"
                fontWeight={"250"}
                fontSize={"40px"}
                fontFamily={"newyorkregular"}
                color="orange"
              >
                Request A Call
              </Typography>
              <FormControl
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("submited!!");
                }}
                // component={"form"}
                className={style.form}
                method="post"
                action="#"
                sx={{
                  width: { lg: "600px", xs: "100%" },
                  marginTop: "20px",
                  marginBottom: "50px"
                  // border: "2px solid blue"
                }}
              >
                <CssTextField
                  required
                  sx={{ marginBottom: "20px" }}
                  label="Name"
                  id="name"
                  // type="password"
                  // value={"pascal"}
                  // focused={true}
                  onChange={onChangeHandler}
                />
                <CssTextField
                  required
                  sx={{ marginBottom: "20px" }}
                  label="Email"
                  id="name"
                />
                <CssTextField
                  sx={{ marginBottom: "20px" }}
                  label="Phone number"
                  id="Phone Number"
                />
                <CssTextField
                  select
                  sx={{ marginBottom: "20px" }}
                  label="Service Required"
                  id="service"
                >
                  {services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CssTextField>
                <Button
                  // onClick={(e) => {
                  //   alert("submited!!");
                  // }}
                  type="submit"
                  variant="outlined"
                  className={style.btn}
                  sx={{
                    padding: "8px",
                    width: { lg: "20%" },
                    border: "1px solid orange",
                    color: "orange",
                    ":hover": {
                      border: "1px solid orange",
                      backgroundColor: "rgba(255, 166, 0, 0.13)"
                    }
                  }}
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
            <Box width={"auto"}>
              <Typography
                // variant="h2"
                fontWeight={"250"}
                fontSize={"40px"}
                fontFamily={"newyorkregular"}
                color="orange"
              >
                Contact
              </Typography>
              <Box
                sx={{ width: { lg: "500px", xs: "90%" }, marginTop: "20px" }}
              >
                <Typography
                  lineHeight={"30px"}
                  color="#fff"
                  fontFamily={"Roboto"}
                  fontWeight={"light"}
                >
                  Cloe has 15 company offices internationally, with dedicated
                  team members ready to support your needs, globally.
                  <br />
                  Click here to view the addresses
                  <br />
                  <br />
                  enquire@cloe.info
                  <br />
                  +123456789
                </Typography>
              </Box>
            </Box>
          </Stack>
        }
      </Box>
      {
        //backdropstart
        <motion.div
          style={{
            marginBottom: "1em",
            backgroundColor: "#242424",
            position: "fixed",
            zIndex: "-1",
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
    </motion.div>
  );
};

export default Contact;
