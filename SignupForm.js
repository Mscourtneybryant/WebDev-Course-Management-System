import React, { Component } from 'react';
import './SignupPage.css'


 class SignupForm extends Component {
     constructor(props){
         super(props);
         this.state={
             email:'',
             password:'',
            
            

         }

         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
     }

     onChange(e) {
         this.setState({ [e.target.name] : e.target.value});
     }

     onSubmit(e) {
         e.preventDefault();
         console.log(this.state);
     }

    render() {

             
          
          
        return (

          
           <form onSubmit={this.onSubmit}>
               <h1>WebDev HighSchool Sign Up</h1>


          <div className="form-group">
          <label className="control-label">Email</label>
          <input 
          value={this.state.email}
          onChange={this.onChange}
          type="text" 
          name="email" 
         
          className="form-control" />
          </div>

          <div className="form-group">
          <label className="control-label">Password</label>
          <input 
          value={this.state.password}
          onChange={this.onChange}
          type="text" 
          name="password" 
         
          className="form-control" />
          </div>

         

          

          <div className="form-group">
          <button onClick={alert} className="btn btn primary btn-lg btn-info">Sign Up!</button>    
          </div>
           </form>
        )
    }
}

export default SignupForm;
