import { Link } from "react-router-dom"
import "./styles/CustomButton.css"

function CustomButton({text, linkText}){

    return(
        <>
        <Link className="btn" to={"/" + {linkText}}>{text}</Link>
        </>
    )
}

export default CustomButton