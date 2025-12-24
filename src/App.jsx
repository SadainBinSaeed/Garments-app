import React, { useState, useEffect } from 'react';
import {DATA} from './data/DATA'; // Make sure your DATA object is in a separate file (DATA.js)
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import "./App.css"

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Handle contact form submit
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}
      <Navigation 
        sections={DATA.sections} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        scrolled={scrolled} 
      />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* Product Sections */}
      {DATA.productCategories.map((category) => (
        <ProductSection 
          key={category.id}
          id={category.id} 
          title={category.title} 
          subtitle={category.subtitle} 
          products={DATA.products[category.products]} 
          bgClass={category.bgClass} 
        />
      ))}

      {/* Reviews Section */}
      <ReviewsSection reviews={DATA.reviews} />

      {/* Contact Section */}
      <ContactSection 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
