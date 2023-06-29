import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../components/config/database";

const EditServiceEmployees = () => {
    const [nombreEmployees, setNombreEmployees] = useState('');
    const [documentoEmployees, setDocumentoEmployees] = useState('');
    const [cargoEmployees, setCargoEmployees] = useState('');
    const [correoEmployees, setCorreoEmployees] = useState('');
    const [direccion_residenciaEmployees, setDireccion_residenciaEmployees] = useState('');
    const [numero_cuenta_bancariaEmployees, setNumero_cuenta_bancariaEmployees] = useState('');
    const [salarioEmployees, setSalarioEmployees] = useState('');
    const returnListado = useNavigate();
    const { id } = useParams();

  const editServiceEmployees = async () => {
    const employeesCollection = doc(dataBase,"empleado", id);
    const employee = {
      nombreEmployees,
      documentoEmployees,  
      cargoEmployees,
      correoEmployees,
      direccion_residenciaEmployees,
      numero_cuenta_bancariaEmployees,
      salarioEmployees 
    };
    await updateDoc(employeesCollection, employee);
    returnListado("/employeeadmin");
  };
  
  const servicioActualizadoEmployees = async (id) => {
    const servicioEditEmployees = await getDoc(doc(dataBase,"empleado", id));
    
    setNombreEmployees(servicioEditEmployees.data().nombreEmployees);
    setDocumentoEmployees(servicioEditEmployees.data().documentoEmployees);
    setCargoEmployees(servicioEditEmployees.data().cargoEmployees);
    setCorreoEmployees(servicioEditEmployees.data().correoEmployees);
    setDireccion_residenciaEmployees(servicioEditEmployees.data().direccion_residenciaEmployees);
    setNumero_cuenta_bancariaEmployees(servicioEditEmployees.data().numero_cuenta_bancariaEmployees);
    setSalarioEmployees(servicioEditEmployees.data().salarioEmployees);
  };
  useEffect(() => {
    servicioActualizadoEmployees(id);
  }, []);

  return (
    <section>
        <NavbarAdmin form={"/formemployeesadmin"}/>
      <form>
        <input
          className="inputNombre"
          value={nombreEmployees}
          onChange={(e) => setNombreEmployees(e.target.value)}
          placeholder={"Nombre Employees"}
          type={"text"}
        />
        <input
          value={documentoEmployees}
          onChange={(e) => setDocumentoEmployees(e.target.value)}
          placeholder={"Documento Employees"}
          type={"text"}
        />
        <input
          value={cargoEmployees}
          onChange={(e) => setCargoEmployees(e.target.value)}
          placeholder={"Post Employees"}
          type={"text"}
        />
        <input
          value={correoEmployees}
          onChange={(e) => setCorreoEmployees(e.target.value)}
          placeholder={"Mail Employees"}
          type={"text"}
        />
        <input
          value={direccion_residenciaEmployees}
          onChange={(e) => setDireccion_residenciaEmployees(e.target.value)}
          placeholder={"Address Employees"}
          type={"text"}
        />
        <input
          value={numero_cuenta_bancariaEmployees}
          onChange={(e) => setNumero_cuenta_bancariaEmployees(e.target.value)}
          placeholder={"City Employees"}
          type={"text"}
        />
        <input
          value={salarioEmployees }
          onChange={(e) => setSalarioEmployees(e.target.value)}
          placeholder={"Neighborhood Employees"}
          type={"text"}
        />

        <input
          onClick={editServiceEmployees}
          type={"button"}
          value={"Edit Employees"}
        />
      </form>
    </section>
  );
};

export default EditServiceEmployees;
