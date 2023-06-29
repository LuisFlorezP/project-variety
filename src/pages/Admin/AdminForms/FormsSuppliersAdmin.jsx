import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { dataBase, saveFile } from "../../../components/config/database";

const FormsSuppliersAdmin = () => {
  const [nombre, setNombre] = useState('');
  const [nit, setNit] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [nombre_gerente, setNombre_gerente] = useState('');
  const [telefono_gerente, setTelefono_gerente] = useState('');
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setfileTwo] = useState(null);
  const readSuppliers = useNavigate();

  const saveSupplier = async () => {
    const logo_empresa = await saveFile(fileOne);
    const imagen_gerente = await saveFile(fileTwo);
    const supplierCollection = collection(dataBase, "proveedor");
    const supplier = {
      nombre, 
      nit,
      direccion,
      ciudad,
      nombre_gerente,
      telefono_gerente,
      logo_empresa,
      imagen_gerente
    };
    await addDoc(supplierCollection, supplier);
    readSuppliers('/suppliersadmin');
  };
  
  return (
<>
  <NavbarAdminForm comeback={"/suppliersadmin"} />
  <section className="section-container">
    <form className="form-container" action="">
      <label className="form-label">Name:</label>
      <input className="form-input" type="text" id="nombre" placeholder="Enter supplier name..." onChange={e => setNombre(e.target.value)} /><br />
      <label className="form-label">Nit:</label>
      <input className="form-input" type="text" id="nit" placeholder="Enter supplier nit..." onChange={e => setNit(e.target.value)} /><br />
      <label className="form-label">Address:</label>
      <input className="form-input" type="text" id="direccion" placeholder="Enter the supplier address..." onChange={e => setDireccion(e.target.value)} /><br />
      <label className="form-label">City:</label>
      <input className="form-input" type="text" id="ciudad" placeholder="Enter the supplier city..." onChange={e => setCiudad(e.target.value)} /><br />
      <label className="form-label">Manager name:</label>
      <input className="form-input" type="text" id="nombreGerente" placeholder="Enter manager name..." onChange={e => setNombre_gerente(e.target.value)} /><br />
      <label className="form-label">Manager phone:</label>
      <input className="form-input" type="text" id="telefono" placeholder="Enter manager phone..." onChange={e => setTelefono_gerente(e.target.value)} /><br />
      <label className="form-label">Company logo image:</label>
      <input className="form-input" type="file" id="imagenLogo" onChange={e => setFileOne(e.target.files[0])} /><br />
      <label className="form-label">Manager image:</label>
      <input className="form-input" type="file" id="imagenGerente" onChange={e => setfileTwo(e.target.files[0])} /><br />
      <input className="form-submit" type="button" value="Submit" onClick={saveSupplier} />
    </form>
  </section>
</>

  );
};

export default FormsSuppliersAdmin;