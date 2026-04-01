import React from 'react';

const Stats = () => {
 return (
  <div className='container mx-auto bg-[#4F39F6] lg:h-[200px] rounded flex flex-col md:flex-row flex-wrap justify-center items-center text-center p-5 md:space-x-10 space-y-5 md:space-y-0'>
   <div className="stats shadow">
    <div className="stat space-y-2">

     <div className="stat-value text-5xl text-white">50K+</div>
     <div className="stat-desc text-white opacity-80">Active User</div>
    </div>

   </div>
   <div className="divider divider-horizontal divider-start  lg:h-[100px] my-auto"></div>
   <div className="stats shadow">
    <div className="stat space-y-2">

     <div className="stat-value text-5xl text-white">200+</div>
     <div className="stat-desc text-white opacity-80">Premium Tools</div>
    </div>
   </div>
   <div className="divider divider-horizontal divider-start lg:h-[100px] my-auto"></div>
   <div className="stats shadow">
    <div className="stat space-y-2">

     <div className="stat-value text-5xl text-white">4.9</div>
     <div className="stat-desc text-white opacity-80">Rating</div>
    </div>
   </div>
  </div>
 );
};

export default Stats;