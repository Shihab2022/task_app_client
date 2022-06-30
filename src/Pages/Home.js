import React from 'react';
import { useNavigate,Link } from "react-router-dom";
const Home = () => {

    let navigate = useNavigate();
    const handleEvent=(e)=>{
     
        if (e.key === "Enter") {
                navigate("/calender")
            }
            e.preventDefault();        
    }

    return (
        <div className='flex justify-center h-screen bg-amber-100 items-center '>
          <div className='flex justify-center items-center flex-cols'>
          <input required onKeyPress={(e) =>handleEvent(e)} type="text" placeholder='Enter Your Task Title ' className= 'px-10 text-xl py-2 rounded-tl-lg rounded-bl-lg  border-amber-500  border-2 '/>
          <Link to='/calender' className='bg-amber-500 py-3 rounded-br-lg rounded-tr-lg  px-4'>Add</Link>
          </div>
        </div>
    );
};

export default Home;