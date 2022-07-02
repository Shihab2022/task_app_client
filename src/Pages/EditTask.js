import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../sheared/Loading';

const EditTask = ({editTask}) => {
    const [reData,serReData]=useState({})
    const [value,setNewValue]=useState('')
    const { isLoading, error, data } = useQuery("tasks", () =>
    // fetch('http://localhost:5000/task').then(res =>
    fetch("https://secret-inlet-08431.herokuapp.com/task").then((res) =>
      res.json()
    )
  );
  useEffect(()=>{
const reaming =data.find(d=>d?._id===editTask)
serReData(reaming)

  },[editTask,data,reData])
console.log(value)
    //   update
    const updateInfo = (id) => {
        const upInfo={
            title : value,
            date:new Date()
        }
        const url = `https://secret-inlet-08431.herokuapp.com/task/${id}`;
        // const url=`http://localhost:5000/task/${id}`
        fetch(url, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(upInfo),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success('Task edit successfully .')
            }
          });
      };
  if (isLoading) {
    return <Loading />;
  }
    return (
        <div className='h-screen flex justify-center items-center '>
             <input
           onClick={()=>updateInfo(reData?._id)}
              type="checkbox"
              name=""
              className="h-3 mr-4"
              id=""
            />
           <textarea onChange={e=>setNewValue(e.target.value)} placeholder={reData?.title} className="p-3 text-xl rounded-lg  border-amber-500  border-2 " id="" cols="25" rows="10"></textarea>
              
         
        </div>
    );
};

export default EditTask;