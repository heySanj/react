// // Create a reducer function
// // Reducer functions need two inputs (1. The existing state & 2. The action to change the state)
// // The function should output a new state that will replace the existing state (most often an object)
// const counterReducer = (state = initialState, action) => {
//     // REMEMBER!! NEVER CHANGE THE EXISTING STATE!
//     // Always return a completely new state to avoid bugs
//     if (action.type === "INCREMENT") {
//         // state.counter++   <---- DONT DO THIS!

//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "DECREMENT") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "count") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "toggle") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         };
//     }

//     return state;
// };