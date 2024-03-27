import React, { useEffect, useRef, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import style from "../components/HomeInfo.module.css";
import hoverstyle from "../components/NavBar.module.css";
import transit from "../components/HomeInfo.module.css";

const services = [
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
  },
  {
    value: "Log",
    label: "Logistics"
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
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [serv, setServ] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [messages, setMessage] = useState("");
  const [errorColor, setErrorColor] = useState("#fff");

  // const mailRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, [4000]);

    // setMail(mailRef.current.target);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onMailChangeHandler = (e) => {
    setMail(e.target.value);
  };
  const servChange = (e) => {
    setServ(e.target.value);
  };

  const submit = () => {
    // console.log(mail);
    if (
      mail.trim() === "" ||
      name.trim() === "" ||
      !mail.trim().includes("@")
    ) {
      setMessage(
        "Please check if name is included or email is written properly with the '@' symbol"
      );
      setErrorColor("#fff");
      setIsSubmitted(true);
      // console.log(

      // );
    } else {
      setMessage(
        <>
          Hi {name}, thank you for requesting a call.
          <br /> We'll reach out to you shortly.
        </>
      );
      setErrorColor("orange");
      setIsSubmitted(true);
    }
  };

  // console.log(name);

  return (
    <motion.div
      className={style.clipPath}
      initial={{ clipPath: "circle(0% at 0% 0%)" }}
      animate={{
        clipPath: "circle(250% at 0% 0%)",
        // backgroundColor: "#fff"
        backgroundColor: "#242424"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }} //delay: 4,
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
          height: "120px",
          zIndex: 3
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
                // onSubmit={(e) => {
                //   e.preventDefault();
                //   alert("submited!!");
                // }}
                // component={"form"}
                className={style.form}
                method="post"
                action="#"
                sx={{
                  width: { lg: "600px", xs: "100%" },
                  marginTop: "20px",
                  marginBottom: "50px",
                  zIndex: "0"
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
                  onChange={onNameChangeHandler}
                />
                <CssTextField
                  onChange={onMailChangeHandler}
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
                  onChange={servChange}
                  select
                  sx={{ marginBottom: "20px" }}
                  label="Service Required"
                  value={serv}
                  id="service"
                >
                  {services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </CssTextField>
                <Button
                  onClick={submit}
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
                  {/* <br />
                  Click here to view the addresses */}
                  <br />
                  <br />
                </Typography>
                <Box
                  className={hoverstyle.link}
                  style={{
                    // border: "2px solid red",
                    width: "140px",
                    cursor: "pointer"
                  }}
                  // href="#1"
                >
                  <Typography
                    data-text="enquire@cloe.info"
                    className={hoverstyle.hover}
                  >
                    enquire@cloe.info
                  </Typography>
                </Box>
                <Box
                  mt={"20px"}
                  className={hoverstyle.link}
                  style={{
                    // border: "2px solid red",
                    width: "140px",
                    cursor: "pointer"
                  }}
                  // href="#1"
                >
                  <Typography
                    data-text="+123456789"
                    className={hoverstyle.hover}
                  >
                    +123456789
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        }
      </Box>

      <AnimatePresence>
        {
          //error modal starts
          isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                zIndex: "5",
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100vw",
                height: "100vh",
                margin: "auto",
                padding: "10px",
                backgroundColor: "rgba(0,0,0,0.7)"
              }}
            >
              <Box
                sx={{
                  // zIndex: "4",
                  position: "fixed",
                  top: 420,
                  left: { lg: "20%", xs: "0px" },
                  width: { lg: "60%", xs: "100%" },
                  height: "200px",
                  margin: "auto",
                  padding: "0px 10px",
                  backgroundColor: `${errorColor}`
                }}
              >
                <Stack
                  p="20px"
                  sx={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    color: "#fff",
                    backgroundColor: "#000",
                    borderRadius: "0px 0px 8px 8px"
                  }}
                >
                  <span
                    onClick={() => setIsSubmitted(false)}
                    style={{ cursor: "pointer" }}
                    className="material-symbols-outlined"
                  >
                    close
                  </span>
                </Stack>
                <Typography
                  fontSize={"20px"}
                  mt="25px"
                  sx={{ textAlign: "center" }}
                >
                  {messages}
                </Typography>
              </Box>
            </motion.div>
          ) //error modal ends
        }
      </AnimatePresence>

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
        className={transit.circleTrans}
        initial={{ originX: 0 }}
        exit={{ scale: 3000, top: 10, originX: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default Contact;
