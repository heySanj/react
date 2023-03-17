import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css"

type Props = {
    items: Todo[]
    onRemoveTodo: Function
}

const Todos = ({ items, onRemoveTodo }: Props) => {
    return <ul className={classes.todos}>
        {items && items.map((item) => (
            <TodoItem key={item.id} text={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)}/>
        ))}
    </ul>
}

export default Todos;