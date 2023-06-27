import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../components/config/database";

const EditServiceCustomers = () => {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [barrio, setBarrio] = useState('');
    const returnListado = useNavigate();
    const { id } = useParams();

  const editService = async () => {
    const customerCollection = doc(dataBase,"cliente", id);
    const customer = {
      nombre,
      documento,
      telefono,
      correo,
      direccion,
      ciudad,
      barrio, 
    };
    await updateDoc(customerCollection, customer);
    returnListado("/customersadmin");
  };
  
  const servicioActualizado = async (id) => {
    const servicioEdit = await getDoc(doc(dataBase,"cliente", id));
    
    setNombre(servicioEdit.data().nombre);
    setDocumento(servicioEdit.data().documento);
    setTelefono(servicioEdit.data().telefono);
    setCorreo(servicioEdit.data().correo);
    setDireccion(servicioEdit.data().direccion);
    setCiudad(servicioEdit.data().ciudad);
    setBarrio(servicioEdit.data().barrio);
  };
  useEffect(() => {
    servicioActualizado(id);
  }, []);

  return (
    <section>
        <NavbarAdmin form={"/formcustomersadmin"}/>
      <form>
        <input
          className="inputNombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre Customers"}
          type={"text"}
        />
        <input
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          placeholder={"Documento Customers"}
          type={"text"}
        />
        <input
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder={"Phone Customers"}
          type={"text"}
        />
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder={"Mail Customers"}
          type={"text"}
        />
        <input
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder={"Address Customers"}
          type={"text"}
        />
        <input
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder={"City Customers"}
          type={"text"}
        />
        <input
          value={barrio}
          onChange={(e) => setBarrio(e.target.value)}
          placeholder={"Neighborhood Customers"}
          type={"text"}
        />

        <input
          onClick={editService}
          type={"button"}
          value={"Edit Customers"}
        />
      </form>
    </section>
  );
};

export default EditServiceCustomers;
