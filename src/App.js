import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header/Header";

import Footer from "./componentes/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import Login from "./componentes/Login/Login";
import CvWriting from "./componentes/CvWriting/CvWriting";
import Home from "./componentes/Home/Home";
import Register from "./componentes/Register/Register";

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/cv-writing" element={<CvWriting />}>
          {" "}
        </Route>
      </Routes>

      {/* <Allarticale></Allarticale> */}
      {/* <Banner></Banner> */}

      <Footer></Footer>
    </div>
  );
}

export default App;
