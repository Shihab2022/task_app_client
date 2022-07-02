import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Home = () => {
    let navigate = useNavigate();

const fromSubmit=(e)=>{
  const getTask ={
    title :e.target.task.value,
    date:new Date()
  }
    const url='https://secret-inlet-08431.herokuapp.com/task'
    // const url='http://localhost:5000/task'
    fetch(url, {
        method: 'POST',        
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getTask),
      })
      .then(response => response.json())
      .then(data => {
        if(data.acknowledged){
          toast.success('Your task add successfully !!!')
          navigate("/addTask")
        }
      })
    e.preventDefault(); 
}

  
    return (
        <div className='flex justify-center h-screen bg-amber-100 items-center '>
          <div >
          <form className='flex justify-center items-center flex-cols' onSubmit={e=>fromSubmit(e)}>
          <input  name='task' type="text" placeholder='Enter Your Task Title ' className= 'px-10 text-xl py-2 rounded-tl-lg rounded-bl-lg  border-amber-500  border-2 '/>
          <input type='submit' value="Add" className='bg-amber-500 py-3 rounded-br-lg rounded-tr-lg  px-4'/>
          </form>
          </div>
        </div>
    );
};

export default Home;
