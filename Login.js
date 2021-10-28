import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';
import './Login.css'


const Login = () => {
   const [name, setName] = useState("");
  
   const [password, setPassword] = useState("");

   const dispatch = useDispatch();

   const handleSubmit = (e) => {
       e.preventDefault();

       dispatch(login({
       name: name,
      
       password:password,
       loggedIn:true,
       }));
   };


    return (
        <div className="back">
        <div className="login">
            <div className="form_background">
            <form className="login_form" onSubmit={(e)=> handleSubmit(e)}>
                <h1>You are not logged in.</h1>
            <p>Please enter your email and password to continue:</p>
            <input type="name" placeholder="Email" value={name} onChange={(e) => setName(e.target.value)} />
            
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <button type="submit" className="submit_btn">Sign In</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Login
