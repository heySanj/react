import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const Products = (props) => {
    const productList = DUMMY_PRODUCTS.map((product) => (
        <ProductItem key={product.id} product={product}/>
    ));

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {productList}
            </ul>
        </section>
    );
};

export default Products;
