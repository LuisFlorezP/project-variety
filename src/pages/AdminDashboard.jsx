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
          <section>
            <CardAdmin
              title={"Customers"}
              description={"Manage page of customers"}
              link={""}
            />
              <CardAdmin
              title={"Product"}
              description={"Manage page of products"}
              link={""}
            />
          </section>
      ) : (
        <AdminLogin handleLogin={handleLogin} />
      )}
    </>
  );
};

export default AdminDashboard;

