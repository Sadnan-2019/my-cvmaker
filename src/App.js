import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header';
import Landingpage from './componentes/Landingpage/Landingpage';
import Footer from './componentes/Footer/Footer';
import Allarticale from './componentes/Allarticale/Allarticale';
import Steps from './componentes/Steps/Steps';
import Banner from './componentes/Banner/Banner';
import Price from './componentes/Price/Price';
import Guarantee from './componentes/Guarantee/Guarantee';
import { Route, Routes } from "react-router-dom";
import Login from './componentes/Login/Login';
import CvWriting from './componentes/CvWriting/CvWriting';
import Home from './componentes/Home/Home';


function App() {
  return (
    <div className="">
    <Header></Header>


    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}> </Route>
      <Route path='/cv-writing' element={<CvWriting/>}> </Route>
    </Routes>
 
    {/* <Allarticale></Allarticale> */}
    {/* <Banner></Banner> */}
   
    <Footer></Footer>
    </div>
  );
}

export default App;
