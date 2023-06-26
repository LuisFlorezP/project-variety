import { Link } from "react-router-dom";
import "./ProductsAdmin.css";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const ProductsAdmin = () => {

    const [products, setProducts] = useState([]);

    const readProducts = async () => {
        const data = await getDocs(collection(dataBase, "producto"));
        setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    useEffect(() => {
        readProducts();
    }, []);

    return (
        <section className="container">
            <NavbarAdmin form={"/formproductsadmin"}/>
            <section>
                {
                    products.map((product) => (
                        <section key={product.id}>
                            <h1>{product.nombre}</h1>
                            <p>{product.descripcion}</p>
                            <p>{product.categoria}</p>
                            <p>{product.valor}</p>
                            <p>{product.cantidad}</p>
                            <img src={product.imagen} alt="" />
                            <Link to={""}>Editar</Link>
                            <input type="button" value={'Eliminar'} />
                            <hr />
                        </section>
                    ))
                }
            </section>
        </section>
    );
};

export default ProductsAdmin;