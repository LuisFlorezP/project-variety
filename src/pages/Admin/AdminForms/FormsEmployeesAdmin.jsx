import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
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
    const [numero_cuenta_bancaria, setNumero_cuenta_bancaria] = useState('');
    const [file, setFile] = useState(null);
    const readEmployees = useNavigate();

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
            numero_cuenta_bancaria,
            imagen
        };
        await addDoc(employeeCollection, employee);
        readEmployees('/employeesadmin');
    };

    return (
<>
    <NavbarAdminForm comeback={"/employeesadmin"} />
    <section className="section-container">
        <form className="form-container" action="">
            <label className="form-label">Name:</label>
            <input className="form-input" type={"text"} id={"nombre"} placeholder={"Enter employee name..."} onChange={e => setNombre(e.target.value)} /><br />
            <label className="form-label">Document:</label>
            <input className="form-input" type={"text"} id={"documento"} placeholder={"Enter identity document number..."} onChange={e => setDocumento(e.target.value)} /><br />
            <label className="form-label">Email:</label>
            <input className="form-input" type={"text"} id={"correo"} placeholder={"Enter email..."} onChange={e => setCorreo(e.target.value)} /><br />
            <label className="form-label">Title:</label>
            <input className="form-input" type={"text"} id={"cargo"} placeholder={"Enter employee title..."} onChange={e => setCargo(e.target.value)} /><br />
            <label className="form-label">Salary:</label>
            <input className="form-input" type="number" id={"salario"} placeholder={"Enter salary..."} onChange={e => setSalario(e.target.value)} /><br />
            <label className="form-label">Address:</label>
            <input className="form-input" type={"text"} id={"direccion"} placeholder={"Enter the address of residence..."} onChange={e => setDireccion(e.target.value)} /><br />
            <label className="form-label">Bank account number:</label>
            <input className="form-input" type={"text"} id={"numeroCuentaBancaria"} placeholder={"Enter the bank account number..."} onChange={e => setNumero_cuenta_bancaria(e.target.value)} /><br />
            <label className="form-label">Employee image:</label>
            <input className="form-input" type={"file"} id={"imagen"} onChange={e => setFile(e.target.files[0])} /><br />
            <input className="form-submit" type={"button"} value={"Submit"} onClick={saveEmployee} />
        </form>
    </section>
</>

    );
};

export default FormsEmployeesAdmin;