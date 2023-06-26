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
    <section>
      {products.map((product) => (
        <section key={product.id}>
          <h1>{product.cantidad}</h1>
          <p>{product.categoria}</p>
          <p>{product.descripcion}</p>
          <p>{product.nombre}</p>
          <p>{product.valor}</p>
          <img src={product.imagen}/>
        </section>
      ))}
    </section>
  );
};

export default Products;
