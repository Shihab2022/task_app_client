import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div class="container bg-gradient-to-r from-sky-500 to-amber-500 mx-auto flex flex-wrap px-5 py-4 flex-col md:flex-row items-center">
      
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg  font-semibold justify-center">
          <Link to='/complete' class="mr-5 hover:text-white">Completed Tasks</Link>
          <Link to='/addTask ' class="mr-5 hover:text-white">To Do</Link>
          <Link to='/calender' class="mr-5 hover:text-white">Calendar</Link>
          <Link to='/' class="mr-5 hover:text-white">Link</Link>
          
        </nav>
      </div>
    );
};

export default Navbar;