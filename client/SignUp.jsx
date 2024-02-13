import React from 'react';
import { useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signUp, setSignUp] = useState(false);
    const [error, setError] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSignUp(false);
    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSignUp(false);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if(email === "" || password === "") {
            setError(true);
        } else {
            setSignUp(true);
            setError(false);
        }
    }

    const successMessage = () => {
        return(
            <div
            className="success"
            style={{display: signUp ? "" : "none"}}
            > 
            <h1> {email}, successfully registered for SoloSync! </h1>
            
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div
            className="error"
            style={{display: error ? "" : "none"}}
            > 
            <h1> Please enter all fields </h1>
            
            </div>
        )
    }

    return(
        <div>
            <div>
                <h1> SoloSync SignUp Page </h1>
            </div> 
            <div className="message">
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
                <label className="label" placeholder="Email"> Email </label>
                <input 
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />

                <label className="label" placeholder="Email"> Password </label>
                <input 
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />

                <button onClick={handleSignUp} className="btn" type="signUp"> 
                    SignUp
                </button>
            </form>
        </div>
    )
}

export default SignUp;