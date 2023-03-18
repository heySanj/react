import React, {useState} from 'react'

import Todo from '../../models/todo'

const DUMMY_ITEMS = [
    new Todo("Learn React"),
    new Todo("Learn TypeScript"),
    new Todo("Study for the Test!")
]

type TodosContextObj = {
    items: Todo[]; // An array of Todo items
    addTodo: (text: string)=> void; // A function that returns nothing
    removeTodo: (id: string) => void; // A function that returns nothing but takes a string input
}

// First we declare the type of variables we will be using in our context!
export const TodosContext = React.createContext<TodosContextObj>({
    // Then we actually create the context, using the types declared above
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
})

type Props = { children: React.ReactNode };

export const TodosContextProvider = (props: Props) => {

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

    // The value that will be distributed by the Provider
    const contextValue: TodosContextObj = {
        items: todoList,
        addTodo: createTodo,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>

}