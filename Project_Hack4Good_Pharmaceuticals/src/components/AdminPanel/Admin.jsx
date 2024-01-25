import './styles/Admin.css'
import PharmacyEditor from './PharmacyEditor.jsx'
import ProductEditor from './ProductEditor.jsx'
import ProductList from './ProductList.jsx'

function Admin(){
    return(
        <>
        <div className='admin-container'>
            <div className='admin-editors'>
                <PharmacyEditor />
                <ProductEditor />
            </div>
            <div className='admin-list'>
                <ProductList />
            </div>
        </div>
        </>
    )
}

export default Admin