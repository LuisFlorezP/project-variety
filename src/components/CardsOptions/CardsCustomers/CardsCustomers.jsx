import './CardsCustomers.css';
import { Link } from "react-router-dom";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";


const CardsCustomers = () => {

    const [customers, setCustomers] = useState([]);

    const readCustomers = async () => {
        const data = await getDocs(collection(dataBase, "cliente"));
        setCustomers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    useEffect(() => {
        readCustomers();
    }, []);

  return (
    <section className="card">
        {
            customers.map((customer) => (
                <section key={customer.id}>
                    <section className="card-header">
                        <h1>{customer.nombre}</h1>
                    </section>
                    <section className="card-body">
                        <section className="card-image">
                            <img src={customer.imagen} alt="Imagen" />
                        </section>
                        <section className="card-info">
                            <p>{customer.barrio}</p>
                            <p>{customer.ciudad}</p>
                            <p>{customer.correo}</p>
                            <p>{customer.direccion}</p>
                            <p>{customer.documento}</p>
                            <p>{customer.telefono}</p>
                            <p>{customer.valor}</p>
                        </section>
                    </section>
                    <section className="buttons">
                        <section className='editar'>
                            <Link to={""}>Editar</Link>
                        </section>
                        <section className='eliminar'>
                         <input type="button" value={'Eliminar'} />
                        </section>
                    </section>
                </section>
            ))
        }
    </section>
    );
}
export default CardsCustomers;
