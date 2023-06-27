<<<<<<< HEAD
import { Link } from "react-router-dom";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs, doc,deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
=======
import "./CustomersAdmin.css";  
>>>>>>> 284786ee2676c97053886823fedcbdc5a54643d2
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import CardsCustomers from "../../../components/CardsOptions/CardsCustomers/CardsCustomers";


const CustomersAdmin = () => {

<<<<<<< HEAD
    const [customers, setCustomers] = useState([]);

    const readCustomers = async () => {
        const data = await getDocs(collection(dataBase, "cliente"));
        setCustomers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    const deleteCustomer = async (id) =>  {
        const deletedCustomer = doc(dataBase,"cliente",id)
        await deleteDoc(deletedCustomer);
        readCustomers();
    }






    /* const eliminarServicio = async(id) => {
    const servicioEliminado = doc(dataBase,"servicios",id) //Me recibe la base de datos, el nombre y el id. (Por parametro)
    await deleteDoc(servicioEliminado)
    mostrarServicios()

  }
 */

    useEffect(() => {
        readCustomers();
    }, []);

    return (
        <section className="contenedor">
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
                            <input type="button" value={'Eliminar'} onClick={()=> {deleteCustomer(customer.id)}} />
                            <hr />
                        </section>
                    ))
                }
            </section>
=======
    return (
        <section>
            <NavbarAdmin form={"/formcustomersadmin"} /> 
                <section>
                    <section>
                        <CardsCustomers/>
                    </section>
                </section>
>>>>>>> 284786ee2676c97053886823fedcbdc5a54643d2
        </section>

    );
}
export default CustomersAdmin;