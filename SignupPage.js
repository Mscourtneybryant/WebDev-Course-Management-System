import React from 'react';
import SignupForm from './SignupForm';
import Footer from './Footer';


class SignupPage extends React.Component {
    render() {
        return (
            <div className="back">
            <div className="row">
            <div className="col-sm-3.col-sm-offset-3">

           <SignupForm />

           <Footer/>
            </div>
            </div>
            </div>
   
        );
    }
}

export default SignupPage;
