import { useState } from "react";
import AdminLogin from "../components/AdminLogin/AdminLogin";
import AdminOptions from "./AdminOptions";

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
    <section className="containes_admin-dashboard">
      {isAdminLoggedIn ? (
        <section className="containes_admin-options">
          <AdminOptions />
        </section>
      ) : (
        <AdminLogin handleLogin={handleLogin} />
      )}
    </section>
  );
};

export default AdminDashboard;

