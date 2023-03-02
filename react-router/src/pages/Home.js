import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

    // useNavigate() allows for navigation between pages programatically
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products') 
    }

    return (
        <>
            <h1>😀 My Home Page</h1>
            <p>Go to <Link to="products">Products</Link></p>
            <button onClick={navigateHandler}>Go somewhere!</button>
        </>
    );
};

export default HomePage;
