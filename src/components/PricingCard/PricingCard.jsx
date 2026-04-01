import React from 'react';

const PricingCard = () => {
 return (
  <div className='container mx-auto my-8'>
   <div className='text-center my-3 '>
    <h1 className='font-bold text-3xl mb-2'>Simple, Transparent Pricing</h1>
    <p className='opacity-80'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
   </div>
   <div className='grid grid-cols-3 gap-5'>
    <div className="card shadow-lg ">
     <div className="card-body bg-base-200 border rounded-2xl ">

      <div>
       <h2 className="text-2xl font-bold">Stater</h2>
       <p className='opacity-80 mb-3'>Perfect for getting started</p>
       <span className="text-xl">$0/month</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2 text-xs">
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
       </li>

      </ul>
      <div className="mt-auto pt-6">
       <button className="btn btn-primary btn-block rounded-4xl">Get Started Free</button>
      </div>
     </div>

    </div>
    <div className="card shadow-lg ">
     <div className="card-body bg-primary text-white relative rounded-2xl">
      <span className="badge badge-xs px-3 badge-warning absolute -top-2 left-30">Most Popular</span>
      <div>
       <h2 className="text-2xl font-bold">Pro</h2>
       <p className='opacity-80 mb-3'>Best for professionals</p>
       <span className="text-xl">$29/month</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2 text-xs">
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
       </li>

      </ul>
      <div className="mt-auto pt-6">
       <button className="btn bg-white border-[#e5e5e5] text-primary btn-block rounded-4xl">Get Started Free</button>
      </div>
     </div>

    </div>
    <div className="card shadow-lg ">
     <div className="card-body bg-base-200 border rounded-2xl">
      {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
      <div>
       <h2 className="text-2xl font-bold">Enterprise</h2>
       <p className='opacity-80 mb-3'>For teams and businesses</p>
       <span className="text-xl">$25/month</span>
      </div>
      <ul className="mt-3 flex flex-col gap-2 text-xs">
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>SLA guarantee</span>
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom branding</span>
       </li>

      </ul>
      <div className="mt-auto pt-6">
       <button className="btn btn-primary btn-block rounded-4xl">Get Started Free</button>
      </div>
     </div>

    </div>
   </div>
  </div>
 );
};

export default PricingCard;