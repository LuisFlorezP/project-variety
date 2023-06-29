import { dataBase } from "../components/config/database";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const readEmployees = async () => {
    const data = await getDocs(collection(dataBase, "empleado"));
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    readEmployees();
  }, []);

  return (
    <section className="container__upper">
      {employees.map((employee) => (
        <section key={employee.id} className="container__card-general">
          <section className="container__card-interno">
            <img src={employee.imagen} />
            <p> <span>Cargo: </span> {employee.cargo} </p>
            <p> <span>Correo: </span> {employee.correo}</p>
            <p> <span>Dirección: </span> {employee.direccion_residencia}</p>
            <p> <span>Documento: </span> {employee.documento}</p>
            <p> <span>Nombre: </span> {employee.nombre}</p>
            <p> <span>Cuenta bancaria: </span> {employee.numero_cuenta_bancaria}</p>
            <p> <span>Salario: </span> {employee.salario}</p>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Employees;
