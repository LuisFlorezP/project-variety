import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { dataBase, saveFile } from "../../../components/config/database";

const FormsProductsAdmin = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [file, setFile] = useState(null);
    const readProducts = useNavigate();

    const saveProduct = async () => {
        const imagen = await saveFile(file);
        const productCollection = collection(dataBase, "producto");
        const product = {
            nombre, 
            descripcion,
            categoria,
            valor,
            cantidad,
            imagen
        };
        await addDoc(productCollection, product);
        readProducts('/productsadmin');
    };

    return (
        <>
            <NavbarAdminForm comeback={"/productsadmin"} />
            <section>
                <form action="">
                    <label>Name:</label>
                    <input type={"text"} id={"nombre"} placeholder={"Enter product name..."} onChange={e => setNombre(e.target.value)} /><br />
                    <label>Description:</label>
                    <input type={"text"} id={"descripcion"} placeholder={"Enter product description..."} onChange={e => setDescripcion(e.target.value)} /><br />
                    <label>Category:</label>
                    <input type={"text"} id={"categoria"} placeholder={"Enter category..."} onChange={e => setCategoria(e.target.value)} /><br />
                    <label>Price:</label>
                    <input type={"number"} id={"valor"} placeholder={"Enter product price..."} onChange={e => setValor(e.target.value)} /><br />
                    <label>Amount:</label>
                    <input type={"number"} id={"cantidad"} placeholder={"Enter amount..."} onChange={e => setCantidad(e.target.value)} /><br />
                    <label>Product image:</label>
                    <input type={"file"} id={"imagen"} onChange={e => setFile(e.target.files[0])} /><br />
                    <input type={"button"} value={"Submit"} onClick={saveProduct} />
                </form>
            </section> 
        </>
    );
};

export default FormsProductsAdmin;