import React, {useRef, useContext} from "react"

import classes from "./NewTodo.module.css"
import { TodosContext } from "./store/todos-context"

const NewTodo = () => {

    const todosCtx = useContext(TodosContext)

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

        todosCtx.addTodo(enteredText)
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