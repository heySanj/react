import { useReducer } from "react";

interface State {
    myNum: number;
}

const myReducer = (state: State, action: any) => {
    if (action.type === 'sub-5') {
        return {
            myNum: state.myNum - 5
        };
    }
    if (action.type === 'sub-1') {
        return {
            myNum: state.myNum - 1
        };
    }
    if (action.type === 'add-1') {
        return {
            myNum: state.myNum + 1
        };
    }
    if (action.type === 'add-5') {
        return {
            myNum: state.myNum + 5
        };
    }
    throw Error('Unknown action.');
}

const ReducerTest = () => {

    const [state, dispatch] = useReducer(myReducer, { myNum: 0 })
    const counter = state.myNum;

    return <>
        <h1>The count is: {counter}</h1>
        <button onClick={() => dispatch({ type: 'sub-5' })}>-5</button>
        <button onClick={() => dispatch({ type: 'sub-1' })}>-1</button>
        <button onClick={() => dispatch({ type: 'add-1' })}>+1</button>
        <button onClick={() => dispatch({ type: 'add-5' })}>+5</button>
    </>;
}

export default ReducerTest;