import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import soloSync from './assets/SoloSyncLogo.png'
import background from './assets/Background.png'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      fetch()
        .then((response) => {
          console.log(response)
        })
    }
    catch {
      console.log(error)
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
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
            <form id='form' onSubmit={handleSubmit}>
              <div>
                <input type='text' className='loginInputs' name='email' placeholder="Email" onChange={handleEmail}></input>
              </div>
              <div>
                <input type='password' className='loginInputs' name='password' placeholder="Password" onChange={handlePassword}></input>
              </div>
              <div>
                <Link>Forgot Password?</Link>
              </div>
              <div id='signUpPart'>
                <button id='signInBtn' type='submit'>Sign In</button>
              </div>
            </form>
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
    // <div id='loginPage' style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'left 5px center', height: `100vh`}}>
    //   <div id='loginCard'>
    //     <div id='loginCardContainer'>
    //       <div id='loginCardHeader'>
    //         <div>
    //           <h2>
    //             SoloSync Sign In
    //           </h2>
    //         </div>
    
    //       </div>
    //       <div>
    //         <form id='form' onSubmit={handleSubmit}>
    //           <div>
    //             <input name='email' placeholder="Email" onChange={handleEmail}></input>
    //           </div>
    //           <div>
    //             <input name='password' placeholder="Password" onChange={handlePassword}></input>
    //           </div>
    //           <div>
    //             <Link>Forgot Password?</Link>
    //           </div>
    //           <div>
    //             <button id='signInBtn' type='submit'>Sign In</button>
    //           </div>
    //         </form>
    //         <hr></hr>
    //       </div>
    //         <div id='signUpPart'>
    //           <p>Don't have an account?</p>
    //             <Link to='/SignUp'><button id="signUpBtn">Sign Up</button></Link>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Login
