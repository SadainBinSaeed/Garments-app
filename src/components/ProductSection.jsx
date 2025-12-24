// import React from 'react'

// const ProductSection = ({ id, title, subtitle, products, bgClass }) => (
//   <section id={id} className={`py-20 px-4 ${bgClass}`}>
//     <div className="max-w-7xl mx-auto">
//       <SectionHeader title={title} subtitle={subtitle} />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ProductSection;


import React from 'react';
import SectionHeader from './SectionHeader';
import ProductCard from './ProductCard';

const ProductSection = ({ id, title, subtitle, products, bgClass }) => (
  <section id={id} className={`py-20 px-4 ${bgClass}`}>
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeader title={title} subtitle={subtitle} />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;
