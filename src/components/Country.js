import './Country.css'
function Country({region,capital,name,population,flag,showMore,countryData}) {
  return (
    <div className="country" onClick={()=>showMore(countryData)}>
        <div className="flag">
            <img src={flag} alt="flag"/>
        </div>
        <div className="info">
            <h3>{name}</h3>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
        </div>
    </div>
  )
}

export default Country