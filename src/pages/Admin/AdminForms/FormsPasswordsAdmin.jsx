import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { dataBase, saveFile } from "../../../components/config/database";

const FormsPasswordsAdmin = () => {
  const [usuario, setUsuario] = useState('');
  const [password_usuario, setPassword_usuario] = useState('');
  const [nombre_aplicacion, setNombre_aplicacion] = useState('');
  const [fileOne, setFileOne] = useState(null);
  const [fileTwo, setFileTwo] = useState(null);
  const readPasswords = useNavigate();

  const savePassword = async () => {
    const imagen = await saveFile(fileOne);
    const imagen_aplicacion = await saveFile(fileTwo);
    const passwordCollection = collection(dataBase, "password");
    const passwordData = {
      usuario, 
      password_usuario,
      nombre_aplicacion,
      imagen,
      imagen_aplicacion
    };
    await addDoc(passwordCollection, passwordData);
    readPasswords('/passwordsadmin');
  };
  
  return (
<>
  <NavbarAdminForm comeback={"/passwordsadmin"} />
  <section className="section-container">
    <form className="form-container" action="">
      <label className="form-label">User:</label>
      <input className="form-input" type="text" id="usuario" placeholder="Enter the user..." onChange={e => setUsuario(e.target.value)} /><br />
      <label className="form-label">Password:</label>
      <input className="form-input" type="text" id="password" placeholder="Enter user password..." onChange={e => setPassword_usuario(e.target.value)} /><br />
      <label className="form-label">Name of the application:</label>
      <input className="form-input" type="text" id="nombreAplicacion" placeholder="Enter the name of the application..." onChange={e => setNombre_aplicacion(e.target.value)} /><br />
      <label className="form-label">Password image:</label>
      <input className="form-input" type="file" id="imagenPassword" onChange={e => setFileOne(e.target.files[0])} /><br />
      <label className="form-label">Application image:</label>
      <input className="form-input" type="file" id="imagenAplicacion" onChange={e => setFileTwo(e.target.files[0])} /><br />
      <input className="form-submit" type="button" value="Submit" onClick={savePassword} />
    </form>
  </section>
</>

);  
};

export default FormsPasswordsAdmin;