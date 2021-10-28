import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Nav() {

  let navStyle ={
    color: 'black'
    
  };

  return (
 <nav>
   
   <Link  to="/">
     <h2 className= "logo">WDHS Course Management System</h2>
     </Link>
     <ul className="nav-links">
         <Link style={navStyle} to="/chat">
         <li>Chat</li>
         </Link>
         <Link style={navStyle} to="/Homework">
         <li>Homework</li>
         </Link>
         <Link style={navStyle} to="/Uploads">
         <li>Uploads</li>
         </Link>
         <Link style={navStyle} to="/SignupPage">
           <li>Student/Parent Sign Up</li>
         </Link>
         
      
      
     </ul>
 </nav>
  );
}

export default Nav;
