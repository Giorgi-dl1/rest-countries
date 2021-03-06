import { useEffect, useState } from 'react';
import {AiOutlineArrowDown,AiOutlineArrowUp}from 'react-icons/ai';
import './Region.css';
function Region({changeRegion}) {
  const [showRegions,setShowRegions]=useState(false);
  const [region,setRegion]=useState('Filter by Region');

  const handleClick=(val)=>{
    changeRegion(val);
    setShowRegions(!showRegions);
    if(val==='All'){
      setRegion('Filter by Region')
    }else{
      setRegion(val)
    }
  }
  return (
    <div className="region-filter">
      <div className="toggle-regions" onClick={()=>setShowRegions(!showRegions)}>
       <p>{region}</p> {showRegions?<AiOutlineArrowUp/>:<AiOutlineArrowDown/>}
      </div>
      {showRegions 
      &&
      <div className="regions">
        <p className="region"onClick={()=>handleClick('All')}>All</p>
        <p className="region"onClick={()=>handleClick('Africa')}>Africa</p>
        <p className="region"onClick={()=>handleClick('America')} >America</p>
        <p className="region"onClick={()=>handleClick('Asia')} >Asia</p>
        <p className="region"onClick={()=>handleClick('Europe')} >Europe</p>
        <p className="region"onClick={()=>handleClick('Oceania')}>Oceania</p>
      </div>
      }
      
    </div>
  )
}

export default Region