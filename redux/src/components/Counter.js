// import { Component } from 'react'

import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
    // useDispatch returns a function that can be used to dispatch actions to the redux store
    const dispatch = useDispatch();

    // useSelector is used to grab a slice of data from the store
    // (handy with complex applications with large amounts of data stored in the state)
    // --------------------------------------------------------------------------
    // Redux automatically sets up the subscription when useSelector is used
    // Therefore this component will be updated with the latest data
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.showCounter)

    const incrementHandler = () => {
        dispatch({
            type: "INCREMENT",
        });
    };

    const decrementHandler = () => {
        dispatch({
            type: "DECREMENT",
        });
    };

    const countHandler = () => {
        dispatch({ type: 'count', amount: 5})
    }

    const toggleCounterHandler = () => {
        dispatch({ type: 'toggle'})
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={decrementHandler}>-1</button>
                <button onClick={incrementHandler}>+1</button>
                <button onClick={countHandler}>+5</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;

// class Counter2 extends Component {

//     incrementHandler(){
//         this.props.increment()
//     }

//     decrementHandler(){
//         this.props.decrement()
//     }

//     toggleCounterHandler(){};

//     render(){
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'INCREMENT'}),
//         decrement: () => dispatch({type: 'DECREMENT'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
