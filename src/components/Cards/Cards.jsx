import React from 'react';
import { toast } from 'react-toastify';

const Cards = ({ card, selectedData, setSelectedData }) => {
  const HandleSelectButton = (card) => {
    // console.log(card);
    toast.info(`${card.name} added successfully!`);
    setSelectedData([...selectedData, card]);
  }
  //  console.log(card);
  return (
    <div>
      <div className="card relative bg-base-100 shadow-xl/10 border-t-1">
        <div className="card-body">
          <div className=''>
            <span className={`badge absolute top-4 text-white px-3 right-4 badge-xs
       ${card.tag === 'new' ? "bg-secondary" : ""}
       ${card.tag === 'popular' ? "bg-primary" : ""}
       ${card.tag === 'best seller' ? "bg-success" : ""}
       
       `}>{card.tag}</span>
          </div>
          <div>
            <img className='border p-3 rounded-4xl' src={card.img} alt="" />
          </div>
          <div className='space-y-2'>
            <h2 className="text-3xl font-bold">{card.name}</h2>
            <p>{card.description
            }</p>

            <h1 ><span className="text-2xl font-bold"> ${card.price} / </span> {card.period}</h1>


          </div>

          <ul className="mt-3 flex flex-col gap-2 text-xs">
            {
              card.features.map((featuresData, ind) =>

                <li key={ind}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>{featuresData}</span>
                </li>)
            }

          </ul>
          <div className="mt-6">
            <button onClick={() => HandleSelectButton(card)} className="btn btn-primary rounded-4xl btn-block">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;