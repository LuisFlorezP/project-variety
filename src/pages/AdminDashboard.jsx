import { useState } from "react";
import AdminLogin from "../components/AdminLogin/AdminLogin";
import CardAdmin from "../components/AdminCard/CardAdmin";

const AdminDashboard = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogin = (username, password) => {

    // Verificación de credenciales para mostrar elementos 
    if (username === "admin" && password === "123") { 
      setIsAdminLoggedIn(true);
    } else {
      setIsAdminLoggedIn(false);
    }
  };

  return (
    <>
      {isAdminLoggedIn ? (
            <div>
            <CardAdmin
              title={"Customers"}
              description={"Administrar pagina de los customers"}
              link={""}
            />
              <CardAdmin
              title={"product"}
              description={"Administrar pagina de los products"}
              link={""}
            />
          </div>
      ) : (
        <AdminLogin handleLogin={handleLogin} />
      )}
    </>
  );
};

export default AdminDashboard;

