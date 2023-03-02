import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
    {
        id: "p1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "p2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "p3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "p4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const ProductsPage = () => {
    return (
        <>
            <h1>📦 Products Page</h1>
            <ul>
                {DUMMY_PRODUCTS.map(product => {
                    return <li key={product.id}><Link to={`/products/${product.name}`}>{product.name}</Link></li>
                })}
            </ul>
            <p>
                Go to <Link to="/">Home</Link>
            </p>
        </>
    );
};

export default ProductsPage;
