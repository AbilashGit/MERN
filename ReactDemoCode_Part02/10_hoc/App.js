import React, { Component } from 'react'
//import EmployeeListNormal from './components/EmployeeListNormal'
//import CustomerListNormal from './components/CustomerListNormal'
import EmployeeListHOC from './components/EmployeeList'
import CustomerListHOC from './components/CustomerList'

class App extends Component {
    render() {
        return (
            <>
                <EmployeeListHOC heading="Employee List (Using Higher Order Component)"/>
                <CustomerListHOC heading="Customer List (Using Higher Order Component)"/>
            </>
        )
    }
}

export default App
