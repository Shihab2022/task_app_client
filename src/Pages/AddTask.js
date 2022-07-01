import React from 'react';
import { useQuery } from 'react-query'
const AddTask = ({task}) => {
    const { isLoading, error, data } = useQuery('tasks', () =>
    // fetch('http://localhost:5000/task').then(res =>
    fetch('https://secret-inlet-08431.herokuapp.com/task').then(res =>
      res.json()
    )
  )
  console.log(data)
  console.log(task)
    return (
        <div className='h-screen flex justify-center items-center bg-amber-50'>
            <form action="">
                <input type="text"  placeholder=''/>
            </form>
        </div>
    );
};

export default AddTask;