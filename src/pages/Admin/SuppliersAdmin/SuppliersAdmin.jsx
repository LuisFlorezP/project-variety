import { Link } from "react-router-dom";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const SuppliersAdmin = () => {

    const [suppliers, setSuppliers] = useState([]);

    const readSuppliers = async () => {
        const data = await getDocs(collection(dataBase, "proveedor"));
        setSuppliers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    useEffect(() => {
        readSuppliers();
    }, []);

    return (
        <section className="contenedor">
        <NavbarAdmin form={"/formsuppliersadmin"}/>
            <section>
                {
                    suppliers.map((supplier) => (
                        <section key={supplier.id}>
                            <h1>{supplier.nombre}</h1>
                            <p>{supplier.ciudad}</p>
                            <p>{supplier.direccion}</p>
                            <p>{supplier.nit}</p>
                            <p>{supplier.nombre_gerente}</p>
                            <p>{supplier.telefono_gerente}</p>
                            <img src={supplier.imagen_gerente} alt="" />
                            <img src={supplier.logo_empresa} alt="" />
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

export default SuppliersAdmin;