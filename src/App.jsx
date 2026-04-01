
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'
import Footer from './components/Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import StepSection from './components/StepSection/StepSection'

function App() {
  const [loadDatas, setLoadDatas] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();
      setLoadDatas(data);
    }
    loadData();
  }, []);

  return (
    <>
      <Navbar
        selectedData={selectedData}
      ></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <MainSection

        loadDatas={loadDatas}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      ></MainSection>
      <StepSection></StepSection>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
