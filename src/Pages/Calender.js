import { format} from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [selected,setSelected]=useState(new Date())

    let footer
    if (selected) {
        footer = <p>Your Selected date  :  {format(selected, 'PP')}.</p>;
      }
    return (
        <div className='flex bg-amber-50 items-center h-screen justify-center '>
          
          <DayPicker 
          mode="single"
           selected={selected}
           onSelect={setSelected}
          defaultMonth={new Date()}
          footer={footer}
           />;
        </div>
    );
};

export default Calender;