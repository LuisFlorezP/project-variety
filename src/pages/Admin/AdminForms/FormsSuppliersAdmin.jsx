import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";

const FormsSuppliersAdmin = () => {
    return (
        <>
          <NavbarAdminForm comeback={"/suppliersadmin"} />
          <section>
            <form action="">
              <label for="nombre">Name:</label>
              <input type="text" id="nombre" size="200px" required placeholder="Enter supplier name..."/><br />
              <label for="nit">Nit:</label>
              <input type="text" id="nit" required placeholder="Enter supplier nit..." /><br />
              <label for="direccion">Address:</label>
              <input type="text" id="direccion" required placeholder="Enter the supplier address..." /><br />
              <label for="ciudad">City:</label>
              <input type="text" id="ciudad" required placeholder="Enter the supplier city..." /><br />
              <label for="nombreGerente">Manager name:</label>
              <input type="text" id="nombreGerente" required placeholder="Enter manager name..." /><br />
              <label for="telefono">Manager phone:</label>
              <input type="text" id="telefono" required placeholder="Enter manager phone..." /><br />
              <label for="imagenLogo">Company logo image:</label>
              <input type="file" id="imagenLogo" required/><br />
              <label for="imagenGerente">Manager image:</label>
              <input type="file" id="imagenGerente" required/><br />
              <input type="submit" value="Submit" />
            </form>
          </section> 
        </>
    );
};

export default FormsSuppliersAdmin;