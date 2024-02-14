import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import background from './assets/Background.png'
import { useNavigate } from 'react-router-dom';

function Login() {

  const [info, setInfo] = useState({
    email:'',
    password:''
  });

  const navigation = useNavigate();

  const handleSubmit = async (info) => {
    try{
    const response = await fetch('http://localhost:3000/user/verify', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (!response.ok) {
      throw new Error('Failed to verify user')
    }

    const data = await response.json();
    if (data.verification === true) {
      navigation('/homepage')
    }
  }
    catch(error) {
      console.error(error, 'verify user failed')
    }
  }

  const handleEmail = (e) => {
    info.email = e.target.value
    setInfo(info)
  }

  const handlePassword = (e) => {
    info.password = e.target.value
    setInfo(info)
  }

  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id='loginPage' style={{backgroundImage: `url(${background})`}}>
      <Typography>
        <Button id='loginTitle' onClick={handleOpen} position='relative'>
          SoloSync
        </Button>
      </Typography>
      <div style={{position:'relative', textAlign: 'center'}}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='login'
          aria-describedby='login-area'
          style={{borderRadius:'10px'}}
        >
          <Box sx={style}>
          <div id='loginCardContainer'>
            <h1 style={{fontFamily:'fantasy'}} id='signInTitle'>Sign Into SoloSync</h1>
            <div id='form'>
              <div>
                <input type='text' className='loginInputs' name='email' placeholder="Email" onChange={handleEmail}></input>
              </div>
              <div>
                <input type='password' className='loginInputs' name='password' placeholder="Password" onChange={handlePassword}></input>
              </div>
              <div>
                <Link to='/signUp'>Forgot Password?</Link>
              </div>
              <div id='signUpPart'>
                <button id='signInBtn' type='submit' onClick={()=> handleSubmit(info)}>Sign In</button>
              </div>
            </div>
            <hr></hr>
        </div>
          <div id='signUpPart'>
            <p>Don't have an account?</p>
              <Link to='/SignUp'><button id="signUpBtn">Sign Up</button></Link>
          </div>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Login
