import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import RootLayout from "./pages/Root";

// Define your routes with createBrowserRouter
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, // Instead of a path, setting index to true will load this route when the parent route is loaded
                element: <HomePage />,
            },
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "products/:productID", // :dynamic --> allows for variables to be placed in URLs
                element: <ProductDetailPage />,
            },
        ]
    }

]);

function App() {
    return <RouterProvider router={router}/>
}

export default App;
