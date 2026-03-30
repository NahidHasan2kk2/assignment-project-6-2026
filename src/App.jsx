
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import MainSection from './components/MainSection/MainSection'
import Navbar from './components/Navbar/Navbar'
import Stats from './components/Stats/Stats'

function App() {
  const [loadDatas, setLoadDatas] = useState([]);
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
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <MainSection
        loadDatas={loadDatas}
      ></MainSection>

    </>
  )
}

export default App
