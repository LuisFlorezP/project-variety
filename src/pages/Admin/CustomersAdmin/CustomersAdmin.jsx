import { Link } from "react-router-dom";

const CustomersAdmin = () => {
    return (
        <>
            <section>
                <Link to={"/adminoptions"}>Volver</ Link>
                <Link to={"/formcustomersadmin"}>Crear</ Link>
            </section>
            <section>
                
            </section>
        </>
    );
};

export default CustomersAdmin;