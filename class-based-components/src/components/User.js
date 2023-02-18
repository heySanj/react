import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
    // This function will run when this component is removed from the DOM
    componentWillUnmount() {
        console.log("User will unmount!");
    }

    // The render() method is called by React whenever this class is used in JSX code
    // equivalent to a return statement in a Functional Compnent
    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
