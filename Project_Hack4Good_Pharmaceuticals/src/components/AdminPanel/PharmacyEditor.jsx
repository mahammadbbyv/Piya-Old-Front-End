import './styles/PharmacyEditor.css'
import CustomButton from '../CutomButton.jsx'
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import SearchBar from '../SearchPage/SearchBar.jsx'
import SearchResultsList from '../SearchPage/SearchResultsList.jsx';
import axios from 'axios';
import { CookiesProvider, useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PharmacyEditor({setShowModal, pharmacy}){
    const [cookies, setCookie] = useCookies(["token"]);
    async function submit(){
        await axios.get(`https://magab17-001-site1.ltempurl.com/updatePharmacy?pharmacyId=${pharmacy.id}&name=${pharmacy.name}&phoneNumber=${pharmacy.phone.replace('+ ', '')}&address=${encodeURIComponent(pharmacy.address)}&city=${pharmacy.city}&token=${cookies.token}`)
        .then(res => {
        if(res.data.ok){
            toast.success("Successfully updated your data!")
            return;
        }else{
            if(res.data.res == 'Token expired'){
                toast.warning(res.data.res)
                setCookie('token', '')
                setTimeout(() => {
                }, 3000)
                window.location.href = '/login'
                return;
            }
        }})
    }
    return(
        <>
        <div className='pharmacy-editor-container'>
            <h3>Pharmacy Editor ID:{pharmacy.id}</h3>
            
            <div className='pharmacy-inputs-wrapper'>
                <div className='input-box'>
                    <div className='input'>
                        <input type='text' value={pharmacy.name} placeholder='Pharmacy Name...' disabled/>
                        <button className='edit_btn' onClick={() => setShowModal(3)}><h2>🖋️</h2></button>
                    </div>
                    <div className='input'>
                    <PhoneInput
                            placeholder="Enter phone number..."
                            value={pharmacy.phone}
                            disabled
                            onChange={setCookie}/>
                        <button className='edit_btn' onClick={() => setShowModal(4)}><h2>🖋️</h2></button>
                    </div>
                    <input type='email' placeholder='E-Mail...' value={pharmacy.email} disabled/>
                </div>

                <div className='location-inputs'>
                    <div className='input-box'>
                        <div className='input'>
                            <input type='text' placeholder='<iframe...' disabled value={pharmacy.address}/>
                            <button className='edit_btn' onClick={() => setShowModal(5)}><h2>🖋️</h2></button>
                            <button onClick={() => setShowModal(1)}><h2>?</h2></button>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='City' disabled value={pharmacy.city} />
                            <button className='edit_btn' onClick={() => setShowModal(6)}><h2>🖋️</h2></button>
                        </div>
                    </div>
                </div>
                <div className='last-column'>
                    <h4>Is Verified: <span>{pharmacy.isVerified ? "true" : "false"}</span></h4> <button onClick={() => setShowModal(2)}><h2>?</h2></button>
                    <div className='submit-button'>
                        <button className="btn" onClick={()=>submit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PharmacyEditor