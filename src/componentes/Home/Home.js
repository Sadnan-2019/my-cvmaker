import React from "react";
import Allarticale from "../Allarticale/Allarticale";
import Guarantee from "../Guarantee/Guarantee";
import Landingpage from "../Landingpage/Landingpage";
import Steps from "../Steps/Steps";

const Home = () => {
  return (
    <div>
      <Landingpage></Landingpage>
      {/* <Allarticale></Allarticale> */}
      <Steps></Steps>
      {/* <Price></Price> */}
      <Guarantee></Guarantee>
    </div>
  );
};

export default Home;
