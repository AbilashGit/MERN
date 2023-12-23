import React from 'react'
import MyClassComponent from './components/MyClassComponent'
import MyFunctionalComponent from './components/MyFunctionalComponent'

class App extends React.PureComponent {
//class App extends React.Component {
    constructor(props) {
        super(props);
        this.refName = React.createRef();
        this.state = {
            name: ''
        }
    }
    handleSubmit() {
        let inputName = this.refName.current.value;
        this.setState({ name: inputName });
    }
    render() {
        console.log("Rendering App Component");
        return (
            <>
                <label>
                    Enter name:
                    <input type="text" ref={this.refName} />
                </label>
                <button onClick={() => this.handleSubmit()}>Submit</button>
                <MyClassComponent myname={this.state.name} />
                <MyFunctionalComponent myname={this.state.name} />
                <span style={{color: 'red'}}>Check the JavaScript console messages to see the render messages</span>
            </>
        )
    }
}

export default App