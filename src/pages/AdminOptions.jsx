import CardAdmin from "../components/AdminCard/CardAdmin";

const AdminOptions = () => {
    return (
        <section className="containes_admin-dashboard">
          <section className="containes_admin-options">
            <CardAdmin
              title={"Customers"}
              description={"Manage page of customers"}
              link={"/customersadmin"}
            />
              <CardAdmin
              title={"Product"}
              description={"Manage page of products"}
              link={"/productsadmin"}
            />
            <CardAdmin
              title={"Employee"}
              description={"Manage page of employees"}
              link={"/employeesadmin"}
            />
            <CardAdmin
              title={"Password"}
              description={"Manage page of passwords"}
              link={"/passwordsadmin"}
            />
            <CardAdmin
              title={"Supplier"}
              description={"Manage page of suppliers"}
              link={"/suppliersadmin"}
            />
          </section>
        </section>
    );
};

export default AdminOptions;