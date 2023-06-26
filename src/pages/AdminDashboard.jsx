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
    <>
      {isAdminLoggedIn ? (
          <AdminOptions />
      ) : (
        <AdminLogin handleLogin={handleLogin} />
      )}
    </>
  );
};

export default AdminDashboard;

