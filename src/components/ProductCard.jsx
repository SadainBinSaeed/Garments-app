// import React from 'react'

// const ProductCard = ({ product }) => (
//   <div className="group bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-zinc-800 hover:border-zinc-600">
//     <div className="relative overflow-hidden h-64">
//       <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//       <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
//         {product.category}
//       </div>
//     </div>
//     <div className="p-4">
//       <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
//       <div className="flex justify-between items-center">
//         <span className="text-yellow-500 font-bold text-xl">₹{product.price}</span>
//         <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2">
//           <ShoppingCart size={16} />
//           Add
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default ProductCard;