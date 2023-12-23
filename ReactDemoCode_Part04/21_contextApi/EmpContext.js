import React from 'react';

export const EmpContext = React.createContext();

export class EmpProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empname: "Rahul",
            manager: true
        }
    }

    render() {
        return (
            <EmpContext.Provider value={{
                ...this.state,
                setEmpname: (name) => this.setState({empname: name}),
                toggleManager: () => this.setState({manager: !this.state.manager}),
            }}>
                {this.props.children}
            </EmpContext.Provider>
        )
    }
}

export const EmpConsumer = EmpContext.Consumer;

