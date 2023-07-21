import {Link} from "react-router-dom";
import {HiOutlineBuildingStorefront} from "react-icons/hi2";
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {links} from "../data/links.js";
import {useEffect, useState} from "react";

export default function Footer() {
   const [date,setDate] = useState(null);
   useEffect(() => {
      const dateNow = new Date();
      const year = dateNow.getFullYear().toString();
      let month = dateNow.getMonth();
      let day = dateNow.getDay();
      if(month || day < 10) {
         month = "0" + month;
         day = "0" + day;
      }
      setDate(year + "/" + month + "/" + day);
   },[])
   return (
      <>
         <footer className="py-5 bg-gray-300">
            <div className="container">
               <div className="flex items-center justify-between py-5 border-b border-gray-400">
                  <div>
                     <Link
                        to={"/"}
                        className="text-indigo-500"
                     >
                        <HiOutlineBuildingStorefront size={40}/>
                     </Link>
                  </div>
                  <div className="flex items-center gap-4">
                     <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-500 p-1.5 rounded-md bg-gray-200 transition duration-200 hover:opacity-60"
                     >
                        <FaFacebook size={18}/>
                     </a>
                     <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-indigo-500 p-1.5 rounded-md bg-gray-200 transition duration-200 hover:opacity-60"
                     >
                        <FaInstagram size={18}/>
                     </a>
                  </div>
               </div>
               <div className="flex gap-12 flex-wrap py-5">
                  <div className="flex flex-col gap-0.5">
                     <h3 className="footer-title">navigation</h3>
                     {links.map((link) => {
                        return (
                           <Link
                              key={link.id}
                              to={link.path}
                              className="font-medium text-gray-600 capitalize text-sm"
                           >
                              {link.title}
                           </Link>
                        )
                     })}
                  </div>
                  <div className="flex flex-col gap-0.5">
                     <h3 className="footer-title">about</h3>
                     <p className="font-medium text-gray-600 capitalize text-sm">lorem ipsum</p>
                     <p className="font-medium text-gray-600 capitalize text-sm">lorem</p>
                     <p className="font-medium text-gray-600 capitalize text-sm">ipsum lorem</p>
                     <p className="font-medium text-gray-600 capitalize text-sm">ipsum</p>
                  </div>
               </div>
               <div className="py-1 px-3 text-center bg-gray-200 rounded-md select-none">
                  <p className="text-indigo-400 capitalize font-medium">&#169; all right reserved. {date}</p>
               </div>
            </div>
         </footer>
      </>
   );
}