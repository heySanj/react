const redux = require('redux')

// Create a reducer function
// Reducer functions need two inputs (1. The existing state & 2. The action to change the state)
// The function should output a new state that will replace the existing state (most often an object)
const counterReducer = (state = { counter: 0 }, action) => {

    if(action.type === 'INCREMENT'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            counter: state.counter - 1
        }
    }
    
    return state
}

// Create a store (storage database)
const store = redux.createStore(counterReducer)


// Create a subscription function
const counterSubscriber = () => {

    // Get the latest state from the store
    const latestState = store.getState()
    console.log(latestState)
}


// Subscribe a function to the state (The function will be executed whenever the state changes)
store.subscribe(counterSubscriber)


// Create and dispatch an action
store.dispatch({ type: 'INCREMENT' })