
import { useState } from 'react';
import AvailableCards from '../AvailableCards/AvailableCards';
import SelectedCards from '../SelectedCards/SelectedCards';

const MainSection = ({ loadDatas }) => {

 const [productsButton, setProductsButton] = useState('Products');
 console.log(productsButton);

 return (
  <div className='mt-6 container mx-auto'>

   <div className="hero bg-base-200 ">
    <div className="hero-content text-center">
     <div className="max-w-md space-y-3">
      <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
      <p className="py-2">
       Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>
      <div className='space-x-2'>
       <button onClick={() => setProductsButton('Products')} className={`  ${productsButton === "Products" ? "btn btn-primary " : "btn"} `}>Products</button>
       <button onClick={() => setProductsButton('Cart')} className={`  ${productsButton === "Cart" ? "btn btn-primary " : "btn"} `}>Cart 2</button>
      </div>
     </div>
    </div>
   </div>
   <div>
    {
     productsButton === 'Products' ?
      <AvailableCards
       loadDatas={loadDatas}
      ></AvailableCards> :
      <SelectedCards></SelectedCards>
    }
   </div>
  </div>

 );
};

export default MainSection; 