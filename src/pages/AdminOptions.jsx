import CardAdmin from "../components/AdminCard/CardAdmin";

const AdminOptions = () => {
    return (
        <>
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
        </>
    );
};

export default AdminOptions;