import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Nav from "./components/Nav/Nav";
import MobileNav from './components/Nav/MobileNav';
import Hero from './components/Hero/Hero';
import Reviews from "./components/Reviews/Reviews";
import Footer from './components/Footer/Footer';
import BackDrop from './components/Nav/BackDrop'
import HeroFoodPhotos from "./components/HeroFoodPhotos/HeroFoodPhotos";
import Menu from "./components/Menu/Menu";
import OurStory from "./components/OurStory/OurStory";
import Contact from './components/Contact/Contact';
import SupportUs from "./components/SupportUs/SupportUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";


class App extends Component {
  state = {
    mobileMenuOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  };
  backdropClickHandler = () => {
    this.setState({ mobileMenuOpen: false })
  }

  render() {
    let backDrop;
    if (this.state.mobileMenuOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler} />;
    }


    return (
      <>
        <Nav drawerClickHandler={this.drawerToggleClickHandler} />
        <MobileNav show={this.state.mobileMenuOpen} />
        {backDrop}
        <Hero />
        <HeroFoodPhotos />
        <Menu />
        <OurStory />
        <SupportUs />
        <Contact />
        <PhotoGallery />
        <Reviews />
        <Footer />
      </>
    );
  }
}
export default App;
