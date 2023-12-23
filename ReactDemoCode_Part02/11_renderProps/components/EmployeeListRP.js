import React, { Component } from 'react'

class EmployeeListRP extends Component {
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
                <button onClick={() => addItem(this.refs.name.value)}>Add Employee (RP)</button>
                <ul>
                    {itemList}
                </ul>
            </>
        )
    }
}

export default EmployeeListRP