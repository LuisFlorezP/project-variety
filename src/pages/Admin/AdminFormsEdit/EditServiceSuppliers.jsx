import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
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
    <section>
        <NavbarAdmin form={"/formsuppliersadmin"}/>
      <form>
        <input
          className="inputNombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre"}
          type={"text"}
        />
        <input
          value={nit}
          onChange={(e) => setNit(e.target.value)}
          placeholder={"Descripcion Products"}
          type={"text"}
        />
        <input
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder={"Post Products "}
          type={"text"}
        />
        <input
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          placeholder={"Mail Products"}
          type={"text"}
        />
        <input
          value={nombre_gerente}
          onChange={(e) => setNombre_gerente(e.target.value)}
          placeholder={"Address Products "}
          type={"text"}
        />
        <input
          value={telefono_gerente}
          onChange={(e) => telefono_gerente(e.target.value)}
          placeholder={"Address Products "}
          type={"text"}
        />
        <input
          onClick={editService}
          type={"button"}
          value={"Editar"}
        />
      </form>
    </section>
  );
};

export default EditServiceSupplier;
