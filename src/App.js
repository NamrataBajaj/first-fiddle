import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Details from './Details/Details';
import Press from './Press/Press';
import Brand from './Brand/Brand';
import Contact from './contact/contact';
import Footer from './footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' Component={<Home />} />
          <Route path='/contact' Component={<Contact />} />
          <Route path='/Brand' Component={<Brand />} />
          <Route path='/Press' Component={<Press />} />
          <Route path='/Details' Component={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
