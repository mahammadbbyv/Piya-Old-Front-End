import './style/Login.css'
import CustomButton from '../CutomButton.jsx'

function Login(){

    return(
        <>
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <input placeholder="E-Mail..."/>
                <input placeholder="Password..."/>
                <div className='login-buttons'>
                    <CustomButton text={"Login"} />
                    <CustomButton text={"Register"} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Login