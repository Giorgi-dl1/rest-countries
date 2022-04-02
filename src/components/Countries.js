import Country from "./Country";
import './Countries.css'
function Countries({data,showMore}) {
  if(data.length==0){
    return(
      <div className="nomatch">
        <p>No Matched Country</p>
      </div>
    )
  }
  return (
    <div className="countries">
        {data.map((item,index)=>{
            const{region,capital,name,population,flags}=item;
            if(!capital){
                return(
                  <Country key={index}
                  region={region} 
                  capital={'Not Found'}
                  name={name.common}
                  population={population}
                  flag={flags.svg}/>
                )
            }
         return(
          <Country key={index}
           region={region} 
           capital={capital[0]}
           name={name.common}
           population={population}
           flag={flags.png}
           showMore={showMore}
           countryData={item}/>
         ) 
        })}
    </div>
  )
}

export default Countries