import React, {  useState } from "react";
import { useQuery } from "react-query";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "../sheared/Loading";
import EditTask from "./EditTask";
const AddTask = () => {
  const [editTask,setEditTask]=useState('')

  const { isLoading, error, data } = useQuery("tasks", () =>
    // fetch('http://localhost:5000/task').then(res =>
    fetch("https://secret-inlet-08431.herokuapp.com/task").then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  //   delete
  const deleteOne = (id) => {
    const url = `https://secret-inlet-08431.herokuapp.com/task/${id}`;
    // const url = `http://localhost:5000/task/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your task deleted successfully !!!");
        }
      });
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:p-14 p-5">
        <div>
          {data.map((d, index) => (
            <>
              <div className="bg-amber-50 shadow-lg text-lg font-sharif p-5 lg:flex  justify-between  items-center my-3">
                <div>
                  <p>
                    {index+1} . {d?.title}{" "}
                  </p>
                  <p className="text-sm">Date : {d?.date}</p>
                </div>
                <div className="flex md:mt-0 justify-center items-center">
                  <FaRegEdit
                    onClick={() => setEditTask(d?._id)}
                    className="text-3xl mx-3"
                  />
                  <FaRegTrashAlt
                    onClick={() => deleteOne(d?._id)}
                    className="text-rose-500 text-3xl"
                  />
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="h-screen flex justify-center items-center bg-amber-50">
          <form className="md:flex  justify-between items-center">
          <EditTask editTask={editTask}></EditTask>
           
          </form>
  
        </div>
      </div>

    </>
  );
};

export default AddTask;
