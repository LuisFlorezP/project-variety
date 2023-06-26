import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const LayoutPrivate = () => {
    return (
        <>

        <Outlet/>
        <Footer/>
            
        </>
    );
}

export default LayoutPrivate;
