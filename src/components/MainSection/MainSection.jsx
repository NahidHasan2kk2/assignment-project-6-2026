
import AvailableCards from '../AvailableCards/AvailableCards';

const MainSection = ({ loadDatas }) => {


 return (
  <div className='mt-6 container mx-auto'>

   <div className="hero bg-base-200 ">
    <div className="hero-content text-center">
     <div className="max-w-md space-y-3">
      <h1 className="text-3xl font-bold">Premium Digital Tools</h1>
      <p className="py-2">
       Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
      </p>
      <div>
       <button className="btn btn-primary rounded-4xl">Products</button>
       <button className="btn">Cart 2</button>
      </div>
     </div>
    </div>
   </div>
   <div>
    <AvailableCards
     loadDatas={loadDatas}
    ></AvailableCards>
   </div>
  </div>

 );
};

export default MainSection; 