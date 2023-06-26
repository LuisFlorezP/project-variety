import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";

const FormsEmployeesAdmin = () => {
    return (
        <>
            <NavbarAdminForm comeback={"/employeesadmin"} />
            <section>
                <form action="">
                    <label for="nombre">Name:</label>
                    <input type="text" id="nombre" size="200px" required placeholder="Enter customer name..."/><br />
                    <label for="documento">Document:</label>
                    <input type="text" id="documento" required placeholder="Enter identity document number..." /><br />
                    <label for="correo">Email:</label>
                    <input type="text" id="correo" required placeholder="Enter email..." /><br />
                    <label for="cargo">Title:</label>
                    <input type="text" id="cargo" required placeholder="Enter employee title..." /><br />
                    <label for="salario">Salary:</label>
                    <input type="number" id="salario" required placeholder="Enter salary..." /><br />
                    <label for="direccion">Address:</label>
                    <input type="text" id="direccion" required placeholder="Enter the address of residence..." /><br />
                    <label for="ciudad">Bank account number:</label>
                    <input type="text" id="ciudad" required placeholder="Enter the bank account number..." /><br />
                    <label for="imagen">Employee image:</label>
                    <input type="file" id="imagen" required/><br />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </>
    );
};

export default FormsEmployeesAdmin;