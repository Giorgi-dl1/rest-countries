import Country from "./Country";
import './Countries.css'
function Countries({data}) {
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
            const{continents,capital,name,population,flags}=item;
            if(!capital){
                return
            }
         return(
          <Country key={index}
           region={continents[0]} 
           capital={capital[0]}
           name={name.common}
           population={population}
           flag={flags.png}/>
         ) 
        })}
    </div>
  )
}

export default Countries