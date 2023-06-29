import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../components/config/database";

const EditServicePassword = () => {
  const [usuario, setUsuario] = useState('');
  const [password_usuario, setPassword_usuario] = useState('');
  const [nombre_aplicacion, setNombre_aplicacion] = useState('');
    const returnListado = useNavigate();
    const { id } = useParams();

  const editServiceEmployees = async () => {
    const passwordCollection = doc(dataBase,"password", id);
    const password = {
      usuario,
      password_usuario,
      nombre_aplicacion,
 
    };
    await updateDoc(passwordCollection, password);
    returnListado("/passwordsadmin");
  };
  
  const servicioActualizadoPassword = async (id) => {
    const servicioEditEmployees = await getDoc(doc(dataBase,"password", id));
    
    setUsuario(servicioEditEmployees.data().usuario);
    setPassword_usuario(servicioEditEmployees.data().password_usuario);
    setNombre_aplicacion(servicioEditEmployees.data().nombre_aplicacion,
    );
  };
  useEffect(() => {
    servicioActualizadoPassword(id);
  }, []);

  return (
    <section className="section-container">
        <NavbarAdminForm comeback={"/passwordsadmin"} />
      <form className="form-container">
        <span>Name password</span>
        <input
          className="inputNombre form-input"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder={"Nombre password"}
          type={"text"}
        />
        <span>Document Password</span>
        <input
          className="form-input"
          value={password_usuario}
          onChange={(e) => setPassword_usuario(e.target.value)}
          placeholder={"Documento password"}
          type={"text"}
        />
        <span>Post Password</span>
        <input
          className="form-input"
          value={nombre_aplicacion}
          onChange={(e) => setNombre_aplicacion(e.target.value)}
          placeholder={"Post password"}
          type={"text"}
        />
        <input
          className="form-submit"
          onClick={editServiceEmployees}
          type={"button"}
          value={"Edit password"}
        />
      </form>
    </section>
  );
};

export default EditServicePassword;
