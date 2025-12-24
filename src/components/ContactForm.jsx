// import React from 'react'

// const ContactForm = ({ formData, setFormData, handleSubmit }) => (
//   <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
//     <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
//     <div className="space-y-6">
//       <div>
//         <label className="block text-zinc-400 mb-2">Your Name</label>
//         <input
//           type="text"
//           value={formData.name}
//           onChange={(e) => setFormData({...formData, name: e.target.value})}
//           className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
//           placeholder="Enter your name"
//         />
//       </div>
//       <div>
//         <label className="block text-zinc-400 mb-2">Email Address</label>
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => setFormData({...formData, email: e.target.value})}
//           className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
//           placeholder="Enter your email"
//         />
//       </div>
//       <div>
//         <label className="block text-zinc-400 mb-2">Message</label>
//         <textarea
//           value={formData.message}
//           onChange={(e) => setFormData({...formData, message: e.target.value})}
//           className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors h-32 resize-none"
//           placeholder="Write your message here..."
//         ></textarea>
//       </div>
//       <button onClick={handleSubmit} className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center gap-2">
//         <Send size={20} />
//         Send Message
//       </button>
//     </div>
//   </div>
// );


// export default ContactForm