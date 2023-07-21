import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Layout() {
   return (
      <>
         <Navbar/>
         <Outlet/>
         <Footer/>
      </>
   );
}
