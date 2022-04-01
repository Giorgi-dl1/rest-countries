import Header from "./components/Header";
import Region from "./components/Region";
import Input from "./components/Input";
import Countries from "./components/Countries";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [fillMoon,setFillMoon]=useState(false);
  const [input,setInput] = useState('');
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [dataByRegion,setDataByRegion]=useState([]);
  const [filteredData,setFilteredData]=useState([]);
  const toggleDark=()=>{
    document.querySelector('.App').classList.toggle('dark');
    setFillMoon(!fillMoon);
  }
  const changeRegion = (val)=>{
    if(val === 'All'){
      setDataByRegion(data);
      setFilteredData(data);
    }else{
      const filteredWithRegion = data.filter(item=>item.continents[0].toLowerCase().includes(val.toLowerCase()));
      setDataByRegion(filteredWithRegion);
      setFilteredData(filteredWithRegion);
    }
  }
  const getData = async ()=>{
    setLoading(true);
    try {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const countriesArr = await res.json();
      setLoading(false);
      setData(countriesArr);
      setDataByRegion(countriesArr)
      setFilteredData(countriesArr);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  }
  useEffect(()=>{
    getData();
  },[])
  const inputFilter=(e)=>{
    setInput(e.target.value);
    const filteredDataVar=dataByRegion.filter(item => item.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filteredDataVar);
  }
  if(loading){
    return(
      <div className="loading">
         <div className="loader"></div>
      </div>
    )
  }
  return (
    <main className="App">
     <Header handleclick={toggleDark} fillMoon={fillMoon}/>
     <div className="items">
        <div className="filter-div">
          <Input value={input} handleChange={inputFilter}/>
          <Region changeRegion={changeRegion}/>
        </div>
        <Countries data={filteredData}/>
     </div>
     
    </main>
  );
}


export default App;
