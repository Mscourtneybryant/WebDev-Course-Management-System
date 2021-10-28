import React from 'react';
import Nav from './Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './ListEmployeeComponent';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';
import './Logout.css';
import Grades from './Grades'
import Courses from './Courses';
import {Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';




function Logout() {

    const data2 = [
        {name:"Halle Solomon", uv: 1, pv:20, amt:50,},
        {name:"Irina Mitchell", uv: 3, pv:18, amt:50,},
        {name:"Princess Banks", uv: 0, pv:21, amt:50, },
        {name:"Jazmine Khan", uv: 2, pv:19, amt:50, },
        {name:"Heather Laurent", uv: 0, pv:21, amt:50,},
        {name:"Ricardo Cruz", uv:0, pv:21, amt:50,}

    ];
  return (
    <div>
        
        <Router>
        <Nav/>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> 
                    </Switch>
                    </div>
           
        </Router>
        <Grades/>
        <Courses/>  

        <div className ="container">
        
        <h3>Student Homework Submissions</h3>
        <p>pv=amount of homework recieved this semester uv=amount of homework not recieved this semester</p>
        </div>
         

         <center>
        <div className="box">
        <BarChart
          width={500}
          height={300}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#01579B" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#039BE5" />
        </BarChart>

        </div>
     
        </center>
    </div>
    
    
  );
}

export default Logout;