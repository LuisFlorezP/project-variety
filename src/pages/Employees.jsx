import { dataBase } from "../components/config/database";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const readEmployees = async () => {
    const data = await getDocs(collection(dataBase, "empleado"));
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(()=> {
    readEmployees()

  },[])

  return (
    <section>
      {
          employees.map((employee) => (
            <section key={employee.id}>
              <h1>{employee.cargo}</h1>
              <p>{employee.correo}</p>
              <p>{employee.direccion_residencia}</p>
              <p>{employee.documento}</p>
              <p>{employee.nombre}</p>
              <p>{employee.numero_cuenta_bancaria}</p>
              <p>{employee.salario}</p>
              <img src={employee.imagen}/>
              <hr />
            </section>
          ))
        }
      
    </section>
  );
};

export default Employees;
