import './style/Register.css'
import CustomButton from '../CutomButton.jsx'

function Register(){
    return(
        <>
        <div className="register-container">
            <div className="register">
                <h2>Register</h2>
                <div className='register-buttons'>
                    <CustomButton text={"Register"} />
                    <CustomButton text={"Login"} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Register