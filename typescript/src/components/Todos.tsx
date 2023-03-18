import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "./store/todos-context"

import classes from "./Todos.module.css"

const Todos = () => {

    const todosCtx = useContext(TodosContext)

    return <ul className={classes.todos}>
        {todosCtx.items && todosCtx.items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
        ))}
    </ul>
}

export default Todos;