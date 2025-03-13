import React from 'react'
import Navigation from './components/Navigation';
import TopBanner from './components/TopBanner';
import AboutUs from './components/AboutUs';
import IndustryApplications from './components/IndustryApplications';
import CustomSolutions from './components/CustomSolutions';
import ProductShowcase from './components/ProductShowcase';
import LatestNews from './components/LatestNews';
import CustomerTestimonials from './components/CustomerTestimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <TopBanner />
      <AboutUs />
      <IndustryApplications />
      <CustomSolutions />
      <ProductShowcase />
      <LatestNews />
      <CustomerTestimonials />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
