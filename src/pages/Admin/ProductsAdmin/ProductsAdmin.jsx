import { Link } from "react-router-dom";

const ProductsAdmin = () => {
    return (
        <>
            <section>
                <Link to={"/adminoptions"}>Volver</ Link>
                <Link to={"/formproductsadmin"}>Crear</ Link>
            </section>
            <section>
                
            </section>
        </>
    );
};

export default ProductsAdmin;