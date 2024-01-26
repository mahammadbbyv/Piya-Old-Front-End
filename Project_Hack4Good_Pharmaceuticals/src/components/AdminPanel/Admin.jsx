import './styles/Admin.css'
import PharmacyEditor from './PharmacyEditor.jsx'
import ProductEditor from './ProductEditor.jsx'
import ProductList from './ProductList.jsx'
import { useState } from 'react'

function Admin(){
    const [product, setProduct] = useState('')

    return(
        <>
        <main>
            <div className='admin-container'>
                <div className='admin-editors'>
                    <PharmacyEditor />
                    <ProductEditor />
                </div>
                <div className='admin-list'>
                    <ProductList product={product}/>
                </div>
            </div>
        </main>
        </>
    )
}

export default Admin