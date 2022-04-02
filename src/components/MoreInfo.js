import { useEffect, useState } from 'react';
import {AiOutlineArrowLeft}from 'react-icons/ai'
import './MoreInfo.css'
function MoreInfo({closeMoreInfo,data}) {
  const{region,capital,name,population,flags,subregion,cca2,languages,borders}=data;
  const [languagesState,setLanguagesState]=useState('');
  const [bordersArr,setBordersArr]=useState(false);
 
  const getLanguages = ()=>{
    const languagesArr =Object.values(languages);
    languagesArr.map((language,index)=>{
      if(index===languagesArr.length-1){
        setLanguagesState((prev)=>prev+language)
      }else{
        setLanguagesState((prev)=>prev+language+', ')
      }
      
    })
  }
  useEffect(()=>{
    getLanguages();
    if(borders){
      setBordersArr(Object.values(borders))
    }
  },[])
  
  return (
    <div className='more-info'>
        <div className="back-btn" onClick={()=>closeMoreInfo()}>
            <AiOutlineArrowLeft/>
           <p>Back</p>
        </div>
        <div className="info-flag">

          <div className="more-info-flag">
            <img src={flags.svg} alt="flag" />
          </div>

          <div className="information">
              <h1>{name.common}</h1>
            <div className="proporties">
              <div>
                <p><strong>Native Name:</strong> {Object.values(name.nativeName)[0].common}</p>
                <p><strong>Population:</strong> {population}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Sub Region:</strong> {subregion}</p>
                <p><strong>Capital:</strong> {capital[0]}</p>
              </div>
              <div>
                <p><strong>Top Level Domain:</strong> {cca2}</p>
                <p><strong>Currencies:</strong> {Object.values(data.currencies)[0].name}</p>
                <p><strong>Languages:</strong> {languagesState}</p>
              </div>
            </div>
            <div className="border-countries">
            {bordersArr && <p><strong>Border Countries:</strong>  { bordersArr.map((item,index)=><span key={index}>{item}</span>)}</p>}
            </div>
          </div>
        </div>
    </div>
  )
}

export default MoreInfo