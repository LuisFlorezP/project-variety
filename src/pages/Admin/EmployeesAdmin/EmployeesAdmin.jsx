import { Link } from "react-router-dom";
import "./EmployeesAdmin.css";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const EmployeesAdmin = () => {

    const [employees, setEmployees] = useState([]);

    const readEmployees = async () => {
        const data = await getDocs(collection(dataBase, "empleado"));
        setEmployees(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    useEffect(() => {
        readEmployees();
    }, []);

    return (
        <section className="container">
            <NavbarAdmin form={"/formemployeesadmin"} />
            <section>
                {
                    employees.map((employee) => (
                        <section key={employee.id}>
                            <h1>{employee.nombre}</h1>
                            <p>{employee.cargo}</p>
                            <p>{employee.correo}</p>
                            <p>{employee.direccion_residencia}</p>
                            <p>{employee.documento}</p>
                            <p>{employee.numero_cuenta_bancaria}</p>
                            <p>{employee.salario}</p>
                            <img src={employee.imagen} alt="" />
                            <Link to={""}>Editar</Link>
                            <input type="button" value={'Eliminar'} />
                            <hr />
                        </section>
                    ))
                }
            </section>
        </section>
    );
};

export default EmployeesAdmin;