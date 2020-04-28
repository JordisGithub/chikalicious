import React from 'react';
import './App.css';
import { render } from 'react-dom';
import Nav from "./components/Nav/Nav";
import MobileNav from './components/Nav/MobileNav';
import Hero from './components/Hero/Hero';
import Reviews from "./components/Reviews/Reviews";
import Footer from './components/Footer/Footer';
// import Hero from "./components/Hero/Hero";
import HeroFoodPhotos from "./components/HeroFoodPhotos/HeroFoodPhotos";
// import Menu from "./components/Menu/Menu";
import OurStory from "./components/OurStory/OurStory";
// import SupportUs from "./components/SupportUs/SupportUs";
// import Contact from "./components/Contact/Contact";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <MobileNav />
      <Hero />
      <HeroFoodPhotos />
      <OurStory />
      <PhotoGallery />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
