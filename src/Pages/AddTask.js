import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { FaRegEdit ,FaRegTrashAlt} from "react-icons/fa";
import { toast } from 'react-toastify';
import Loading from '../sheared/Loading';
const AddTask = ({task}) => {
    const [check,setCheck]=useState(true)
    const [newData,setNewData]=useState('')
    const { isLoading, error, data} = useQuery('tasks', () =>
    fetch('http://localhost:5000/task').then(res =>
    // fetch('https://secret-inlet-08431.herokuapp.com/task').then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading/>
  }
//   update
const updateInfo=(id)=>{
    const url=`http://localhost:5000/task/${id}`
    fetch(url, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
           
          },
          body: JSON.stringify(newData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.acknowledged){
          console.log(data)
        }
    })
}

console.log(newData)
//   delete
  const deleteOne=(id)=>{
    const url = `http://localhost:5000/task/${id}`;
    fetch(url, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.acknowledged){
            // isFetching()
            toast.success('Your task deleted successfully !!!')
        }
        console.log(data)
    })
  }
//   console.log(data[0])
//   console.log(task)
    return (
        <div className='h-screen flex justify-center items-center bg-amber-50'>
            < form className='md:flex  justify-between items-center' >
                <input onClick={()=>updateInfo(data[0]?._id)}  type="checkbox" name=""  className='h-3 mr-4' id="" />
        { check ?   <input    type="text" value={data[0]?.title} disabled className= 'px-10 text-xl py-1 rounded-lg  border-amber-500  border-2 '/>
        : <input onChange={e=>setNewData(e.target.value)}   type="text"  placeholder='Edit Your Task Title ' className= 'px-10 text-xl py-1 rounded-lg  border-amber-800  border-4 '/>
    }
            <div className='flex md:mt-0 mt-5 justify-center items-center'>
            <FaRegEdit onClick={()=>setCheck(!check)} className='text-3xl mx-3'/>
            <FaRegTrashAlt onClick={()=>deleteOne(data[0]?._id)} className='text-rose-500 text-3xl'/>
            </div>
            </form>
        </div>
    );
};

export default AddTask;

