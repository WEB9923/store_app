import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {links} from "../data/links.js";
import {HiOutlineBuildingStorefront} from "react-icons/hi2";
import {FiShoppingCart} from "react-icons/fi";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";


export default function Navbar() {
   const {itemAmount} = useContext(CartContext);
   return (
      <>
         <nav className="h-20 w-full bg-gray-300 overflow-x-hidden">
            <div className="container items-center flex justify-between">
               <motion.div
                  initial={{
                     x: -30,
                     opacity: 0
                  }}
                  animate={{
                     x: 0,
                     opacity: 1
                  }}
                  transition={{
                     duration: 0.5,
                     type: "tween",
                  }}
               >
                  <Link
                     to={"/"}
                     className="text-indigo-500"
                  >
                     <HiOutlineBuildingStorefront size={55}/>
                  </Link>
               </motion.div>
               <motion.div
                  initial={{
                     x: 30,
                     opacity: 0
                  }}
                  animate={{
                     x: 0,
                     opacity: 1
                  }}
                  transition={{
                     duration: 0.5,
                     type: "tween",
                  }}
                  className="flex items-center gap-10"
               >
                  <ul className="flex items-center gap-5">
                     {links.map((link) => {
                        return (
                           <li key={link.id}>
                              <NavLink
                                 to={link.path}
                                 className="capitalize text-gray-500 py-1.5 relative font-bold text-[18px] navLink"
                              >
                                 {link.title}
                              </NavLink>
                           </li>
                        )
                     })}
                  </ul>
                  <NavLink
                     to={"/cart"}
                     className="text-gray-500 navLink relative py-1.5"
                  >
                     <FiShoppingCart size={22}/>
                     <span className="absolute -top-2.5 -right-3 text-sm rounded-full bg-indigo-500 text-gray-200 w-6 h-6 flex items-center justify-around">
                        {itemAmount}
                     </span>
                  </NavLink>
               </motion.div>
            </div>
         </nav>
      </>
   );
}
