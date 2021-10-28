import React, { Component } from 'react';
import EmployeeService from './EmployeeService';

class Courses extends Component {

                 constructor(props) {
        super(props);
        
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
     
    
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !==id)});
        })
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

     componentDidMount(){
      EmployeeService.getEmployees().then((res) => {
      this.setState({employees: res.data})
      });
     }

     addEmployee(){
         this.props.history.push('/add-employee');
     }
    render() {
        return (
            <div>
           
            <div className = "row"> 
         
            </div>
            <div className="container">
               <h3>Student Courses</h3>
               <p>Students are allowed to choose any three classes of their choice for their major and may switch only ONCE during their first semester. </p>
               </div>
            <div className = "container">
            
                <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Student First Name</th>
                        <th>Student Last Name</th>
                        <th>Student Courses</th>
                        <th>Actions</th>
                    </tr>
                </thead>
              

                <tbody>
        
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.firstName} </td>   
                                             <td> {employee.lastName}</td>
                                             <td>{employee.studentCourses}</td>
                                    
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-primary">Update Course Details</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View Full Details</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                </table>

            </div>

            </div>
        );
    }
}

                
            
export default Courses;