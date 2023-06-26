import "./CustomersAdmin.css";  
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import CardsCustomers from "../../../components/CardsOptions/CardsCustomers/CardsCustomers";


const CustomersAdmin = () => {

    return (
        <section>
            <NavbarAdmin form={"/formcustomersadmin"} /> 
                <section>
                    <section>
                        <CardsCustomers/>
                    </section>
                </section>
        </section>

    );
}
export default CustomersAdmin;