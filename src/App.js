import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header';
import Landingpage from './componentes/Landingpage/Landingpage';
import Footer from './componentes/Footer/Footer';
import Allarticale from './componentes/Allarticale/Allarticale';
import Steps from './componentes/Steps/Steps';
import Banner from './componentes/Banner/Banner';
import Price from './componentes/Price/Price';

function App() {
  return (
    <div className="">
    <Header></Header>
    <Landingpage></Landingpage>
    {/* <Allarticale></Allarticale> */}
    <Banner></Banner>
    <Steps></Steps>
    <Price></Price>
    <Footer></Footer>
    </div>
  );
}

export default App;
