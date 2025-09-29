import React from "react";
import Footer from "./Footer";
import Chatbot from "./chatbot/Chatbot";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col items-center p-4 pt-28"
    >
      {/* Contact Section Header */}
      <div className="max-w-[1200px] w-full mb-6">
        {/* <p className="text-gray-400 text-sm mb-2 text-center md:text-left">
          This form is for demo purposes — to contact me, please use email at
          firstname.lastname@gmail.com
        </p> */}

        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4">
          Contact
        </p>
        {/* <p className="text-gray-300 mb-6 mt-10">
          This form is for demo purposes — to contact me, please use email at
          firstname.lastname@gmail.com
        </p> */}
        <p className="text-gray-400 text-sm mb-2 text-center md:text-left mt-10">
          This form is for demo purposes — to contact me, please use email at
          firstname.lastname@gmail.com
        </p>
      </div>

      {/* Flex container for form + chatbot */}
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <form
          method="POST"
          action="https://getform.io/f/e778bbdb-2c33-40b3-892a-b81df0c1d898"
          className="flex flex-col w-full md:w-1/2"
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

        {/* Chatbot */}
        <div className="w-full md:w-1/2">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import Footer from "./Footer";
// import Chatbot from "./chatbot/Chatbot";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full min-h-screen bg-[#0a192f] flex flex-col items-center p-4 pt-28"
//     >
//       {/* Contact Section Header */}
//       <div className="max-w-[600px] w-full mb-6">
//         <p className="text-gray-400 text-sm mb-2 text-center">
//           This form is for demo purposes — to contact me, please use email at
//           firstname.lastname@gmail.com
//         </p>

//         <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 mb-4">
//           Contact
//         </p>
//         <p className="text-gray-300 mb-6">
//           Submit the form below or shoot me an email -
//           firstname.lastname@gmail.com
//         </p>
//       </div>

//       {/* Contact Form */}
//       <form
//         method="POST"
//         action="https://getform.io/f/e778bbdb-2c33-40b3-892a-b81df0c1d898"
//         className="flex flex-col max-w-[600px] w-full mb-10"
//       >
//         <input
//           className="bg-[#ccd6f6] p-2 mb-4"
//           type="text"
//           placeholder="Name"
//           name="name"
//         />
//         <input
//           className="bg-[#ccd6f6] p-2 mb-4"
//           type="text"
//           placeholder="Email"
//           name="email"
//         />
//         <textarea
//           className="bg-[#ccd6f6] p-2 mb-4"
//           name="message"
//           rows="5"
//           placeholder="Message"
//         ></textarea>
//         <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center">
//           Let's Collaborate
//         </button>
//       </form>

//       {/* Chatbot */}
//       <div className="w-full max-w-[600px]">
//         <Chatbot />
//       </div>
//     </div>
//   );
// };

// export default Contact;
