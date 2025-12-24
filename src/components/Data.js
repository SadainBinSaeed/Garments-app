// const DATA = {
//   sections: [
//     { id: 'home', name: 'Home' },
//     { id: 'boys-full', name: "Boys Full Sleeves" },
//     { id: 'boys-half', name: "Boys Half Sleeves" },
//     { id: 'girls-full', name: "Girls Full Sleeves" },
//     { id: 'girls-half', name: "Girls Half Sleeves" },
//     { id: 'trousers', name: 'Trousers & Pants' },
//     { id: 'cargo', name: 'Cargo Baggy' },
//     { id: 'reviews', name: 'Reviews' },
//     { id: 'contact', name: 'Contact Us' }
//   ],
  
//   products: {
//     boysFull: [
//       { id: 1, name: 'Premium Formal Shirt', price: 1299, category: 'Formal', img: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400' },
//       { id: 2, name: 'Casual Cotton Shirt', price: 899, category: 'Casual', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400' },
//       { id: 3, name: 'Classic Oxford Shirt', price: 1499, category: 'Formal', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400' },
//       { id: 4, name: 'Denim Full Sleeve', price: 1199, category: 'Casual', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400' }
//     ],
//     boysHalf: [
//       { id: 5, name: 'Polo T-Shirt', price: 699, category: 'Casual', img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400' },
//       { id: 6, name: 'Summer Casual Shirt', price: 799, category: 'Casual', img: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400' },
//       { id: 7, name: 'Formal Half Sleeve', price: 999, category: 'Formal', img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=400' },
//       { id: 8, name: 'Printed Casual Shirt', price: 849, category: 'Casual', img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400' }
//     ],
//     girlsFull: [
//       { id: 9, name: 'Elegant Formal Shirt', price: 1399, category: 'Formal', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400' },
//       { id: 10, name: 'Cotton Casual Top', price: 999, category: 'Casual', img: 'https://images.unsplash.com/photo-1564257577154-75d8a4edb653?w=400' },
//       { id: 11, name: 'Designer Full Sleeve', price: 1599, category: 'Formal', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400' },
//       { id: 12, name: 'Floral Casual Shirt', price: 1199, category: 'Casual', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400' }
//     ],
//     girlsHalf: [
//       { id: 13, name: 'Summer Formal Top', price: 899, category: 'Formal', img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400' },
//       { id: 14, name: 'Casual Half Sleeve', price: 799, category: 'Casual', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=400' },
//       { id: 15, name: 'Trendy Crop Top', price: 699, category: 'Casual', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400' },
//       { id: 16, name: 'Office Wear Top', price: 1099, category: 'Formal', img: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400' }
//     ],
//     trousers: [
//       { id: 17, name: 'Formal Trousers', price: 1499, category: 'Formal', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400' },
//       { id: 18, name: 'Chino Pants', price: 1299, category: 'Casual', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400' },
//       { id: 19, name: 'Slim Fit Trousers', price: 1399, category: 'Formal', img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400' },
//       { id: 20, name: 'Cotton Pants', price: 999, category: 'Casual', img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400' }
//     ],
//     cargo: [
//       { id: 21, name: 'Cargo Baggy Pants', price: 1599, category: 'Casual', img: 'https://images.unsplash.com/photo-1624378440070-ed4b1b6d9e6e?w=400' },
//       { id: 22, name: 'Military Style Cargo', price: 1799, category: 'Casual', img: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400' },
//       { id: 23, name: 'Utility Baggy Pants', price: 1699, category: 'Casual', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400' },
//       { id: 24, name: 'Street Style Cargo', price: 1899, category: 'Casual', img: 'https://images.unsplash.com/photo-1563933831-d3e51b655619?w=400' }
//     ]
//   },
  
//   reviews: [
//     { id: 1, name: 'Ahmed Khan', rating: 5, text: 'Amazing quality! The formal shirts are perfect for office wear. Highly recommended!', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
//     { id: 2, name: 'Fatima Ali', rating: 5, text: 'Best garments shop in town! The girls collection is trendy and comfortable.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
//     { id: 3, name: 'Usman Malik', rating: 4, text: 'Great variety of cargo pants. Perfect fit and excellent material quality.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
//     { id: 4, name: 'Ayesha Rehman', rating: 5, text: 'Love the casual shirts collection! Fast delivery and great customer service.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
//     { id: 5, name: 'Hassan Raza', rating: 5, text: 'Premium quality at affordable prices. Will definitely shop again!', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150' },
//     { id: 6, name: 'Zara Sheikh', rating: 4, text: 'Beautiful formal wear collection. The fitting is perfect and fabric is excellent.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' }
//   ],
  
//   productCategories: [
//     { id: 'boys-full', title: 'Boys Full Sleeves', subtitle: 'Formal & Casual Collection', products: 'boysFull', bgClass: 'bg-gradient-to-b from-black to-zinc-900' },
//     { id: 'boys-half', title: 'Boys Half Sleeves', subtitle: 'Stay Cool & Stylish', products: 'boysHalf', bgClass: 'bg-zinc-900' },
//     { id: 'girls-full', title: 'Girls Full Sleeves', subtitle: 'Elegant & Comfortable', products: 'girlsFull', bgClass: 'bg-gradient-to-b from-zinc-900 to-black' },
//     { id: 'girls-half', title: 'Girls Half Sleeves', subtitle: 'Trendy Summer Collection', products: 'girlsHalf', bgClass: 'bg-black' },
//     { id: 'trousers', title: 'Trousers & Pants', subtitle: 'Perfect Fit for Every Occasion', products: 'trousers', bgClass: 'bg-gradient-to-b from-black to-zinc-900' },
//     { id: 'cargo', title: 'Cargo Baggy Pants', subtitle: 'Street Style & Comfort', products: 'cargo', bgClass: 'bg-zinc-900' }
//   ]
// };
