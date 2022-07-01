import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import {  useQuery } from 'react-query'
import AddTask from './AddTask';

const Home = () => {
    let navigate = useNavigate();
    const [task,setTask]=useState('')
    const [nvi,setNvi]=useState(false)     

const fromSubmit=(e)=>{
    const task =e.target.task.value
    // console.log(e)
    // console.log(task)
    setTask(task)
    setNvi(!nvi)
    const url='http://localhost:5000/task'
    fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
    
    // navigate("/addTask")
    e.preventDefault(); 

}
console.log(task)
   
  
    return (
        <div className='flex justify-center h-screen bg-amber-100 items-center '>
          <div >
          <form className='flex justify-center items-center flex-cols' onSubmit={e=>fromSubmit(e)}>
          <input  name='task'   type="text" placeholder='Enter Your Task Title ' className= 'px-10 text-xl py-2 rounded-tl-lg rounded-bl-lg  border-amber-500  border-2 '/>
          <input type='submit' value="Add" className='bg-amber-500 py-3 rounded-br-lg rounded-tr-lg  px-4'/>
          </form>
{/* {
   nvi&& <AddTask task={task}></AddTask>
} */}
          </div>
        </div>
    );
};

export default Home;

// onKeyPress={(e) =>handleEvent(e)}
 // const handleEvent=(e)=>{
     
    //     if (e.key === "Enter") {
    //             navigate("/calender")

    //         }
    //         console.log(e.target.value)
    //         e.preventDefault();        
    // }