import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

import { useSelector, useDispatch } from "react-redux";

let isInitial = true;

function App() {
    const cartVisible = useSelector((state) => state.ui.cartVisible);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);


    // This useEffect with no dependencies will only run once, on startup.
    useEffect(() =>{
        dispatch(fetchCartData())
    },[dispatch])

    // Whenever the cart state changes, it will be posted to the external database
    useEffect(() => {

        // Only the code following this IF block after initial startup
        if(isInitial){
            isInitial = false
            return
        }

        if(!cart.changed){
            return
        }

        // Dispatch a custom Action Creator Thunk!
        dispatch(sendCartData(cart.items))

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
