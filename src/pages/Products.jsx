  import { dataBase } from "../components/config/database";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const readProducts = async () => {
    const data = await getDocs(collection(dataBase, "producto"));
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <section className="container-table-general">
      <table className="container-table">
        <thead>
            <tr>
              <th className="text-th">Name</th>
              <th className="text-th">Description</th>
              <th className="text-th">Category</th>
              <th className="text-th">Price</th>
              <th className="text-th">Amount</th>
              <th className="text-th">Product</th>
            </tr>
        </thead>
        <tbody>
          {products.map((product) => (
          <tr className="row-table" key={product.id}>
            <td>{product.nombre}</td>
            <td>{product.descripcion}</td>
            <td>{product.categoria}</td>
            <td>{product.valor}</td>
            <td>{product.cantidad}</td>
            <td id="td-img-table">
              <img id="img-table" src={product.imagen}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
};

export default Products;
