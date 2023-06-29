import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { dataBase, saveFile } from "../../../components/config/database";
import "../FormsGeneral.css";


const FormsCustomersAdmin = () => {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [barrio, setBarrio] = useState('');
    const [file, setFile] = useState(null);
    const readCustomers = useNavigate();
    
    const saveCustomer = async () => {
        const imagen = await saveFile(file);
        const customerCollection = collection(dataBase, "cliente");
        const customer = {
            nombre, 
            documento,
            telefono,
            correo,
            direccion,
            ciudad,
            barrio,
            imagen
        };
        await addDoc(customerCollection, customer);
        readCustomers('/customersadmin');
    };

    return (
<>
  <section className="navbar-container">
    <NavbarAdminForm comeback={"/customersadmin"} />
  </section>
  <section className="section-container">
    <form className="form-container" action="">
      <label className="form-label">Name:</label>
      <input className="form-input" type="text" id="nombre" placeholder="Enter customer name..." onChange={e => setNombre(e.target.value)} /><br />
      <label className="form-label">Document:</label>
      <input className="form-input" type="text" id="documento" placeholder="Enter identity document number..." onChange={e => setDocumento(e.target.value)} /><br />
      <label className="form-label">Phone:</label>
      <input className="form-input" type="text" id="telefono" placeholder="Enter phone number..." onChange={e => setTelefono(e.target.value)} /><br />
      <label className="form-label">Email:</label>
      <input className="form-input" type="text" id="correo" placeholder="Enter email..." onChange={e => setCorreo(e.target.value)} /><br />
      <label className="form-label">Address:</label>
      <input className="form-input" type="text" id="correo" placeholder="Enter the address of residence..." onChange={e => setDireccion(e.target.value)} /><br />
      <label className="form-label">City:</label>
      <input className="form-input" type="text" id="ciudad" placeholder="Enter the city of residence..." onChange={e => setCiudad(e.target.value)} /><br />
      <label className="form-label">Neighborhood:</label>
      <input className="form-input" type="text" id="barrio" placeholder="Enter the neighborhood of residence..." onChange={e => setBarrio(e.target.value)} /><br />
      <label className="form-label">Customer image:</label>
      <input className="form-input" type="file" id="imagen" onChange={e => setFile(e.target.files[0])} /><br />
      <input className="form-submit" type="button" value="Submit" onClick={saveCustomer} />
    </form>
  </section>
</>
);

};

export default FormsCustomersAdmin;