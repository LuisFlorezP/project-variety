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
            <p> <span>Name: </span> {employee.nombre}</p>
            <p> <span>Document: </span> {employee.documento}</p>
            <p> <span>Email: </span> {employee.correo}</p>
            <p> <span>Title: </span> {employee.cargo} </p>
            <p> <span>Salary: </span> {employee.salario}</p>
            <p> <span>Address: </span> {employee.direccion_residencia}</p>
            <p> <span>Bank account number: </span> {employee.numero_cuenta_bancaria}</p>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Employees;
