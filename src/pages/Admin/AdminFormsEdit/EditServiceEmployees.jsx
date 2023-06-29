import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../components/config/database";

const EditServiceEmployees = () => {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [cargo, setCargo] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion_residencia, setDireccion_residencia] = useState('');
    const [numero_cuenta_bancaria, setNumero_cuenta_bancaria] = useState('');
    const [salario, setSalario] = useState('');
    const returnListado = useNavigate();
    const { id } = useParams();

  const editService = async () => {
    const employeesCollection = doc(dataBase,"empleado", id);
    const employee = {
      nombre,
      documento,  
      cargo,
      correo,
      direccion_residencia,
      numero_cuenta_bancaria,
      salario, 
    };
    await updateDoc(employeesCollection, employee);
    returnListado("/employeesadmin");
  };
  
  const servicioActualizado = async (id) => {
    const servicioEdit = await getDoc(doc(dataBase,"empleado", id));
    
    setNombre(servicioEdit.data().nombre);
    setDocumento(servicioEdit.data().documento);
    setCargo(servicioEdit.data().cargo);
    setCorreo(servicioEdit.data().correo);
    setDireccion_residencia(servicioEdit.data().direccion);
    setNumero_cuenta_bancaria(servicioEdit.data().numero_cuenta_bancaria);
    setSalario(servicioEdit.data().salario);
  };
  useEffect(() => {
    servicioActualizado(id);
  }, []);

  return (
    <section>
        <NavbarAdminForm comeback={"/employeesadmin"} />
      <form>
        <input
          className="inputNombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre Employees"}
          type={"text"}
        />
        <input
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          placeholder={"Documento Employees"}
          type={"text"}
        />
        <input
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder={"Post Employees"}
          type={"text"}
        />
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder={"Mail Employees"}
          type={"text"}
        />
        <input
          value={direccion_residencia}
          onChange={(e) => setDireccion_residencia(e.target.value)}
          placeholder={"Address Employees"}
          type={"text"}
        />
        <input
          value={numero_cuenta_bancaria}
          onChange={(e) => setNumero_cuenta_bancaria(e.target.value)}
          placeholder={" Employees"}
          type={"text"}
        />
        <input
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
          placeholder={"Neighborhood Employees"}
          type={"text"}
        />

        <input
          onClick={editService}
          type={"button"}
          value={"Edit Employees"}
        />
      </form>
    </section>
  );
};

export default EditServiceEmployees;
