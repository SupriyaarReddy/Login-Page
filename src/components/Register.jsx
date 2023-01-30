import React ,{useState} from "react";
import { Link } from "react-router-dom";
import Image from'../assets/Image/wissen.png'
export const Register = (props) =>{
    const [isError,setIsError] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [confirm,setConfirm] = useState('');
    const [name,setName] = useState('');

    const checkValidation=()=>{
        
        console.log("Password",pass);
        console.log("Confirm",confirm);

        if(pass !== confirm){
           setIsError("Confirm Password should be match with password")
      }
  };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        checkValidation()
        console.log(email);
    }
     
     

    return(
        <>
     
        <img className="img1" alt="Wissen logo" src={Image}/> 
        <div className="form-container">
             <h2 >REGISTER</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" id="name" name="name" placeholder="full Name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="your456@gmail.com" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" id="password" name="password"/>
            <label htmlFor="confirm">ConfirmPassword</label>

            <span>{isError}</span>
            <input
            value={confirm} 
            onChange={(e)=> setConfirm(e.target.value)} 
            type="password"
            id="confirm" 
            name="confirm"/>

     
            <button type="submit">Sign up</button>
        </form>
            <Link className="link-btn" to='/'>Already have an account? Login Here</Link>
        </div>
        </>
        
    )
}