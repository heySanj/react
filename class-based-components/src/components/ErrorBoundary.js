import React, { Component } from 'react';

// A wrapper component that catches any errors thrown by child components.
class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state = { hasError: false }
    }

    componentDidCatch(error){
        this.setState({ hasError: true })
    }

    render(){
        if(this.state.hasError){
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }
}
 
export default ErrorBoundary;