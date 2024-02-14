import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = async (e) => {  
    e.preventDefault(); 
    
    if(email === "" || password === "") {
      setError(true);
    } else {
      setSignUp(true);
      setError(false);
    }

    // setError(null);
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSignUp(false);
    }

    try {
      const response = await fetch("http://localhost:3000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error signing up");
      }

      setSuccess(true);
      // setError(null);

      // Redirect to the dashboard after successful sign-up
      window.location.href = "/Login";
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  //   setSignUp(false);
  // }

    // const handleSignUp = (e) => {
    //     e.preventDefault();
    //     if(email === "" || password === "") {
    //         setError(true);
    //     } else {
    //         setSignUp(true);
    //         setError(false);
    //     }
    // }

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
        <div id='signUpPg'>

            <div id="signUpText"><br/><br/>
                <h1> Where Solo Success Finds Its Beat </h1>
            </div>

            <div className="message">
                {errorMessage()}
                {successMessage()}
            </div>

            <div><br/><br/>
                <div className='emailPWContainer'>
                  <label className="label" placeholder="Email"> Email </label>
                  <input 
                    type="email"
                    value={email}
                    // onChange={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                </div><br/>

                <div className='emailPWContainer'>
                    <label className="label" placeholder="Email"> Password </label>
                    <input 
                    // onChange={handlePassword}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div><br/>

                <div className='emailPWContainer'>
                    <button onClick={handleSignUp} className="btn" type="signUp"> Submit </button>
                </div>
          </div>
        </div>
      )
}

export default SignUp
