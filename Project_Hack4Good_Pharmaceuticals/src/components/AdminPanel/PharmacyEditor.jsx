import './styles/PharmacyEditor.css'
import CustomButton from '../CutomButton.jsx'
import { useState } from 'react';

function PharmacyEditor(){
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    function handleChange(val, error, regex, set){
        // regex for name validation
        if(!regex.test(val)){
            alert(error)
        }else{
            set(val)
        }
    }
    return(
        <>
        <div className='pharmacy-editor-container'>
            <h3>Pharmacy Editor</h3>
            
            <div className='pharmacy-inputs-wrapper'>
                <div className='input-box'>
                    <input type='text' placeholder='Pharmacy Name...' onChange={(ev) => (handleChange(ev.target.value, "Name must be letters only", /^[A-Za-z\s]+$/, setName))}/>
                    <input type='tel' placeholder='Phone Number...' onChange={(ev) => (handleChange(ev.target.value, "Phone number must be numbers only", /^\+\d{1,19}$/, setPhone))}/>
                    <input type='email' placeholder='E-Mail...' onChange={(ev) => (handleChange(ev.target.value, "Invalid E-Mail", /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/, setEmail))}/>
                </div>

                <div className='input-box'>
                    <input type='text' placeholder='Address' onChange={(ev) => (handleChange(ev.target.value, /^[A-Za-z0-9]+$/, setAddress))}/>
                    <input type='text' placeholder='City' onChange={(ev) => (handleChange(ev.target.value, /^[A-Za-z]+$/, setCity))}/>
                </div>
                
                <div className='submit-button'>
                    <CustomButton text={'Submit'}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default PharmacyEditor