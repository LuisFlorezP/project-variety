import { Link } from "react-router-dom";
import { database } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";

const CustomersAdmin = () => {

    const [customers, setCustomers] = useState([]);

    const readCustomers = async () => {
        const customersDatabase = collection(database, "cliente");

        const data = await getDocs(customersDatabase);

        setCustomers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    };

    useEffect(() => {
        readCustomers()
    }, [])

    return (
        <>
            <section>
                <Link to={"/adminoptions"}>Volver</ Link>
                <Link to={"/formcustomersadmin"}>Crear</ Link>
            </section>
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
                            <Link to={"/"}>Editar</Link>
                            <input type="button" value={'Eliminar'} />
                            <hr />
                        </section>
                    ))
                }
        </section>
        </>
    );
};

export default CustomersAdmin;