import React from 'react';

import SelectedDataCard from '../SelectedDataCard/SelectedDataCard';

const SelectedCards = ({ selectedData }) => {

  const totalAmount = selectedData.reduce((total, item) => {
    return total + item.price;
  }, 0);

  console.log(selectedData);
  const datas = selectedData.map(data => (
    <SelectedDataCard
      key={data.id}
      data={data}
    />
  ))

  return (
    <div>
      {
        selectedData.length === 0 ?
          <div className='text-center flex flex-col justify-center items-center bg-amber-50 py-20 space-y-3 mb-5 rounded'>
            <h1 className='font-bold text-3xl'>No products added yet !</h1>
            <p className='text-xl opacity-50'>Please select a product </p>
          </div>

          :

          <div className='w-[80%] mx-auto mb-5 border p-5 space-y-5'>
            <h1 className='text-xl font-bold'>Your Cart</h1>
            <div>
              {
                datas
              }
            </div>
            <div className='flex justify-between'>
              <h1 className='font-bold'>Total Amount </h1>
              <p className='mr-20 font-bold text-xl'>$ {totalAmount}</p>
            </div>
            <button className='btn btn-primary btn-block rounded-3xl'>Proceed to Checkout</button>
          </div>


      }

    </div>
  );
};

export default SelectedCards;