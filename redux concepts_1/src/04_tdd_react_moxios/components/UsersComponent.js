import React, { Component } from 'react';

export default class UsersComponent extends Component {
    render() {
        let userNodes = this.props.users && this.props.users.map((user, index) => (
            <li key={index}>
                {user.name}, {user.location}
            </li>
        ));
            
        return (
            <ul>
                {userNodes}
            </ul>
        )
    }
}