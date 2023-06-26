import { Link } from "react-router-dom";
import "./PasswordsAdmin.css";
import { dataBase } from "../../../components/config/database.jsx";
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";

const PasswordsAdmin = () => {

    const [passwords, setPasswords] = useState([]);

    const readPasswords = async () => {
        const data = await getDocs(collection(dataBase, "password"));
        setPasswords(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    useEffect(() => {
        readPasswords();
    }, []);

    return (
        <section className="container">
            <NavbarAdmin form={"/formpasswordsadmin"}/>
            <section>
                {
                    passwords.map((password) => (
                        <section key={password.id}>
                            <h1>{password.usuario}</h1>
                            <p>{password.nombre_aplicacion}</p>
                            <p>{password.password_usuario}</p>
                            <img src={password.imagen_aplicacion} alt="" />
                            <img src={password.imagen} alt="" />
                            <Link to={""}>Editar</Link>
                            <input type="button" value={'Eliminar'} />
                            <hr />
                        </section>
                    ))
                }
            </section>
        </section>
    );
};

export default PasswordsAdmin;