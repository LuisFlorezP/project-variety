import "./SuppliersAdmin.css";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../../components/Navbar/NavbarAdmin";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";

const SuppliersAdmin = () => {
  const [suppliers, setSuppliers] = useState([]);

  const readSuppliers = async () => {
    const data = await getDocs(collection(dataBase, "proveedor"));
    setSuppliers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteSupplier = async (id) => {
    const deletedSupplier = doc(dataBase, "proveedor", id);
    await deleteDoc(deletedSupplier);
    readSuppliers();
  };

  useEffect(() => {
    readSuppliers();
  }, []);

  return (
    <>
      <NavbarAdmin form={"/formsuppliersadmin"} />
      <section className="card-suppliers">
        {suppliers.map((supplier) => (
          <section key={supplier.id}>
            <section className="card-header-suppliers">
              <h1>{supplier.nombre}</h1>
            </section>
            <section className="card-body-suppliers">
              <section className="card-image-suppliers">
                <img src={supplier.imagen_gerente} alt="Image Gerente" />
                <img src={supplier.logo_empresa} alt="Logo Empresa" />
              </section>
              <section className="card-info-suppliers">
                <p>{supplier.ciudad}</p>
                <p>{supplier.direccion}</p>
                <p>{supplier.nit}</p>
                <p>{supplier.nombre_gerente}</p>
                <p>{supplier.telefono_gerente}</p>
              </section>
            </section>
            <section className="buttons-suppliers">
              <Link to={"/EditServiceSupplier/" + supplier.id} className="editar-suppliers">
                Editar
              </Link>
              <input
                type="button"
                className="eliminar-suppliers"
                value={"Eliminar"}
                onClick={() => {
                  deleteSupplier(supplier.id);
                }}
              />
            </section>
          </section>
        ))}
      </section>
    </>
  );
};
export default SuppliersAdmin;
