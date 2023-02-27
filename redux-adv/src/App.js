import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";

let isInitial = true;

function App() {
    const cartVisible = useSelector((state) => state.ui.cartVisible);
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    // Whenever the cart state changes, it will be posted to the external database
    useEffect(() => {
        const sendCartData = async () => {
            // Send a notification to the UI
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data.",
                })
            );

            const response = await fetch(
                "https://react-learn-114fb-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (response.ok) {
                // Send a success notification to the UI
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        title: "Success!",
                        message: "Cart data was sent successfully!",
                    })
                );
            }
        };

        // Only send cart data after initial load
        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch((error) => {
            // Send an error notification to the UI
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    title: "Error!",
                    message: "There was an issue sending the cart data. 😔",
                })
            );
        });
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {cartVisible && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
