import React, { Component } from 'react'
import Item from './components/Item'
import EmployeeList from './components/EmployeeListRP'
import CustomerList from './components/CustomerListRP'

class App extends Component {
    render() {
        return (
            <>
                <Item isUpper={true}>
                    {(items, addItem) => (
                        <EmployeeList items={items} addItem={addItem} heading="Employee List (Using Render Props)" />
                    )}
                </Item>
                <Item>
                    {(items, addItem) => (
                        <CustomerList items={items} addItem={addItem} heading="Customer List (Using Render Props)" />
                    )}
                </Item>
            </>
        )
    }
}

export default App