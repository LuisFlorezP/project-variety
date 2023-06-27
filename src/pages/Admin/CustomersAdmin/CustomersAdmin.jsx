import './customersAdmin.css';
import { Link } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs,doc,deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";


const customerAdmin = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [customers, setCustomers] = useState([]);

    const readCustomers = async () => {
        const data = await getDocs(collection(dataBase, "cliente"));
        setCustomers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    const deleteCustomer = async (id) => {
        const deletedCustomer = (doc(dataBase,"cliente",id))
        await deleteDoc(deletedCustomer)
        setCustomers(customers.filter((customer)=>customer.id === id))
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        readCustomers();
    }, []);

  return (
    <>
    <NavbarAdmin form={"/formcustomersadmin"} />
        <section className="card-customers">
        {
            customers.map((customer) => (
                <section key={customer.id}>
                    <section className="card-header-customers">
                        <h1>{customer.nombre}</h1>
                    </section>
                    <section className="card-body-customers">
                        <section className="card-image-customers">
                            <img src={customer.imagen} alt="Imagen" />
                        </section>
                        <section className="card-info-customers">
                            <p>{customer.barrio}</p>
                            <p>{customer.ciudad}</p>
                            <p>{customer.correo}</p>
                            <p>{customer.direccion}</p>
                            <p>{customer.documento}</p>
                            <p>{customer.telefono}</p>
                            <p>{customer.valor}</p>
                        </section>
                    </section>
                    <section className="buttons-customers">
                        <Link to={""} className='editar-customers'>Editar</Link>
                        <input type="button" className='eliminar-customers' value={'Eliminar'} onClick={()=>{deleteCustomer(customer.id)}}/>
                    </section>
                </section>
            ))
        }
    </section>
    </>
    );
}
export default customerAdmin;