// import React from 'react'

// const ReviewCard = ({ review }) => (
//   <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
//     <div className="flex items-center gap-4 mb-4">
//       <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" />
//       <div>
//         <h3 className="text-white font-semibold text-lg">{review.name}</h3>
//         <div className="flex gap-1">
//           {[...Array(review.rating)].map((_, i) => (
//             <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
//           ))}
//         </div>
//       </div>
//     </div>
//     <p className="text-zinc-400 leading-relaxed">{review.text}</p>
//   </div>
// );

// export default ReviewCard

import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => (
  <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
    {/* Reviewer Info */}
    <div className="flex items-center gap-4 mb-4">
      <img 
        src={review.img} 
        alt={review.name} 
        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" 
      />
      <div>
        <h3 className="text-white font-semibold text-lg">{review.name}</h3>
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>
    </div>

    {/* Review Text */}
    <p className="text-zinc-400 leading-relaxed">{review.text}</p>
  </div>
);

export default ReviewCard;
