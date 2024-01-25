import './style/Register.css'
import CustomButton from '../CutomButton.jsx'
import { useState } from 'react'
import passwordImage from '../../assets/password.png'

function Register(){
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    function handleChange(val, error, regex, set){
        if(!regex.test(val)){
            alert(error)
        }else{
            set(val)
        }
    }
    return(
        <>
        <main>
            <div className='register-wrapper'>
                <img src={passwordImage}/>
                <div className="register-container">
                    <div className="register">
                        <h2>Register</h2>
                        <input placeholder="E-Mail..." onChange={(val) => handleChange(val.target.value)}/>
                        <input placeholder="Phone Number..." onChange={(val) => setPhoneNumber(val.target.value)}/>
                        <input type='password' placeholder="Password..." onChange={(val) => setPassword(val.target.value)}/>
                        <input type='password' placeholder="Confirm Password..." onChange={(val) => setConfirmPassword(val.target.value)} />
                    </div>
                    <div className='register-buttons'>
                        <CustomButton text={"Login"} linkText={"login"} />
                        <CustomButton text={"Register"} linkText={"register"} />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Register