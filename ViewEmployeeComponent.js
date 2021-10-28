import React, { Component } from 'react';
import EmployeeService from './EmployeeService';


class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
        id: this.props.match.params.id,
        employee: {}
        }

    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
           <div className= "card col-md-6 6 offset-md-3">
            <h3 className = "text-center"> View Student Details</h3>
            <div className = "card-body">
                <div className = "row">
                    <label>Student First Name: </label>
                    <div>
                        {this.state.employee.firstName}
                    </div>

                </div>
                <div className = "row">
                    <label>Student Last Name: </label>
                    <div>
                        {this.state.employee.lastName}
                    </div>

                </div>
                <div className = "row">
                    <label>Student Email Address: </label>
                    <div>
                        {this.state.employee.emailId}
                    </div>

                </div>
                <div className = "row">
                    <label>Student Major: </label>
                    <div>
                        {this.state.employee.studentMajor}
                    </div>

                </div>
                <div className = "row">
                    <label>Student Recent Test Grade: </label>
                    <div>
                        {this.state.employee.studentGrade}
                    </div>
                    

                </div>

                <div className = "row">
                    <label>Student Courses: </label>
                    <div>
                        {this.state.employee.studentCourses}
                    </div>

                <div className = "row">
                    <label>Student Notes: </label>
                    <div>
                        {this.state.employee.notes}
                    </div>

                    

                </div>

                
                

            </div>
           </div>
            </div>
            </div>
        );
    }
}


export default ViewEmployeeComponent;