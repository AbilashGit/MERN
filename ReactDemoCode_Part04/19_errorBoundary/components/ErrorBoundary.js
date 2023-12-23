import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log("====> ERROR: " + error);
        console.log("====> INFO: " + JSON.stringify(info));
    }

    render() {
        console.log(this.props.id);
        let prefix = this.props.id ? this.props.id + ') ' : ''

        if (this.state.hasError) {
            return <p style={{color: "red"}}>{prefix}Error occurred in rendering component</p>
        }
        return this.props.children
    }
}
