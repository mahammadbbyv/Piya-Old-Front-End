import './style/Register.css'
import CustomButton from '../CutomButton.jsx'

function Register(){
    return(
        <>
        <main>
            <div className="register-container">
                <div className="register">
                    <h2>Register</h2>
                    <div className="inputs">
                        <input type='email' placeholder="E-Mail..."/>
                        <input type='tel' placeholder='Phone Number...' />
                        <input type='password' placeholder="Password..." />
                        <input type='password' placeholder="Confirm Password..." />
                    </div>
                    <div className='register-buttons'>
                        <CustomButton text={"Register"} />
                        <CustomButton text={"Login"} linkText={'login'}/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Register