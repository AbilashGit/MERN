import React, {Component} from 'react'

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddUser(this.state);
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add User</h3>
                <div>
                    <input type="text" id="name" value={this.state.name}
                        placeholder="Enter name"
                        onChange={event => this.setState({name: event.target.value})}
                    />
                </div>
                <div>
                    <input type="text" id="location" value={this.state.location}
                        placeholder="Enter location"
                        onChange={event => this.setState({location: event.target.value})}
                    />
                 </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        );
    }
}