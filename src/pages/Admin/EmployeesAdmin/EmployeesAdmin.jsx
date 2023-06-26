import { Link } from "react-router-dom";

const EmployeesAdmin = () => {
    return (
        <>
            <section>
                <Link to={"/adminoptions"}>Volver</ Link>
                <Link to={"/formemployeesadmin"}>Crear</ Link>
            </section>
            <section>
                
            </section>
        </>
    );
};

export default EmployeesAdmin;