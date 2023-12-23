import React, { Component } from 'react'

export default class EmployeeListNormal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }
    addEmployee = (name) => {
        this.setState(prevState => {
            return { employees: [...prevState.employees, name.toUpperCase()] };
        })
    }
    render() {
        let employees = this.state.employees.map((employee, index) => (
            <li key={index}>{employee}</li>
        ))
        return (
            <>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter employee name:
                    <input type="text" ref="name" />
                </label>
                <button onClick={() => this.addEmployee(this.refs.name.value)}>Add Employee</button>
                <ul>
                    {employees}
                </ul>
            </>
        )
    }
}
