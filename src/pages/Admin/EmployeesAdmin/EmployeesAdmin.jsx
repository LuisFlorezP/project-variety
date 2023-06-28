import "./EmployeesAdmin.css";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";

const EmployeesAdmin = () => {
  const [employees, setEmployees] = useState([]);

  const readEmployees = async () => {
    const data = await getDocs(collection(dataBase, "empleado"));
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteEmployee = async (id) => {
    const deletedEmployee = doc(dataBase, "empleado", id);
    await deleteDoc(deletedEmployee);
    readEmployees();
  };

  useEffect(() => {
    readEmployees();
  }, []);

  

  return (
    <>
      <NavbarAdmin form={"/formemployeesadmin"} />
      <section className="card-employee">
        {employees.map((employee) => (
          <section key={employee.id}>
            <section className="card-header-employee">
              <h1>{employee.nombre}</h1>
            </section>
            <section className="card-body-employee">
              <section className="card-image-employee">
                <img src={employee.imagen} alt="Imagen" />
              </section>
              <section className="card-info-employee">
                <p>{employee.cargo}</p>
                <p>{employee.correo}</p>
                <p>{employee.direccion}</p>
                <p>{employee.ciudad}</p>
                <p>{employee.documento}</p>
                <p>{employee.numero_cuenta_bancaria}</p>
                <p>{employee.salario}</p>
              </section>
            </section>
            <section className="buttons-employee">
              <Link to={""} className="editar-employee">
                Editar
              </Link>
              <input
                type="button"
                className="eliminar-employee"
                value={"Eliminar"}
                onClick={() => {
                  deleteEmployee(employee.id);
                }}
              />
            </section>
          </section>
        ))}
      </section>
    </>
  );
};
export default EmployeesAdmin;
