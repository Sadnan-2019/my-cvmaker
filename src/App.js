import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header/Header";

import Footer from "./componentes/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import Login from "./componentes/Login/Login";
import CvWriting from "./componentes/CvWriting/CvWriting";
import Home from "./componentes/Home/Home";
import Register from "./componentes/Register/Register";
import Profile from "./componentes/Profile/Profile";
import EditProfile from "./componentes/Profile/EditProfile";

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
        <Route path="/profile" element={<Profile />}>
          {" "}
        </Route>
        <Route path="/edit-profile" element={<EditProfile />}>
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
