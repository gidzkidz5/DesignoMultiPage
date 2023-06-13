
// import DesignPageTitle from "./components/DeisgnPageTitle";
// import DesignTab from "./components/DesignTab";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import HomeTitle from "./components/HomeTitle";
// import LocationsIcons from "./components/LocationIcons";
// import LocationsCard from "./components/LocationsCard";
// import ProductCard from "./components/ProductCard";

import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import LocationsCard from './components/LocationsCard';
import WebDesign from './Pages/WebDesign';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import AppDesign from './Pages/AppDesign';
import GraphicDesign from './Pages/GraphicDesign';
import ScrollToTop from './components/ScrollToTop';





function App() {

  

  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
  
          <Route path="web-design" index element={<WebDesign/>} />
          <Route path="app-design" element={<AppDesign/>} />
          <Route path="graphic-design" element={<GraphicDesign/>} />
          


          <Route path="about" element={<About/>} />
          <Route path="locations" element={<LocationsCard/>}/>
        </Route>

        <Route path="contact" element={<Contact/>} />

        <Route path="*" element={<NotFound/>}/>
      </Routes>
     
    </BrowserRouter>
    </>
   
  )
}

export default App
