import React, { Component } from 'react';
import EmployeeService from './EmployeeService'

class ListEmployeeComponent extends Component {
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
            <h1 className="text-center">WebDev Highschool</h1>
            <p>Homeroom Class 906</p>
            <div className = "row"> 
         
            </div>
            <div className = "row">
  
                <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Student First Name</th>
                        <th>Student Last Name</th>
                        <th>Student Email</th>
                        <th>Student Major</th>
                        <th>Student Recent Test Grade</th>
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
                                             <td> {employee.emailId}</td>
                                             <td> {employee.studentMajor}</td>
                                             <td>{employee.studentGrade}</td>
                                    
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-primary">Update Details</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete Student</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-primary">View Full Details</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                </table>
                   <button className="btn btn-primary" onClick={this.addEmployee}>Add New Student</button>
            </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;