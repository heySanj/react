import React, { useRef, useImperativeHandle } from "react";

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef()

    const activate = () => {
        inputRef.current.focus()
    }

    // First argument is the ref that is passed from a higher component
    // Second argument is a function that will return an object
    useImperativeHandle(ref, () => {
        return {
            focus: activate // the key is the externally available name for the internally available function 'activate()'
        }
    })

    // // When this component is loaded -> focus on this component
    // useEffect(()=>{
    //     inputRef.current.focus()
    // }, []) // passing an empty dependancy list will run this code ONLY on the first load

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ""
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
