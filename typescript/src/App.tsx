import { useState } from 'react';


import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

const DUMMY_ITEMS = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
    new Todo("Study for the Test!")
]



function App() {

    const [todoList, setTodoList] = useState<Todo[]>(DUMMY_ITEMS);


    const createTodo = (text: string) => {
        const newTodo = new Todo(text)

        // Remember, when updating states -> Use a function that returns the newest value!
        setTodoList((prevTodos) => {
            return prevTodos.concat(newTodo)
        })
    }

    const removeTodoHandler = (todoId: string) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }


    return (
        <>
            <NewTodo addTodo={createTodo} />
            <Todos items={todoList} onRemoveTodo={removeTodoHandler} />
        </>


    );
}

export default App;
