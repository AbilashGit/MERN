import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserForm from './UserForm';

var currentID=0;
// Container Component
class UsersComponent extends Component {
  constructor(props) {
    super(props);
  }

  addUser(user) {
    this.props.dispatch({ type: 'ADD_USER', id: currentID++, name: user.name, location: user.location});
  }

  render() {
    return (
      <div>
        <UserForm onAddUser={(u) => this.addUser(u)} />
        <ul>
          {this.props.users.map(user =>
            <li key={user.id}> {user.name}, {user.location} </li>
          )}
        </ul>
      </div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UsersComponent); 
