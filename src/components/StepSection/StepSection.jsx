import React from 'react';
import createImg from '../../assets/products/user.png'
import packageImg from '../../assets/products/package.png'
import rocketImg from '../../assets/products/rocket.png'

const StepSection = () => {
 return (
  <div className='container mx-auto space-y-5 my-10'>
   <div className='text-center'>
    <h1 className='font-bold text-3xl'>Get Started in 3 Steps</h1>
    <p className='opacity-70'>Start using premium digital tools in minutes, not hours.</p>
   </div>
   <div className='grid lg:grid-cols-3 gap-5'>
    <div className="card bg-base-300  shadow-sm">
     <div className='text-end'>
      <button className='btn btn-primary mt-3 mr-3  rounded-full '>
       1
      </button>
     </div>
     <div className='flex justify-center items-center'>
      <img src={createImg} alt="" />
     </div>
     <div className="card-body items-center text-center">
      <h2 className="card-title font-bold">Create Account</h2>
      <p className='opacity-80'>Sign up for free in seconds. No credit card required to get started.</p>

     </div>
    </div>
    <div className="card bg-base-300  shadow-sm">
     <div className='text-end'>
      <button className='btn btn-primary mt-3 mr-3  rounded-full '>
       2
      </button>
     </div>
     <div className='flex justify-center items-center'>
      <img src={packageImg} alt="" />
     </div>
     <div className="card-body items-center text-center">
      <h2 className="card-title font-bold">Choose Products</h2>
      <p className='opacity-80'>Browse our catalog and select the toolsthat fit your needs.</p>

     </div>
    </div>
    <div className="card bg-base-300  shadow-sm">
     <div className='text-end'>
      <button className='btn btn-primary mt-3 mr-3  rounded-full '>
       3
      </button>
     </div>
     <div className='flex justify-center items-center'>
      <img src={rocketImg} alt="" />
     </div>
     <div className="card-body items-center text-center">
      <h2 className="card-title font-bold">Start Creating</h2>
      <p className='opacity-80'>Download and start using your premium tools immediately.</p>

     </div>
    </div>


   </div>
  </div>
 );
};

export default StepSection;