import React, { Component } from 'react'

export default class CustomerListNormal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }
    addCustomer = (name) => {
        this.setState(prevState => {
            return { customers: [...prevState.customers, name] };
        })
    }
    render() {
        let customers = this.state.customers.map((customer, index) => (
            <li key={index}>{customer}</li>
        ))
        return (
            <>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter customer name:
                    <input type="text" ref="name" />
                </label>
                <button onClick={() => this.addCustomer(this.refs.name.value)}>Add Customer</button>
                <ul>
                    {customers}
                </ul>
            </>
        )
    }
}
