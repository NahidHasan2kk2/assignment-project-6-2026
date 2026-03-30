import React from 'react';
import bannerImg from '../../assets/products/banner.png'
import { MdOutlineRadioButtonChecked } from 'react-icons/md';
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
 return (
  <div className='container mx-auto'>
   <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
     <img className='w-[45%]'
      src={bannerImg}
     />
     <div>
      <div>
       <a href="" className='btn rounded-2xl bg-[#E1E7FF] text-[#4F39F6]'>
        <MdOutlineRadioButtonChecked />
        New: AI-Powered Tools Available</a>
      </div>
      <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6">
       Access premium AI tools, design assets, templates, and productivity
       software—all in one place. Start creating faster today.

       Explore Products
      </p>
      <div className='space-x-2'>
       <button className="btn btn-primary">Explore Products</button>
       <button className="btn btn-neutral btn-outline">
        <CiPlay1 />

        Watch Demo</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Banner;