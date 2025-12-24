import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, ChevronRight, Star, Mail, Phone, MapPin, Send } from 'lucide-react';
import './App.css'

// ==================== DATA FILE ====================
const DATA = {
  sections: [
    { id: 'home', name: 'Home' },
    { id: 'boys-full', name: "Boys Full Sleeves" },
    { id: 'boys-half', name: "Boys Half Sleeves" },
    { id: 'girls-full', name: "Girls Full Sleeves" },
    { id: 'girls-half', name: "Girls Half Sleeves" },
    { id: 'trousers', name: 'Trousers & Pants' },
    { id: 'cargo', name: 'Cargo Baggy' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'contact', name: 'Contact Us' }
  ],
  
  products: {
    boysFull: [
      { id: 1, name: 'Premium Formal Shirt', price: 1299, category: 'Formal', img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400' },
      { id: 2, name: 'Casual Cotton Shirt', price: 899, category: 'Casual', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
      { id: 3, name: 'Classic Oxford Shirt', price: 1499, category: 'Formal', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400' },
      { id: 4, name: 'Denim Full Sleeve', price: 1199, category: 'Casual', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' }
    ],
    boysHalf: [
      { id: 5, name: 'Polo T-Shirt', price: 699, category: 'Casual', img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400' },
      { id: 6, name: 'Summer Casual Shirt', price: 799, category: 'Casual', img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400' },
      { id: 7, name: 'Formal Half Sleeve', price: 999, category: 'Formal', img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400' },
      { id: 8, name: 'Printed Casual Shirt', price: 849, category: 'Casual', img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400' }
    ],
    girlsFull: [
      { id: 9, name: 'Elegant Formal Shirt', price: 1399, category: 'Formal', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400' },
      { id: 10, name: 'Cotton Casual Top', price: 999, category: 'Casual', img: 'https://images.unsplash.com/photo-1564257577154-75d8a4edb653?w=400' },
      { id: 11, name: 'Designer Full Sleeve', price: 1599, category: 'Formal', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400' },
      { id: 12, name: 'Floral Casual Shirt', price: 1199, category: 'Casual', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400' }
    ],
    girlsHalf: [
      { id: 13, name: 'Summer Formal Top', price: 899, category: 'Formal', img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400' },
      { id: 14, name: 'Casual Half Sleeve', price: 799, category: 'Casual', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400' },
      { id: 15, name: 'Trendy Crop Top', price: 699, category: 'Casual', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400' },
      { id: 16, name: 'Office Wear Top', price: 1099, category: 'Formal', img: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400' }
    ],
    trousers: [
      { id: 17, name: 'Formal Trousers', price: 1499, category: 'Formal', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400' },
      { id: 18, name: 'Chino Pants', price: 1299, category: 'Casual', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400' },
      { id: 19, name: 'Slim Fit Trousers', price: 1399, category: 'Formal', img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400' },
      { id: 20, name: 'Cotton Pants', price: 999, category: 'Casual', img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400' }
    ],
    cargo: [
      { id: 21, name: 'Cargo Baggy Pants', price: 1599, category: 'Casual', img: 'https://images.unsplash.com/photo-1624378440070-ed4b1b6d9e6e?w=400' },
      { id: 22, name: 'Military Style Cargo', price: 1799, category: 'Casual', img: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400' },
      { id: 23, name: 'Utility Baggy Pants', price: 1699, category: 'Casual', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400' },
      { id: 24, name: 'Street Style Cargo', price: 1899, category: 'Casual', img: 'https://images.unsplash.com/photo-1563933831-d3e51b655619?w=400' }
    ]
  },
  
  reviews: [
    { id: 1, name: 'Ahmed Khan', rating: 5, text: 'Amazing quality! The formal shirts are perfect for office wear. Highly recommended!', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 2, name: 'Fatima Ali', rating: 5, text: 'Best garments shop in town! The girls collection is trendy and comfortable.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 3, name: 'Usman Malik', rating: 4, text: 'Great variety of cargo pants. Perfect fit and excellent material quality.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    { id: 4, name: 'Ayesha Rehman', rating: 5, text: 'Love the casual shirts collection! Fast delivery and great customer service.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    { id: 5, name: 'Hassan Raza', rating: 5, text: 'Premium quality at affordable prices. Will definitely shop again!', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150' },
    { id: 6, name: 'Zara Sheikh', rating: 4, text: 'Beautiful formal wear collection. The fitting is perfect and fabric is excellent.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' }
  ],
  
  productCategories: [
    { id: 'boys-full', title: 'Boys Full Sleeves', subtitle: 'Formal & Casual Collection', products: 'boysFull', bgClass: 'bg-gradient-to-b from-black to-zinc-900' },
    { id: 'boys-half', title: 'Boys Half Sleeves', subtitle: 'Stay Cool & Stylish', products: 'boysHalf', bgClass: 'bg-zinc-900' },
    { id: 'girls-full', title: 'Girls Full Sleeves', subtitle: 'Elegant & Comfortable', products: 'girlsFull', bgClass: 'bg-gradient-to-b from-zinc-900 to-black' },
    { id: 'girls-half', title: 'Girls Half Sleeves', subtitle: 'Trendy Summer Collection', products: 'girlsHalf', bgClass: 'bg-black' },
    { id: 'trousers', title: 'Trousers & Pants', subtitle: 'Perfect Fit for Every Occasion', products: 'trousers', bgClass: 'bg-gradient-to-b from-black to-zinc-900' },
    { id: 'cargo', title: 'Cargo Baggy Pants', subtitle: 'Street Style & Comfort', products: 'cargo', bgClass: 'bg-zinc-900' }
  ]
};

// ==================== NAVIGATION COMPONENT ====================
const Navigation = ({ sections, activeSection, scrollToSection, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">SG</span>
            </div>
            <span className="text-white text-2xl font-bold">Sadain's Garments</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-yellow-500 ${
                  activeSection === section.id ? 'text-yellow-500' : 'text-zinc-300'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-4 py-6 space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-zinc-300 hover:text-yellow-500 py-2 transition-colors duration-300"
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// ==================== HERO SECTION COMPONENT ====================
const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90"></div>
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Welcome to <span className="text-yellow-500">Sadain's Garments</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-8">Premium Quality Clothing for Boys & Girls</p>
        <button onClick={() => scrollToSection('boys-full')} className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 inline-flex items-center gap-2">
          Shop Now <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

// ==================== SECTION HEADER COMPONENT ====================
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
    <p className="text-zinc-400 text-lg">{subtitle}</p>
    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
  </div>
);

// ==================== PRODUCT CARD COMPONENT ====================
const ProductCard = ({ product }) => (
  <div className="group bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-zinc-800 hover:border-zinc-600">
    <div className="relative overflow-hidden h-64">
      <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
        {product.category}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
      <div className="flex justify-between items-center">
        <span className="text-yellow-500 font-bold text-xl">₹{product.price}</span>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2">
          <ShoppingCart size={16} />
          Add
        </button>
      </div>
    </div>
  </div>
);

// ==================== PRODUCT SECTION COMPONENT ====================
const ProductSection = ({ id, title, subtitle, products, bgClass }) => (
  <section id={id} className={`py-20 px-4 ${bgClass}`}>
    <div className="max-w-7xl mx-auto">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

// ==================== REVIEW CARD COMPONENT ====================
const ReviewCard = ({ review }) => (
  <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
    <div className="flex items-center gap-4 mb-4">
      <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" />
      <div>
        <h3 className="text-white font-semibold text-lg">{review.name}</h3>
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-zinc-400 leading-relaxed">{review.text}</p>
  </div>
);

// ==================== REVIEWS SECTION COMPONENT ====================
const ReviewsSection = ({ reviews }) => (
  <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Client Reviews" subtitle="What Our Customers Say" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  </section>
);

// ==================== CONTACT FORM COMPONENT ====================
const ContactForm = ({ formData, setFormData, handleSubmit }) => (
  <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
    <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
    <div className="space-y-6">
      <div>
        <label className="block text-zinc-400 mb-2">Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-zinc-400 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-zinc-400 mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors h-32 resize-none"
          placeholder="Write your message here..."
        ></textarea>
      </div>
      <button onClick={handleSubmit} className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-2">
        <Send size={20} />
        Send Message
      </button>
    </div>
  </div>
);

// ==================== CONTACT INFO COMPONENT ====================
const ContactInfo = () => (
  <div className="space-y-8">
    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 p-3 rounded-lg">
          <Phone className="text-black" size={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-xl mb-2">Phone</h3>
          <p className="text-zinc-400">+92 300 1234567</p>
          <p className="text-zinc-400">+92 321 9876543</p>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 p-3 rounded-lg">
          <Mail className="text-black" size={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-xl mb-2">Email</h3>
          <p className="text-zinc-400">info@sadainsgarments.com</p>
          <p className="text-zinc-400">support@sadainsgarments.com</p>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 p-3 rounded-lg">
          <MapPin className="text-black" size={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-xl mb-2">Location</h3>
          <p className="text-zinc-400">Shop #123, Main Market</p>
          <p className="text-zinc-400">Hyderabad, Sindh, Pakistan</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 rounded-lg text-black">
      <h3 className="font-bold text-2xl mb-2">Store Hours</h3>
      <p className="mb-1">Monday - Saturday: 10:00 AM - 9:00 PM</p>
      <p>Sunday: 11:00 AM - 8:00 PM</p>
    </div>
  </div>
);

// ==================== CONTACT SECTION COMPONENT ====================
const ContactSection = ({ formData, setFormData, handleSubmit }) => (
  <section id="contact" className="py-20 px-4 bg-black">
    <div className="max-w-7xl mx-auto">
      <SectionHeader title="Contact Us" subtitle="Get in Touch With Us" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        <ContactInfo />
      </div>
    </div>
  </section>
);

// ==================== FOOTER COMPONENT ====================
const Footer = () => (
  <footer className="bg-black border-t border-zinc-800 py-12 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-xl">SG</span>
        </div>
        <span className="text-white text-2xl font-bold">Sadain's Garments</span>
      </div>
      <p className="text-zinc-400 mb-4">Quality Clothing for Boys & Girls</p>
      <p className="text-zinc-500 text-sm">© 2024 Sadain's Garments. All rights reserved.</p>
    </div>
  </footer>
);

// ==================== MAIN APP COMPONENT ====================
const GarmentsWebsite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

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
      <Navigation 
        sections={DATA.sections} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        scrolled={scrolled} 
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      
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
      
      <ReviewsSection reviews={DATA.reviews} />
      
      <ContactSection 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
      />
      
      <Footer />
    </div>
  );
};

export default GarmentsWebsite;