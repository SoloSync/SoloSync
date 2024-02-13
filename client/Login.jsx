import React from 'react'

function Login() {
  const handleSubmit = async () => {

  }
  return (
    <div style={{backgroundImage: `url("https://spectrumtransformation.com/wp-content/uploads/2018/06/connected.png")`}}>
      <form action={handleSubmit}>
        <input name='email' placeholder="Email"></input>
        <input name='password' placeholder="Password"></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
