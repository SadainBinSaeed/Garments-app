// import React from 'react'

// // Navigation Component
// const Navigation = ({ sections, activeSection, scrollToSection, scrolled }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
//               <span className="text-black font-bold text-xl">SG</span>
//             </div>
//             <span className="text-white text-2xl font-bold">Sadain's Garments</span>
//           </div>

//           <div className="hidden lg:flex items-center gap-8">
//             {sections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => scrollToSection(section.id)}
//                 className={`text-sm font-medium transition-colors duration-300 hover:text-yellow-500 ${
//                   activeSection === section.id ? 'text-yellow-500' : 'text-zinc-300'
//                 }`}
//               >
//                 {section.name}
//               </button>
//             ))}
//           </div>

//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="lg:hidden bg-zinc-900 border-t border-zinc-800">
//           <div className="px-4 py-6 space-y-4">
//             {sections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => {
//                   scrollToSection(section.id);
//                   setIsMenuOpen(false);
//                 }}
//                 className="block w-full text-left text-zinc-300 hover:text-yellow-500 py-2 transition-colors duration-300"
//               >
//                 {section.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;