import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Customers from "../pages/Customers";
import Products from "../pages/Products";
import Suppliers from "../pages/Suppliers";
import Employees from "../pages/Employees";
import Passwords from "../pages/Passwords";
import Movies from "../pages/Movies";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/AdminDashboard";
import CustomersAdmin from "../pages/Admin/CustomersAdmin/CustomersAdmin";
import EmployeesAdmin from "../pages/Admin/EmployeesAdmin/EmployeesAdmin";
import PasswordsAdmin from "../pages/Admin/PasswordsAdmin/PasswordsAdmin";
import ProductsAdmin from "../pages/Admin/ProductsAdmin/ProductsAdmin";
import SuppliersAdmin from "../pages/Admin/SuppliersAdmin/SuppliersAdmin";
import FormsCustomersAdmin from "../pages/Admin/AdminForms/FormsCustomersAdmin";
import FormsEmployeesAdmin from "../pages/Admin/AdminForms/FormsEmployeesAdmin";
import FormsPasswordsAdmin from "../pages/Admin/AdminForms/FormsPasswordsAdmin";
import FormsProductsAdmin from "../pages/Admin/AdminForms/FormsProductsAdmin";
import FormsSuppliersAdmin from "../pages/Admin/AdminForms/FormsSuppliersAdmin";
import AdminOptions from "../pages/AdminOptions";
import LayoutPrivate from "../layout/LayoutPrivate";
import EditServiceCustomers from "../pages/Admin/AdminFormsEdit/EditServiceCustomers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/suppliers",
        element: <Suppliers />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/passwords",
        element: <Passwords />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/adminoptions",
        element: <AdminOptions/>
      }
    ],
  },
  {
    path: "/",
    element: <LayoutPrivate/>,
    children: [
      {
        path: "/customersadmin",
        element: <CustomersAdmin/>
      },
      {
        path: "/employeesadmin",
        element: <EmployeesAdmin/>
      },
      {
        path: "/passwordsadmin",
        element: <PasswordsAdmin/>
      },
      {
        path: "/suppliersadmin",
        element: <SuppliersAdmin/>
      },
      {
        path: "/productsadmin",
        element: <ProductsAdmin/>
      },
      {
        path: "/formcustomersadmin",
        element: <FormsCustomersAdmin/>
      }
      ,
      {
        path: "/formemployeesadmin",
        element: <FormsEmployeesAdmin/>  
      }
      ,
      {
        path: "/formpasswordsadmin",
        element: <FormsPasswordsAdmin/>
      }
      ,
      {
        path: "/formproductsadmin",
        element: <FormsProductsAdmin/>
        
      },
      {
        path: "/formsuppliersadmin",
        element: <FormsSuppliersAdmin/>
        
      },
      {
        path: "/EditServiceCustomer/:id",
        element: <EditServiceCustomers/>
        
      },
    ]
  }
  
  
]);
