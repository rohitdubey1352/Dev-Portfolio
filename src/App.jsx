import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import "./App.css";
import img1 from "./assets/Img/Gradient1.png";
import img2 from "./assets/Img/Gradient2.png";
import img3 from "./assets/Img/Gradient4.png";

const App = () => {
  return (
    <BrowserRouter>

      <Main>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>

        <img src={img1} className='img1' alt="img1" />
        <img src={img2} className='img2' alt="img2" />
        <img src={img3} className='img2' alt="img3" />

        <div className="footer">
          <Footer />
        </div>

      </Main>

    </BrowserRouter>
  )
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .img1{
    position: absolute;
    width: 460px;
    top: -8rem;
    left: -8rem;
    z-index: -1;
  }
  .img2{
    position: absolute;
    width: 450px;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}

`;

export default App;