import './styles/Admin.css'
import PharmacyEditor from './PharmacyEditor.jsx'
import ProductEditor from './ProductEditor.jsx'
import ProductList from './ProductList.jsx'
import { useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalWindow from './ModalWindow.jsx'

function Admin(){
    const [showModal, setShowModal] = useState(0)
    const [pharmacy, setPharmacy] = useState({
        id: 0,
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        isVerified: false
    })
    const [cookies, setCookie] = useCookies(["token"]);
    const [reload, setReload] = useState(false)
    async function handleAdd(product){
        await axios.get(`https://magab17-001-site1.ltempurl.com/AddPharmaceuticalToPharmacy?name=${product}&pharmacyId=${pharmacy.id}&token=${cookies.token}`)
        .then(res => {
        if(res.data.ok){
            toast.success(res.data.res)
            setReload(!reload)
            return;
        }else{
            if(res.data.res == 'Token expired'){
                toast.warning(res.data.res)
                setCookie('token', '')
                setTimeout(() => {
                    window.location.href = '/login'
                }, 3000)
                return;
            }
        }})
    }
    async function handleRemove(product){
        await axios.get(`https://magab17-001-site1.ltempurl.com/RemovePharmaceuticalFromPharmacy?name=${product}&pharmacyId=${pharmacy.id}&token=${cookies.token}`)
        .then(res => {
        if(res.data.ok){
            toast.success(`Successfully removed a product named ${product}.`)
            setReload(!reload)
            return;
        }else{
            if(res.data.res == 'Token expired'){
                toast.warning(res.data.res)
                setCookie('token', '')
                setTimeout(() => {
                    window.location.href = '/login'
                }, 3000)
                return;
            }
        }})
    }
    useEffect(() => {
        async function getData(){
            if(cookies.token != undefined && cookies.token.length > 0){
                await axios.get(`https://magab17-001-site1.ltempurl.com/getPharmacy?token=${cookies.token}`)
                .then(res => {
                    if(res.data.ok){
                        setPharmacy({
                            id: res.data.res.Id,
                            name: res.data.res.Name,
                            phone: `+${res.data.res.PhoneNumber}`,
                            email: res.data.res.Email,
                            address: res.data.res.Address,
                            city: res.data.res.City,
                            isVerified: res.data.res.IsVerified
                        })
                        setReload(!reload)
                        return;
                    }else{
                        if(res.data.res == 'Token expired'){
                            setCookie('token', '')
                            window.location.href = '/login'
                            return;
                        }
                    }
                })
            }else{
                window.location.href = '/login'
                return;
            }
        }
        getData();
    },[]);
    return(
        <>
        <main>
            <div className='admin-container'>
                <div className='admin-editors'>
                    <PharmacyEditor setShowModal={setShowModal} pharmacy={pharmacy} />
                    <ProductEditor setProduct={handleAdd}/>
                </div>
                <div className='admin-list'>
                    <ProductList id={pharmacy.id} removeProduct={handleRemove} reload={reload}/>
                </div>
            </div>
            {showModal == 0 ? null : <ModalWindow setShowModal={setShowModal} pharmacy={pharmacy} setPharmacy={setPharmacy} showModal={showModal} />}
            <ToastContainer />
        </main>
        </>
    )
}

export default Admin