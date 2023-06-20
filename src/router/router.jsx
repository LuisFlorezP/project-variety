import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Customers from "../pages/Customers"
import Products from "../pages/Products"
import Suppliers from "../pages/Suppliers"
import Employees from "../pages/Employees"
import Passwords from "../pages/Passwords"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>

    },
    {
        path: "/customers",
        element: <Customers/>

    },
    {
        path: "/products",
        element: <Products/>

    },
    {
        path: "/suppliers",
        element: <Suppliers/>

    },
    {
        path: "/employees",
        element: <Employees/>

    },
    {
        path: "/passwords",
        element: <Passwords/>

    }
])