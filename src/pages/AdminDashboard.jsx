import { useState } from "react";
import AdminLogin from "../components/AdminLogin/AdminLogin";

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
        <h1>Admin Dashboard</h1>
      ) : (
        <AdminLogin handleLogin={handleLogin} />
      )}
    </>
  );
};

export default AdminDashboard;

