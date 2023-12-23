import React, { Component } from 'react'
import withItem from './withItem';

class EmployeeList extends Component {
    render() {
        const { items, addItem } = this.props;
        let itemList = items.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return (
            <>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter employee name:
                    <input type="text" ref="name" />
                </label>
                <button onClick={() => addItem(this.refs.name.value)}>Add Employee (HOC)</button>
                <ul>
                    {itemList}
                </ul>
            </>
        )
    }
}
// Argument 1 is passed to store name as uppercase
export default withItem(EmployeeList, 1)