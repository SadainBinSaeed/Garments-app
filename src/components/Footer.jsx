// import React from 'react'

// const Footer = () => (
//   <footer className="bg-black border-t border-zinc-800 py-12 px-4">
//     <div className="max-w-7xl mx-auto text-center">
//       <div className="flex items-center justify-center gap-3 mb-6">
//         <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
//           <span className="text-black font-bold text-xl">SG</span>
//         </div>
//         <span className="text-white text-2xl font-bold">Sadain's Garments</span>
//       </div>
//       <p className="text-zinc-400 mb-4">Quality Clothing for Boys & Girls</p>
//       {/* <p className="text-zinc-500 text-sm">© 2024 Sadain's Garments. All rights reserved.</p> */}
//     </div>
//   </footer>
// );


// export default Footer


import React from 'react';

const Footer = () => (
  <footer className="bg-black border-t border-zinc-800 py-12 px-4">
    <div className="max-w-7xl mx-auto text-center">
      {/* Logo and Name */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-xl">SG</span>
        </div>
        <span className="text-white text-2xl font-bold">Sadain's Garments</span>
      </div>

      {/* Description */}
      <p className="text-zinc-400 mb-4">Quality Clothing for Boys & Girls</p>

      {/* Copyright */}
      <p className="text-zinc-500 text-sm">© 2024 Sadain's Garments. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
