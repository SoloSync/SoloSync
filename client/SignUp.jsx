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
            id="text"
            className="success"
            style={{display: signUp ? "" : "none"}}
            > 
            <h6> {email}, successfully registered for SoloSync! </h6>
            
            </div>
        )
    }

    const errorMessage = () => {
        return(
            <div
            id="text"
            className="error"
            style={{display: error ? "" : "none"}}
            > 
            <h6> Please enter all fields </h6>
            
            </div>
        )
    }

    return(
        <div 
        id='signUpPg'>
            <div id="signUpText"><br/><br/>
                <h1> A way to find love, SoloSync </h1>
            </div> 
            <div className="message">
                {errorMessage()}
                {successMessage()}
            </div>
            <div><br/><br/>

                <div class='emailPWContainer'>
                    <label className="label" placeholder="Email"> Email </label>
                    <input 
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                    />

                </div><br/>

                <div class='emailPWContainer'>
                    <label className="label" placeholder="Email"> Password </label>
                    <input 
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                    />
                </div><br/>
                <div class='emailPWContainer'>
                    <button onClick={handleSignUp} className="btn" type="signUp"> Submit </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;