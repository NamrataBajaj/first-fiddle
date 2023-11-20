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
      {/* <Navbar />
       <Home/>
       <Contact /> 
       <Mapped />
      <Team/>
      <Brand/>
      <Brand1/> 
      <Press/>
      <Press1/> 
      <Details/> 
       <Cards/>
       <Footer/> */}


      {/* HGJGVHGHJ */}

      {/* <Details/> 
       <Cards/> */}

      {/* <Press/>
      <Press1/>  */}

      {/* <Brand/>
      <Brand1/>  */}

      {/* <Contact /> 
       <Mapped />
      <Team/> */}

      {/* <Footer/> */}


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Brand' element={<Brand />} />
          <Route path='/Press' element={<Press />} />
          <Route path='/Details' element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
