import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Pages/AddTask';
import Calender from './Pages/Calender';
import CompleteTask from './Pages/CompleteTask';
import Home from './Pages/Home';
import Navbar from './sheared/Navbar/Navbar';

function App() {
  return (
    <div >
         <Navbar/>
      <Routes>
   
        <Route path='/' element={<Home/>}/>
        <Route path='/addTask' element={<AddTask/>}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/complete' element={<CompleteTask/> }/>
      </Routes>
    
   
    </div>
  );
}

export default App;
