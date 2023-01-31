import React ,{useState} from "react";
import "./login.css"
import Image from '../assets/Image/wissen.png'
import {Link} from 'react-router-dom'

export const Login = (props) =>{
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return ( 
        <>
          <img className="img1" alt="Wissen logo" src={Image}/> 
      <div className="form-container">
       
        <h2 >USER LOGIN</h2>
       <form className="login-form"  onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="your456@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" id="password" name="password"/>
        
        <Link to='/welcome' className="nav-link">Login</Link>
<div>
  <p>Or</p>
</div>
       
        <Link to='/welcome' className="nav-link">Login through outlook</Link>
      
      </form>
      <Link className="link-btn" to='/signup'>Dont have an account? Register Here</Link>
      </div>
      
      </>
    )
    
    }