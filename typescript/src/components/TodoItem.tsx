import classes from "./TodoItem.module.css"

import DeleteButton from "./ui/DeleteButton"

type Props = {
    text: string,
    onRemoveTodo: ()=> void,
}

const TodoItem = ({ text, onRemoveTodo }: Props) => {

    return (
        <li className={classes.item}>
            {text}
            <DeleteButton deleteHandler={onRemoveTodo} />
        </li>
    )
}

export default TodoItem;
