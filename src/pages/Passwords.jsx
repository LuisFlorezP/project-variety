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
    <section>
      {passwords.map((password) => (
        <section key={password.id}>
          <img src={password.imagen} />
          <img src={password.imagen_aplicacion} />
          <p>{password.nombre_aplicacion}</p>
          <p>{password.password_usuario}</p>
          <p>{password.usuario}</p>
          <hr />
        </section>
      ))}
    </section>
  );
};

export default Passwords;
