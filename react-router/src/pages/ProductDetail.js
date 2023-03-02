import { Link, useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const params = useParams()

    return (
        <>
            <h1>Product: {params.productID}</h1>
            <p>A very nice Product!</p>
            <p><Link to=".." relative='path'>Go back</Link></p>
        </>
    );
};

export default ProductDetailPage;
