import { useEffect, useState } from "react";
import { dataBase } from "../components/config/database";
import { collection, getDocs } from "@firebase/firestore";

const Passwords = () => {
  const [passwords, setPasswords] = useState([]);

  const readPasswords = async () => {
    const data = await getDocs(collection(dataBase, "password"));
    setPasswords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    readPasswords();
  }, []);

  return (
    <section className="container__upper">
      {passwords.map((password) => (
        <section key={password.id} className="container__card-general">
          <secion className="container__card-interno">
            <img src={password.imagen} />
            <img src={password.imagen_aplicacion} />
            <p>
              <span>Aplicación: </span> {password.nombre_aplicacion}
            </p>
            <p>
              <span>Contraseña: </span> {password.password_usuario}
            </p>
            <p>
              <span>Usuario: </span> {password.usuario}
            </p>
          </secion>
        </section>
      ))}
    </section>
  );
};

export default Passwords;
