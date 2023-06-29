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
    <section className="container-table-general">
      <table className="container-table">
        <thead>
            <tr>
              <th className="text-th">Name</th>
              <th className="text-th">Nit</th>
              <th className="text-th">Address</th>
              <th className="text-th">City</th>
              <th className="text-th">Manager name</th>
              <th className="text-th">Manager phone</th>
              <th className="text-th">Company logo</th>
              <th className="text-th">Manager</th>
            </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
          <tr className="row-table" key={supplier.id}>
            <td>{supplier.nombre}</td>
            <td>{supplier.nit}</td>
            <td>{supplier.direccion}</td>
            <td>{supplier.ciudad}</td>
            <td>{supplier.nombre_gerente}</td>
            <td>{supplier.telefono_gerente}</td>
            <td id="td-img-table">
              <img id="img-table" src={supplier.logo_empresa}/>
            </td>
            <td id="td-img-table">
              <img id="img-table" src={supplier.imagen_gerente}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
};

export default Suppliers;
