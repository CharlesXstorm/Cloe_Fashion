import React, { useState } from "react";
import HomeInfo from "../components/HomeInfo";

const catData = [
  {
    id: 1,
    text: (
      <>
        23 Gele Style <br /> Ideas
      </>
    ),
    src: "../assets/images/gele.jpg" /*geleData[14]*/
  },
  {
    id: 2,
    text: (
      <>
        Hair Style <br /> Ideas
      </>
    ),
    src: "../assets/images/hair.jpg" /*"https://images2.imgbox.com/35/71/5fsl1tFm_o.jpg"*/
  }
];

const Explore = () => {
  const [data, setData] = useState([...catData]);
  return (
    <>
      <HomeInfo catData={data} />
    </>
  );
};

export default Explore;
