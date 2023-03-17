import classes from "./DeleteButton.module.css"

interface Props {
    deleteHandler: ()=>void
  }

const DeleteButton = ({ deleteHandler }: Props) => {

    return (
        <button type="submit" className={classes.deleteButton} onClick={deleteHandler}>
            X
        </button>

    )
}

export default DeleteButton;
