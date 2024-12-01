  import React,{useState} from 'react';


 const Accordion = ({title ,answer}) => {
     const [accordionOpen, setAccorionOpen] = useState(false);
   return (
    <>
     <div className= 'w-auto justify-center h-fit p-1 flex-auto bg-gray-200 '>
      <button
       onClick={() => setAccorionOpen(!accordionOpen)} 
      className='font-bold flex justify-between w-full'>
         <span>{title}</span>
         {accordionOpen ? <span>-</span> : <span>+</span>}
    </button>
      <div className={ ` bg-teal-300  grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
         accordionOpen
         ? "grid-rows-[1fr] opacity-100"
         :  "grid-rows-[0fr] opacity-0"
         } `}>
         <div className= "overflow-hidden">{answer}</div>
    </div>
   </div> 

   </>

  )
};
 export default Accordion;

// export default Accordion

// import React, { useState } from 'react';

// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto mt-10 space-y-2">
//       {items.map((item, index) => (
//         <div key={index} className="border border-gray-300 rounded">
//           {/* Header */}
//           <button
//             onClick={() => toggleAccordion(index)}
//             className="flex justify-between items-center w-full px-4 py-3 text-left text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             {item.title}
//             <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
//               ▼
//             </span>
//           </button>

//           {/* Content */}
//           {openIndex === index && (
//             <div className="px-4 py-3 text-gray-600 bg-white">
//               {item.content}
//             </div>
//           )}
//         </div>
//       ))}
    
//     </div>
//   );
// };

// export default Accordion;
