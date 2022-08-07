import React from "react";
import Allarticale from "../Allarticale/Allarticale";
import Guarantee from "../Guarantee/Guarantee";
import Landingpage from "../Landingpage/Landingpage";
import Start from "../Start/Start";
import Steps from "../Steps/Steps";

const Home = () => {
  return (
    <div>
      <Landingpage></Landingpage>
      {/* <Allarticale></Allarticale> */}
      <Steps></Steps>
      {/* <Price></Price> */}
      <Guarantee></Guarantee>
      <Start></Start>
    </div>
  );
};

export default Home;
