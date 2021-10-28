import React, { Component } from 'react'
import EmployeeService from './EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            studentMajor: '',
            studentGrade:'',
            notes:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeStudentGradeHandler = this.changeStudentGradeHandler.bind(this);
        this.changeNotesHandler = this.changeNotesHandler.bind(this);
        this.createEmployee = this.createEmployee.bind(this);

   
    }

    
    componentDidMount(){

        if(this.state.id === -1){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId,
                    studentMajor: employee.studentMajor,
                    studentGrade: employee.studentgrade,
                    notes: employee.notes
                });
            });
        }        
    }
    createEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, studentMajor: this.state.studentMajor, grade:this.state.studentGrade, notes: this.state.notes};
        console.log('employee => ' + JSON.stringify(employee));

    
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeStudentMajorHandler= (event) => {
        this.setState({studentMajor: event.target.value});
    }
    changeStudentGradeHandler= (event) => {
        this.setState({studentGrade: event.target.value});
    }
    changeNotesHandler= (event) => {
        this.setState({notes: event.target.value});
    }


    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
         
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Major: </label>
                                            <input placeholder="Student Major" name="studentMajor" className="form-control" 
                                                value={this.state.studentMajor} onChange={this.changeStudentMajorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Grade: </label>
                                            <input placeholder="Student Grade" name="studentGrade" className="form-control" 
                                                value={this.state.studentGrade} onChange={this.changeStudentGradeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Notes: </label>
                                            <input placeholder="Notes" name="notes" className="form-control" 
                                                value={this.state.notes} onChange={this.changeNotesHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.createEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent