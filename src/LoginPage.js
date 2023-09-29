import React, { useState } from 'react'
import './styles/Loginpage.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LoginPage() {
  const[email,setemail] =useState('');
  const[password,setpassword] = useState('')
  const emailChange =(e)=>{
    setemail(e.target.value)
    }
    const passChange =(e)=>{
      setpassword(e.target.value)
    }
    const signIn =()=>{
 signInWithEmailAndPassword(auth,email,password).then(()=>toast.success('login success',{
  position:"top-center"
 })).catch(()=>{toast.error("Invalid Username/Password",{position:"top-center"})})
    }
  return (
    <>
    <div className='main-login-container'>
    <div className='loginpage-container'>
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
       <p className='ssin'>Sign in to view your profile</p> 
       
       <input type="text"  placeholder='Enter your Email' value={email} onChange={emailChange}/>
        <input type="password" placeholder='Enter your Password' value={password} onChange={passChange}/>
        <button onClick={signIn}>Login</button>
      <Link to={'/signup'}><p className='ssp-btn'>Sign Up</p></Link>  
 
      </div>
      </div>
      <ToastContainer />

      </>
  )
}

export default LoginPage