import { Link } from "react-router-dom";

const PasswordsAdmin = () => {
    return (
        <>
            <section>
                <Link to={"/adminoptions"}>Volver</ Link>
                <Link to={"/formpasswordsadmin"}>Crear</ Link>
            </section>
            <section>
                
            </section>
        </>
    );
};

export default PasswordsAdmin;