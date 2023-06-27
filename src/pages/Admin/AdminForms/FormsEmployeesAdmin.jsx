import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { dataBase, saveFile } from "../../../components/config/database";


const FormsEmployeesAdmin = () => {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [correo, setCorreo] = useState('');
    const [cargo, setCargo] = useState('');
    const [salario, setSalario] = useState(0);
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [file, setFile] = useState(null);
    const readCustomers = useNavigate();

    const saveEmployee = async () => {
        const imagen = await saveFile(file);
        const employeeCollection = collection(dataBase, "empleado");
        const employee = {
            nombre, 
            documento,
            correo,
            cargo,
            salario,
            direccion,
            ciudad,
            imagen
        };
        await addDoc(employeeCollection, employee);
        readCustomers('/employeesadmin');
    };

    return (
        <>
            <NavbarAdminForm comeback={"/employeesadmin"} />
            <section>
                <form action="">
                    <label>Name:</label>
                    <input type={"text"} id={"nombre"} placeholder={"Enter employee name..."} onChange={e => setNombre(e.target.value)} /><br />
                    <label>Document:</label>
                    <input type={"text"} id={"documento"} placeholder={"Enter identity document number..."} setDocumento={e => setCargo(e.target.value)} /><br />
                    <label>Email:</label>
                    <input type={"text"} id={"correo"} placeholder={"Enter email..."} onChange={e => setCorreo(e.target.value)} /><br />
                    <label>Title:</label>
                    <input type={"text"} id={"cargo"} placeholder={"Enter employee title..."} onChange={e => setCargo(e.target.value)} /><br />
                    <label>Salary:</label>
                    <input type="number" id={"salario"} placeholder={"Enter salary..."} onChange={e => setSalario(e.target.value)} /><br />
                    <label>Address:</label>
                    <input type={"text"} id={"direccion"} placeholder={"Enter the address of residence..."} onChange={e => setDireccion(e.target.value)} /><br />
                    <label>Bank account number:</label>
                    <input type={"text"} id={"ciudad"} placeholder={"Enter the bank account number..."} onChange={e => setCiudad(e.target.value)} /><br />
                    <label>Employee image:</label>
                    <input type={"file"} id={"imagen"} onChange={e => setFile(e.target.files[0])} /><br />
                    <input type={"button"} value={"Submit"} onClick={saveEmployee} />
                </form>
            </section>
        </>
    );
};

export default FormsEmployeesAdmin;