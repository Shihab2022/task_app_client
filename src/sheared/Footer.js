import React from 'react';
import { FaFacebook ,FaTwitter,FaInstagram,FaLinkedinIn,FaRegCopyright} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white body-font bg-gradient-to-r from-amber-500 to-sky-500 ">
  <div className="container px-10 py-3 mx-auto flex items-center sm:flex-row flex-col">

     
      <span className="ml-3 text-xl">Task App </span>
  
    <p className="text-sm text-white sm:ml-4 flex  items-center justify-center sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"><FaRegCopyright className='mr-4'/>2020 Md Shihab Uddin
    </p>
    <span className="inline-flex text-xl text-white sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a >
        <FaFacebook/>
      </a>
      <a className="ml-3 ">
        <FaTwitter/>
      </a>
      <a className="ml-3 ">
       <FaInstagram/>
      </a>
      <a className="ml-3 ">
        <FaLinkedinIn/>
      </a>
    </span>
  </div>
</footer>
    );
};

export default Footer;