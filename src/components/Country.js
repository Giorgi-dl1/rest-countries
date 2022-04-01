import './Country.css'
function Country({region,capital,name,population,flag}) {
  return (
    <div className="country">
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