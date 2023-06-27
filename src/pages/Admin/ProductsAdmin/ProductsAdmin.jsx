import "./ProductsAdmin.css";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);

  const readProducts = async () => {
    const data = await getDocs(collection(dataBase, "producto"));
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteProduct = async (id) => {
    const deletedProduct = doc(dataBase, "producto", id);
    await deleteDoc(deletedProduct);
    setProducts(products.filter((product) => product.id !== id));
  };

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <>
      <NavbarAdmin form={"/formproductsadmin"} />
      <section className="card-products">
        {products.map((product) => (
          <section key={product.id}>
            <section className="card-header-products">
              <h1>{product.nombre}</h1>
            </section>
            <section className="card-body-products">
              <section className="card-image-products">
                <img src={product.imagen} alt="Imagen" />
              </section>
              <section className="card-info-products">
                <p>{product.descripcion}</p>
                <p>{product.categoria}</p>
                <p>{product.valor}</p>
                <p>{product.cantidad}</p>
              </section>
            </section>
            <section className="buttons-products">
              <Link to={""} className="editar-products">
                Editar
              </Link>
              <input
                type="button"
                className="eliminar-products"
                value={"Eliminar"}
                onClick={() => {
                  deleteProduct(product.id);
                }}
              />
            </section>
          </section>
        ))}
      </section>
    </>
  );
};
export default ProductsAdmin;
