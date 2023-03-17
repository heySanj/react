import React, {useRef} from "react"

import classes from "./NewTodo.module.css"

type Props = {
    addTodo: Function
}

const NewTodo = ({addTodo}: Props) => {

    // With TypeScript, you need to specify what type of HTML element it will connect to
    // As well as set a default ref (can be null)
    const inputField = useRef<HTMLInputElement>(null)

    const formSubmissionHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = inputField.current!.value

        if(enteredText.trim().length === 0){
            // throw an error
            return
        }

        addTodo(enteredText)
    }

    return (
        <form onSubmit={formSubmissionHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={inputField} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;