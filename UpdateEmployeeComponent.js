import React, { Component } from 'react';
import EmployeeService from './EmployeeService';


class UpdateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
 
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: '',
        studentMajor:'',
        notes:''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
       
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId,
                studentMajor: employee.studentMajor,
                studentGrade: employee.studentGrade,
                notes: employee.notes
            });
        });
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, studentMajor: this.state.studentMajor, notes: this.state.notes};
        console.log('employee =>' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
          this.props.history.push('/employees');
        });

        EmployeeService.createEmployee(employee).then(res =>{
        this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    changeStudentMajortHandler=(event)=>{
        this.setState({studentMajor: event.target.value});
    }
    changeNotesHandler=(event)=>{
        this.setState({notes: event.target.value});
    }


    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
             <div className = "container">
                 <div className = "row">
                     <div className = "card col-md-6 offset-md-3 offset-md-3">
                         <h3 className="text-center">Update Employee</h3>
                         <div className = "card-body">
                             <form>
                                 <div className = "form-group">
                                     <label>First Name: </label>
                                     <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                 </div>

                                 <div className = "form-group">
                                     <label>Last Name: </label>
                                     <input placeholder="Last Name" name="LastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                 </div>

                                 <div className = "form-group">
                                     <label>Email Id: </label>
                                     <input placeholder="Email Address" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                 </div>

                                 <div className = "form-group">
                                     <label>Major: </label>
                                     <input placeholder="Major" name="major" className="form-control" value={this.state.StudentMajor} onChange={this.changeStudentMajorHandler}/>
                                 </div>

                                 <div className = "form-group">
                                     <label>Grade: </label>
                                     <input placeholder="Grade" name="grade" className="form-control" value={this.state.studentgrade} onChange={this.changeStudentGradeHandler}/>
                                 </div>

                                 <div className = "form-group">
                                     <label>Notes: </label>
                                     <input placeholder="Notes" name="notes" className="form-control" value={this.state.notes} onChange={this.changeNotesHandler}/>
                                 </div>
                                <button className="btn btn-success" onClick={this.UpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                             </form>
                         </div>

                     </div>
                 </div>

             </div>
            </div>
        );
    }
}



export default UpdateEmployeeComponent;