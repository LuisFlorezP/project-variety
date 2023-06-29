import { dataBase } from "../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const readCustomers = async () => {
    const data = await getDocs(collection(dataBase, "cliente"));
    setCustomers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    readCustomers();
  }, []);

  return (
    <section className="container__upper">
      {customers.map((customer) => (
        <section key={customer.id} className="container__card-general">
          <section className="container__card-interno">
            <img src={customer.imagen} className="card__img" />
            <p> <span>Nombre:</span> {customer.nombre}</p>
            <p> <span>Barrio:</span> {customer.barrio}</p>
            <p> <span>Ciudad:</span> {customer.ciudad}</p>
            <p> <span>Correo:</span> {customer.correo}</p>
            <p> <span>Dirección:</span> {customer.direccion}</p>
            <p> <span>Documento:</span>{customer.documento}</p>
            <p> <span>Teléfono:</span>{customer.telefono}</p>
            <p> <span>Valor:</span> Valor: {customer.valor}</p>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Customers;
