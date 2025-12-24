// import React from 'react'

// const ContactSection = ({ formData, setFormData, handleSubmit }) => (
//   <section id="contact" className="py-20 px-4 bg-black">
//     <div className="max-w-7xl mx-auto">
//       <SectionHeader title="Contact Us" subtitle="Get in Touch With Us" />
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
//         <ContactInfo />
//       </div>
//     </div>
//   </section>
// );

// export default ContactSection


import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = ({ formData, setFormData, handleSubmit }) => (
  <section id="contact" className="py-20 px-4 bg-black">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeader title="Contact Us" subtitle="Get in Touch With Us" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ContactForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />

        {/* Contact Info */}
        <ContactInfo />
      </div>
    </div>
  </section>
);

export default ContactSection;
