import Cards from "../Cards/Cards";


const AvailableCards = ({ loadDatas }) => {



 return (
  <div className="grid grid-cols-3 gap-4  my-10">
   {
    loadDatas.map(card => <Cards key={card.id} card={card}></Cards>)
   }

  </div>
 );
};

export default AvailableCards;