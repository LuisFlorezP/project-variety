import { useEffect, useState } from "react";
import { dataBase } from "../components/config/database";
import { collection, getDocs } from "@firebase/firestore";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  const readSuppliers = async () => {
    const data = await getDocs(collection(dataBase, "proveedor"));
    setSuppliers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    readSuppliers();
  }, []);

  return (
    <section>
      {suppliers.map((supplier) => (
        <section key={supplier.id}>
          <p>{supplier.ciudad}</p>
          <p>{supplier.direccion}</p>
          <p>{supplier.nit}</p>
          <p>{supplier.nombre}</p>
          <p>{supplier.nombre_gerente}</p>
          <p>{supplier.telefono_gerente}</p>
          <img src={supplier.imagen_gerente} />
          <img src={supplier.logo_empresa} />
        </section>
      ))}
    </section>
  );
};

export default Suppliers;
