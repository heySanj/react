import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

// Action creator Thunk! A function that returns a function!
//--> Async is allowed in the returned function!
export const sendCartData = (cart) => {
    // The function that will be returned can be asynchronous!
    return async (dispatch) => {
        // Send a notification to the UI
        dispatch(
            uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data.",
            })
        );
        // Function that sends the request
        const sendRequest = async () => {
            const response = await fetch(
                `https://react-learn-114fb-default-rtdb.firebaseio.com/cart.json?auth=${process.env.REACT_APP_FIREBASE_TOKEN}`,
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed. 😔");
            }
        };

        // Execute the sendRequest function in a try catch block
        try {
            await sendRequest();

            // Send a success notification to the UI
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Cart data was sent successfully!",
                })
            );
        } catch (error) {
            // Send an error notification to the UI
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "There was an issue sending the cart data. 😔",
                })
            );
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `https://react-learn-114fb-default-rtdb.firebaseio.com/cart.json`)

            if (!response.ok) {
                throw new Error("Could not fetch cart data.");
            }

            const data = await response.json();

            // If data is empty, return an empty array
            if(!data){
                return [];
            }

            return data;
        };

        try {
            // Fetch data from server and update the state with it
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData))

        } catch (error) {
            // Send an error notification to the UI
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "There was an issue fetching the cart data. 😔",
                })
            );
        }
    };
};
