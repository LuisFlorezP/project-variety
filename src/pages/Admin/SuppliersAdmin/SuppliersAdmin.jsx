import { Link } from "react-router-dom";

const SuppliersAdmin = () => {
    return (
        <>
            <section>
                <Link to={"/adminoptions"}>Volver</ Link>
                <Link to={"/formsuppliersadmin"}>Crear</ Link>
            </section>
            <section>
                
            </section>
        </>
    );
};

export default SuppliersAdmin;