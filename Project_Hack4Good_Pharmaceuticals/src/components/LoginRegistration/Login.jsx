import './style/Login.css'
import CustomButton from '../CutomButton.jsx'
import { useState } from 'react'

function Login(){
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    return(
        <>
        <main>
            <div className="login-container">
                <div className="login">
                    <h2>Login</h2>
                    <input placeholder="E-Mail..." onChange={(val) => setEmail(val.target.value)}/>
                    <input type='password' placeholder="Password..." onChange={(val) => setPassword(val.target.value)}/>
                    <input type='number' placeholder='authenticator' />
                </div>
                <div className='login-buttons'>
                    <CustomButton text={"Login"} linkText={"loginVerification"} />
                    <CustomButton text={"Register"} linkText={"register"} />
                </div>
            </div>
        </main>
        </>
    )
}

export default Login