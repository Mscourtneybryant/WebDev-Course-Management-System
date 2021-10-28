import React from 'react';
import './App.css';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {

  const user = useSelector(selectUser);
  
  
  return (

   
    <Router>
      <div className='App'>
   
      {user ? <Logout /> : <Login />}
       
        <Switch>
          <Route path="/" exact component={Footer} />
          <Footer/>
      
  
        </Switch>
      
     </div>
    
    </Router>

  
  )

}





 export default App;
