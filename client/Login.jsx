import React from 'react'

function Login() {
  const handleSubmit = async () => {

  }
  return (
    <div id='loginPage'>
      <h1>
        Solo Sync Login
      </h1>
      <div>
        <div id='loginCard'>
          <form id='form'>
            <div>
              <input name='email' placeholder="Email"></input>
            </div>
            <div>
              <input name='password' placeholder="Password"></input>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
