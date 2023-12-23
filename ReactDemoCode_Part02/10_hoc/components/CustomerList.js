import React, { Component } from 'react'
import withItem from './withItem';

class CustomerList extends Component {
    render() {
        const { items, addItem } = this.props;
        let itemList = items.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return (
            <>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter customer name:
                    <input type="text" ref="name" />
                </label>
                <button onClick={() => addItem(this.refs.name.value)}>Add Customer (HOC)</button>
                <ul>
                    {itemList}
                </ul>
            </>
        )
    }
}

// Argument 0 is passed to store name as it is
export default withItem(CustomerList, 0)