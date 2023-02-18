import { Fragment, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
    // Listening to context
    // Do not try and read context in the constructor! Do it in the componentDidMount function!
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            filteredUsers: [],
            searchTerm: "",
        };
    }

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    }

    setFilteredUsers(searchTerm) {
        this.setState({
            filteredUsers: this.context.users.filter((user) =>
                user.name.includes(searchTerm)
            ),
        });
    }

    // This function will only run once on Start!
    componentDidMount() {
        // Send an HTTP request to a server to recieve data when this component is mounted to the DOM
        this.setState({ filteredUsers: this.context.users });
    }

    componentDidUpdate(preProps, prevState) {
        if (this.state.searchTerm !== prevState.searchTerm) {
            this.setFilteredUsers(this.state.searchTerm);
        }
    }

    // This function will run when this component is removed from the DOM
    componentWillUnmount() {
        console.log("User will unmount!");
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input
                        type="search"
                        onChange={this.searchChangeHandler.bind(this)}
                    />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

export default UserFinder;

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     );
// };

// export default UserFinder;
