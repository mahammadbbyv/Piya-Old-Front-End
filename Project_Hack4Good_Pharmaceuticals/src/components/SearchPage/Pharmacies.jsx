import { useState, useEffect } from "react"
import parse from 'html-react-parser';
import './styles/Pharmacies.css'
import CitySearch from "./CitySearch";
import { CookiesProvider, useCookies } from 'react-cookie'

function Pharmacies({product}){
    const [results, setResults] = useState([])
    const [resultsCity, setResultsCity] = useState([])
    const [city, setCity] = useState('')
    const [search, setSearch] = useState('')
    const [cookies, setCookie] = useCookies()
    useEffect(() =>{
        const getData = async () => {
          try {
            if(product.length == 0 || city.length == 0) return setResults([])
            console.log(`https://magab17-001-site1.ltempurl.com/getPharmacies/${city}/${product}`)
            const res = await fetch(`https://magab17-001-site1.ltempurl.com/getPharmacies/${city}/${product}`)
            const data = await res.json()
            return setResults(data)
          } catch (err) {
            console.log(err)
          }
        }
        getData()
    }, [city, product])
    
    return(
      
        <div className="pharmacies-results">  
          <CitySearch setCity={setCity} resultsCity={resultsCity} setResultsCity={setResultsCity} setSearch={setSearch} search={search} city={city} />
          {results.map((item) => (
              <div className="pharmacy" key={item.id} >
                <div className="pharmacy-info">
                  <div className="pharmacy-title">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="pharmacy-contact">
                    <p>{item.email}</p>
                    <p>+{item.phoneNumber}</p>
                  </div>
                </div>
                {parse(item.address)}
              </div>
          ))}
        </div>
    )
}

export default Pharmacies