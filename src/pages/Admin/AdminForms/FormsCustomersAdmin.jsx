import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";

const FormsCustomersAdmin = () => {
    return (
        <>
            <NavbarAdminForm comeback={"/customersadmin"} />
            <section>
                <form action="">
                    <label for="nombre">Name:</label>
                    <input type="text" id="nombre" size="200px" required placeholder="Enter customer name..."/><br />
                    <label for="documento">Document:</label>
                    <input type="text" id="documento" required placeholder="Enter identity document number..." /><br />
                    <label for="telefono">Phone:</label>
                    <input type="text" id="telefono" required placeholder="Enter phone number..." /><br />
                    <label for="correo">Email:</label>
                    <input type="text" id="correo" required placeholder="Enter email..." /><br />
                    <label for="direccion">Address:</label>
                    <input type="text" id="direccion" required placeholder="Enter the address of residence..." /><br />
                    <label for="ciudad">City:</label>
                    <input type="text" id="ciudad" required placeholder="Enter the city of residence..." /><br />
                    <label for="barrio">Neighborhood:</label>
                    <input type="text" id="barrio" required placeholder="Enter the neighborhood of residence..." /><br />
                    <label for="imagen">Customer image:</label>
                    <input type="file" id="imagen" required/><br />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </>
    );
};

export default FormsCustomersAdmin;