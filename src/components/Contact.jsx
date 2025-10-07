// import React from "react";
// import Chatbot from "./chatbot/Chatbot";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full min-h-screen bg-[#0a192f] flex flex-col items-center p-4 pt-28"
//     >
//       {/* Header */}
//       <div className="max-w-[1200px] w-full mb-6">
//         <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4">
//           Contact
//         </p>
//         <p className="text-gray-400 text-sm mb-2 text-center md:text-left mt-5">
//           This form is for demo purposes — to contact me, please use email at
//           firstname.lastname@gmail.com
//         </p>
//       </div>

//       {/* Flex container */}
//       <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-4 justify-between items-start">
//         {/* Contact Form */}
//         <form
//           method="POST"
//           action="https://getform.io/f/e778bbdb-2c33-40b3-892a-b81df0c1d898"
//           className="flex flex-col w-full md:w-6/12 md:ml-8"
//         >
//           <input
//             className="bg-[#ccd6f6] p-2 mb-4"
//             type="text"
//             placeholder="Name"
//             name="name"
//           />
//           <input
//             className="bg-[#ccd6f6] p-2 mb-4"
//             type="text"
//             placeholder="Email"
//             name="email"
//           />
//           <textarea
//             className="bg-[#ccd6f6] p-2 mb-4"
//             name="message"
//             rows="5"
//             placeholder="Message"
//           ></textarea>
//           <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center">
//             Let's Collaborate
//           </button>
//         </form>

//         {/* Chatbot */}
//         <div className="w-full md:w-5/12 ml-auto">
//           <div className="sticky top-28">
//             <Chatbot height="550px" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import Chatbot from "./chatbot/Chatbot";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full bg-[#0a192f] flex flex-col items-center p-4 pt-28 pb-20"
//     >
//       {/* Header */}
//       <div className="max-w-[1200px] w-full mb-6">
//         <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4">
//           Contact
//         </p>
//         <p className="text-gray-400 text-sm mb-2 text-center md:text-left mt-5">
//           This form is for demo purposes — to contact me, please use email at
//           firstname.lastname@gmail.com
//         </p>
//       </div>

//       {/* Flex container */}
//       <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8 justify-between items-start">
//         {/* Contact Form */}
//         <form
//           method="POST"
//           action="https://getform.io/f/e778bbdb-2c33-40b3-892a-b81df0c1d898"
//           className="flex flex-col w-full md:w-6/12 md:ml-8"
//         >
//           <input
//             className="bg-[#ccd6f6] p-2 mb-4"
//             type="text"
//             placeholder="Name"
//             name="name"
//           />
//           <input
//             className="bg-[#ccd6f6] p-2 mb-4"
//             type="text"
//             placeholder="Email"
//             name="email"
//           />
//           <textarea
//             className="bg-[#ccd6f6] p-2 mb-4"
//             name="message"
//             rows="5"
//             placeholder="Message"
//           ></textarea>
//           <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center">
//             Let's Collaborate
//           </button>
//         </form>

//         {/* Chatbot */}
//         <div className="w-full md:w-5/12 ml-auto md:ml-0 mt-8 md:mt-0">
//           {/* Make relative on mobile, sticky only on desktop */}
//           <div className="relative md:sticky md:top-28">
//             <Chatbot height="100%" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import Chatbot from "./chatbot/Chatbot";

const Contact = () => {
  return (
    <div
      name="contact"
      /* allow natural growth, give extra bottom padding for mobile, keep desktop spacing */
      className="w-full bg-[#0a192f] flex flex-col items-center p-4 pt-28 pb-28"
      style={{ scrollMarginTop: "82px" }} // keeps section visible under fixed navbar when scrolled
    >
      {/* Header */}
      <div className="max-w-[1200px] w-full mb-6">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4">
          Contact
        </p>
        <p className="text-gray-400 text-sm mb-2 text-center md:text-left mt-5">
          This form is for demo purposes — to contact me, please use email at
          firstname.lastname@gmail.com
        </p>
      </div>

      {/* Flex container */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8 justify-between items-start">
        {/* Contact Form */}
        <form
          method="POST"
          action="https://getform.io/f/e778bbdb-2c33-40b3-892a-b81df0c1d898"
          className="flex flex-col w-full md:w-6/12 md:ml-8"
        >
          <input
            className="bg-[#ccd6f6] p-2 mb-4"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-[#ccd6f6] p-2 mb-4"
            type="text"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 mb-4"
            name="message"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>

        {/*       
        <div className="w-full md:w-5/12 ml-auto md:ml-0 mt-0 md:mt-0">
          <div className="relative md:sticky md:top-28">
                       <div className="block md:hidden h-40"></div>{" "}
                       <div className="w-full h-auto md:h-[550px] overflow-visible">
              <Chatbot />
            </div>
          </div>
        </div> */}

        {/* Chatbot (mobile: in-flow; desktop: sticky) */}
        <div className="w-full md:w-5/12 ml-0 md:ml-0 mt-0 md:mt-0 flex justify-start">
          <div className="relative md:sticky md:top-28">
            {/* Mobile-only spacer */}
            <div className="block md:hidden h-40"></div>{" "}
            {/* pushes Chatbot down on mobile */}
            {/* Chatbot container */}
            <div className="w-auto md:w-full h-auto md:h-[550px] overflow-visible">
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
