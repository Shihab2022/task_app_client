import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../sheared/Loading';

const CompleteTask = () => {
    const { isLoading, error, data} = useQuery('tasks', () =>
    // fetch('http://localhost:5000/task').then(res =>
    fetch('https://secret-inlet-08431.herokuapp.com/task').then(res =>
      res.json()
    )
  )
  if(isLoading){
    return <Loading/>
  }
    return (
        <div className='  bg-amber-50'>
            {
  data.map((d,index)=><>
  
  <div className='bg-amber-100 shadow-lg text-lg font-sharif p-5  my-3'>
    
    <p>{index+1} . {d?.title} </p>
    <p className='text-sm'>Date : {d?.date}</p>
  </div>
  </>)
}
        </div>
    );
};

export default CompleteTask;