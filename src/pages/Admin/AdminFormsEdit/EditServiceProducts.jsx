import NavbarAdminForm from "../../../components/Navbar/NavbarAdminForm";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { dataBase} from "../../../components/config/database";

const EditServiceProducts = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const returnListado = useNavigate();
    const { id } = useParams();


  const editService = async () => {
    const productCollection = doc(dataBase,"producto", id);
    const product = {
            nombre, 
            descripcion,
            categoria,
            valor,
            cantidad,
    };
    await updateDoc(productCollection, product);
    returnListado("/productsadmin");
  };
  
  const servicioActualizado = async (id) => {
    const servicioEdit = await getDoc(doc(dataBase,"producto", id));
    
    setNombre(servicioEdit.data().nombre);
    setDescripcion(servicioEdit.data().descripcion);
    setCategoria(servicioEdit.data().categoria);
    setValor(servicioEdit.data().valor);
    setCantidad(servicioEdit.data().cantidad);

  };
  useEffect(() => {
    servicioActualizado(id);
  }, []);

  return (
    <section className="section-container">
        <NavbarAdminForm comeback={"/productsadmin"} />
      <form className="form-container">
        <span>Name</span>
        <input
          className="inputNombre form-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder={"Nombre"}
          type={"text"}
        />
        <span>Descripcion Products</span>
        <input
          className="form-input"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder={"Descripcion Products"}
          type={"text"}
        />
        <span>Post Products</span>
        <input
          className="form-input"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder={"Post Products "}
          type={"text"}
        />
        <span>Mail Products</span>
        <input
          className="form-input"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder={"Mail Products"}
          type={"text"}
        />
        <span>Address Products</span>
        <input
          className="form-input"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          placeholder={"Address Products "}
          type={"text"}
        />
        <input
          className="form-submit"
          onClick={editService}
          type={"button"}
          value={"Edit "}
        />
      </form>
    </section>
  );
};

export default EditServiceProducts;
