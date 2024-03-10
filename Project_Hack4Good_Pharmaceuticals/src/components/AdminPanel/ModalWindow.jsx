import modalImg1 from "../../assets/modalImg1.png"
import modalImg2 from "../../assets/modalImg2.png"
import modalImg3 from "../../assets/modalImg3.png"
import "./styles/Admin.css"
import { useState, useEffect } from "react"
import SearchBar from "../SearchPage/SearchBar"
import PhoneInput from "react-phone-number-input"
import SearchResultsList from "../SearchPage/SearchResultsList"

function ModalWindow({setShowModal, showModal, pharmacy, setPharmacy}){        
    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')
    function setVal(val){
        setValue(val)
        setShowModal(0)
    }
    useEffect(() =>{
        const getData = async () => {
          try {
            if(search.length == 0) return setResults([])
            const res = await fetch(`https://api.api-ninjas.com/v1/city?name=${search}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'YyCNiWSniuPnDLqZrRD9Pw==LjdmQ2g9xyJ4Epm9'
                }
            })
            const data = await res.json()
            return setResults(data)
          } catch (err) {
            console.log(err)
          }
        }
        getData()
    }, [search]);
    if(showModal == 1)
    {return (
        <div className="modal-container">
        <div className="modal">
            <button className="modalExit" onClick={() => setShowModal(false)}>X</button>
            <img src={modalImg1} alt="maps1" className="img1" />
            <h2>1. Search your own location</h2>
            <h2>2. Press "Share"</h2>
            <img src={modalImg2} alt="maps2" className="img2" />
            <h2>3. Press "Embed a map"</h2>
            <h2>4. Press "COPY HTML"</h2>
            <h2>5. Paste the code in the &lt;iframe... field.</h2>
        </div>
        </div>
    )}else if(showModal == 2){
        return (
            <div className="modal-container">
            <div className="modal">
                <button className="modalExit" onClick={() => setShowModal(0)}>X</button>
                <h2>Send either one of us an email with your pharmacy's id<br /> in order to get verified.<br />you can see an id of your pharmacy here:</h2>
                <img src={modalImg3} alt="maps3" className="img3" />
            </div>
            </div>
        )
    }else if (showModal == 3){
        const [name, setInput] = useState('')
        return (
            <div className="modal-container">
                <div className="modal">
                    <button className="modalExit" onClick={() => setShowModal(0)}>X</button>
                    <input placeholder={pharmacy.name} onChange={(ev) => setInput(ev.target.value)}/>
                    <button onClick={() => {setPharmacy(
                        {
                            ...pharmacy,
                            name: name
                        }
                    ) 
                    setShowModal(0)}}>Submit</button>
                </div>
            </div>
        )
    }else if (showModal == 4){
        const [phoneNumber, setPhoneNumber] = useState('')
        return (
            <div className="modal-container">
                <div className="modal">
                    <button className="modalExit" onClick={() => setShowModal(0)}>X</button>
                    <div>
                    <PhoneInput
                        placeholder="Enter phone number..."
                        value={pharmacy.phone}
                        onChange={setPhoneNumber}/>
                    </div>
                    <button onClick={() => {
                        phoneNumber.replace('+', '')
                        setPharmacy(
                        {
                            ...pharmacy,
                            phone: phoneNumber
                        }) 
                        setShowModal(0)}}>Submit</button>
                </div>
            </div>
        )
    }else if (showModal == 5){
        const [address, setInput] = useState('')
        return (
            <div className="modal-container">
                <div className="modal">
                    <button className="modalExit" onClick={() => setShowModal(0)}>X</button>
                    <input placeholder={pharmacy.address} onChange={(ev) => setInput(ev.target.value)}/>
                    <button onClick={() => {
                        setPharmacy(
                        {
                            ...pharmacy,
                            address: address
                        }) 
                        setShowModal(0)}}>Submit</button>
                </div>
            </div>
        )
    }else if (showModal == 6){
        function setCity(val){
            setPharmacy(
                {
                    ...pharmacy,
                    city: val
                }) 
            setShowModal(0)
        }
        const [search, setSearch] = useState('')
        const [results, setResults] = useState([])
        useEffect(() =>{
            const getData = async () => {
              try {
                if(search.length == 0) return setResults([])
                const res = await fetch(`https://api.api-ninjas.com/v1/city?name=${search}`, {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': 'YyCNiWSniuPnDLqZrRD9Pw==LjdmQ2g9xyJ4Epm9'
                    }
                })
                const data = await res.json()
                return setResults(data)
              } catch (err) {
                console.log(err)
              }
            }
            getData()
        }, [search]);
        return (
            <div className="modal-container">
                <div className="modal">
                    <div className='city-input'>
                        <button className="modalExit" onClick={() => setShowModal(0)}>X</button>
                        <SearchBar setSearch={setSearch} placeHolder={'Search for City...'}/>
                        {results && results.length > 0 && <SearchResultsList results={results} setProduct={setCity} isCity={true}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalWindow