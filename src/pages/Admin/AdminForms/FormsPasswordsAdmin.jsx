import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";

const FormsPasswordsAdmin = () => {
    return (
        <>
          <NavbarAdminForm comeback={"/passwordsadmin"} />
          <section>
            <form action="">
              <label for="usuario">User:</label>
              <input type="text" id="usuario" size="200px" required placeholder="Enter the user..."/><br />
              <label for="password">Password:</label>
              <input type="text" id="password" required placeholder="Enter user password..." /><br />
              <label for="nombreAplicacion">Name of the application:</label>
              <input type="text" id="nombreAplicacion" required placeholder="Enter the name of the application..." /><br />
              <label for="imagenPassword">Password image:</label>
              <input type="file" id="imagenPassword" required/><br />
              <label for="imagenAplicacion">Application image:</label>
              <input type="file" id="imagenAplicacion" required/><br />
              <input type="submit" value="Submit" />
            </form>      
          </section>
        </>
    );
};

export default FormsPasswordsAdmin;