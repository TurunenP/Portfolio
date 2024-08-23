import React from 'react';
import Logo from '../assets/PT.JPG';

const Footer = () => {
  return (
    <div className='bg-[#0a192f] text-white p-10 flex items-center justify-center'>
      <img src={Logo} alt="LogoImage" className="w-6 h-6 mr-2" />
      <h2 className="text-sm">
        Copyright &copy; 2024 <span className="font-bold">TurunenP</span>
      </h2>
    </div>
  );
};

export default Footer;