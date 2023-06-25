import { useState } from "react";
import { RiEyeOffFill, RiEyeLine, RiArrowRightSLine } from "react-icons/ri";
import "./AdminLogin.css";

// eslint-disable-next-line react/prop-types
const AdminLogin = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función handleLogin pasando las credenciales
    if (username === "admin" && password === "123") {
      handleLogin(username, password);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <section className="container__adminlogin">
      <form className="container__login" onSubmit={handleSubmit}>
        <section className="container__login-input">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className="container__login-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeLine
              className="icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <RiEyeOffFill
              className="icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </section>
        <button type="submit">Login <RiArrowRightSLine className="icon"/> </button>
        {loginError && <p>Invalid credentials. Please try again.</p>}
      </form>
    </section>
  );
};

export default AdminLogin;
