import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../components/config/database";

const EditServiceSupplier = () => {
    const [nombre, setNombre] = useState('');
    const [nit, setNit] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [nombre_gerente, setNombre_gerente] = useState('');
    const [telefono_gerente, setTelefono_gerente] = useState('');
    const returnListado = useNavigate();
    const { id } = useParams();


  const editService = async () => {
    const suppliersCollection = doc(dataBase,"proveedor", id);
    const supplier = {
        nombre, 
        nit,
        direccion,
        ciudad,
        nombre_gerente,
        telefono_gerente,
    };
    await updateDoc(suppliersCollection, supplier);
    returnListado("/suppliersadmin");
  };
  
  const servicioActualizado = async (id) => {
    const servicioEdit = await getDoc(doc(dataBase,"proveedor", id));
    
    setNombre(servicioEdit.data().nombre);
    setNit(servicioEdit.data().nit);
    setDireccion(servicioEdit.data().direccion);
    setCiudad(servicioEdit.data().ciudad);
    setNombre_gerente(servicioEdit.data().nombre_gerente);
    setTelefono_gerente(servicioEdit.data().telefono_gerente);
  };
  useEffect(() => {
    servicioActualizado(id);
  }, []);

  return (
    <section className="section-container">
        <NavbarAdminForm comeback={"/suppliersadmin"} />
      <form className="form-container">
        <span>Name mananger</span>
        <input
          className="inputNombre form-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre"}
          type={"text"}
        />
        <span>Descrpcion suppliers</span>
        <input
          className="form-input"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          placeholder={"Descripcion Products"}
          type={"text"}
        />
        <span>Address Suppliers</span>
        <input
          className="form-input"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder={"Address Suppliers"}
          type={"text"}
        />
        <span>City Suppliers"</span>
        <input
          className="form-input"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder={"City Suppliers"}
          type={"text"}
        />
        <span>Name manager</span>
        <input
          className="form-input"
          value={nombre_gerente}
          onChange={(e) => setNombre_gerente(e.target.value)}
          placeholder={""}
          type={"text"}
        />
        <span>phone mananger</span>
        <input
          className="form-input"
          value={telefono_gerente}
          onChange={(e) => telefono_gerente(e.target.value)}
          placeholder={"Address Products "}
          type={"text"}
        />
        <input
          className="form-submit"
          onClick={editService}
          type={"button"}
          value={"Editar"}
        />
      </form>
    </section>
  );
};

export default EditServiceSupplier;
