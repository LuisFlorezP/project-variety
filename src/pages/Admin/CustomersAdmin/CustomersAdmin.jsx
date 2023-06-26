import { Link } from "react-router-dom";
import "./CustomersAdmin.css";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const CustomersAdmin = () => {

    const [customers, setCustomers] = useState([]);

    const readCustomers = async () => {
        const data = await getDocs(collection(dataBase, "cliente"));
        setCustomers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    useEffect(() => {
        readCustomers();
    }, []);

    return (
        <section className="contendor">
            <NavbarAdmin form={"/formcustomersadmin"} />
            <section>
                {
                    customers.map((customer) => (
                        <section key={customer.id}>
                            <h1>{customer.nombre}</h1>
                            <p>{customer.barrio}</p>
                            <p>{customer.ciudad}</p>
                            <p>{customer.correo}</p>
                            <p>{customer.direccion}</p>
                            <p>{customer.documento}</p>
                            <p>{customer.telefono}</p>
                            <p>{customer.valor}</p>
                            <img src={customer.imagen} alt="" />
                            <Link to={""}>Editar</Link>
                            <input type="button" value={'Eliminar'} />
                            <hr />
                        </section>
                    ))
                }
            </section>
        </section>
    );
}
export default CustomersAdmin;