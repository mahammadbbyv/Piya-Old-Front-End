import { Link } from "react-router-dom"
import './styles/Header.css'
import i from '../assets/i.png'

function Header(){
    return(
        <div className="header">
            <div className="logo">
                <span className="logo-text"><h1>P</h1><img src={i} className="i-logo-image"/><h1>YA</h1></span>
            </div>
            <ul className="navbar">
                <li><Link to={'/search'}>Search</Link></li>
                <li><Link to={'/'}>Join</Link></li>
            </ul>
        </div>
    )
}

export default Header