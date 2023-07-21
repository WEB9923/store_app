import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import CartPage from "../pages/CartPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";

export const Routes = createBrowserRouter([
   {
      path:"/",
      element:<Layout/>,
      children:[
         {path:"/",element:<HomePage/>},
         {path:"/products",element:<ProductsPage/>},
         {path:"/product/:productId",element:<ProductDetailsPage/>},
         {path:"/cart",element:<CartPage/>}
      ]
   }
]);

