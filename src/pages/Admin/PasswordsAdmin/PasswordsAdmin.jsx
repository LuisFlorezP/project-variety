
import { Link } from "react-router-dom";
import "./PasswordsAdmin.css";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const PasswordsAdmin = () => {
  const [passwords, setPasswords] = useState([]);

  const readPasswords = async () => {
    const data = await getDocs(collection(dataBase, "password"));
    setPasswords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deletePassword = async (id) => {
    const deletedPassword = doc(dataBase, "password", id);
    await deleteDoc(deletedPassword);
    readPasswords();
  };

  useEffect(() => {
    readPasswords();
  }, []);

  return (
    <>
      <NavbarAdmin form={"/formpasswordsadmin"} />
      <section className="card-passwords">
        {passwords.map((password) => (
          <section key={password.id}>
            <section className="card-header-passwords">
              <h1>{password.usuario}</h1>
            </section>
            <section className="card-body-passwords">
              <section className="card-image-passwords">
                <img src={password.imagen_aplicacion} alt="" />
                <img src={password.imagen} alt="" />
              </section>
              <section className="card-info-passwords">
                <p>{password.password_usuario}</p>
                <p>{password.nombre_aplicacion}</p>
              </section>
            </section>
            <section className="buttons-passwords">
              <Link to={""} className="editar-passwords">
                Editar
              </Link>
              <input
                type="button"
                className="eliminar-passwords"
                value={"Eliminar"}
                onClick={() => {
                  deletePassword(password.id);
                }}
              />
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default PasswordsAdmin;
