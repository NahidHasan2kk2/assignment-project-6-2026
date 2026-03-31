import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const SelectedDataCard = ({ data }) => {
 return (
  < div className='flex justify-between  mb-2 p-3 rounded bg-base-400 shadow-xl/10 border-t-1' >
   <div className='flex justify-center items-center gap-2]'>
    <div><img src={data.img} alt="" /></div>
    <div className='ml-4 opacity-100'>
     <h1>{data.name}</h1>
     <p>${data.price}</p>
    </div>
   </div>
   <div>
    <button className='btn bg-red-100'><AiOutlineDelete className='text-red-900' /></button>
   </div>
  </div >
 );
};

export default SelectedDataCard;
