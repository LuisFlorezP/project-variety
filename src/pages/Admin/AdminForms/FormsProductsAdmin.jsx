import NavbarAdminForm from "../../../components/NavbarAdminForm/NavbarAdminForm";

const FormsProductsAdmin = () => {
    return (
        <>
            <NavbarAdminForm comeback={"/productsadmin"} />
            <section>
                <form action="">
                    <label for="nombre">Name:</label>
                    <input type="text" id="nombre" size="200px" required placeholder="Enter product name..."/><br />
                    <label for="descripcion">Description:</label>
                    <input type="text" id="descripcion" required placeholder="Enter product description..." /><br />
                    <label for="categoria">Category:</label>
                    <input type="text" id="categoria" required placeholder="Enter category..." /><br />
                    <label for="valor">Price:</label>
                    <input type="number" id="valor" required placeholder="Enter product price..." /><br />
                    <label for="cantidad">Amount:</label>
                    <input type="number" id="cantidad" required placeholder="Enter amount..." /><br />
                    <label for="imagen">Product image:</label>
                    <input type="file" id="imagen" required/><br />
                    <input type="submit" value="Submit" />
                </form>
            </section>
        </>
    );
};

export default FormsProductsAdmin;