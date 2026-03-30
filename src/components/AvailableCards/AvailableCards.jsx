import React, { use } from 'react';

const AvailableCards = ({ loadDatas }) => {


 console.log(loadDatas);
 return (
  <div>
   <h1>cards length :{loadDatas.length} </h1>
  </div>
 );
};

export default AvailableCards;