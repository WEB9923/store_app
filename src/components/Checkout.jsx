import {SiAmazonpay} from "react-icons/si";
import {AiOutlineClear} from "react-icons/ai";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";

export default function Checkout() {
   const {handleClearCart, total} = useContext(CartContext);
   return (
      <>
         <div className="flex-0.5 max-h-[400px] h-auto min-w-[300px] rounded-md bg-gray-300 p-3 sticky right-0 top-2">
            <div className="border-b border-gray-400 py-3">
               <h2 className="text-indigo-500 font-medium text-[20px]">
                  total:
                  <span className="text-indigo-500 font-extrabold px-1">
                     ${parseFloat(total).toFixed(2)}
                  </span>
               </h2>
            </div>
            <div className="py-3 flex flex-col gap-3">
               <button className="bg-green-600 w-full capitalize text-gray-200 font-bold h-10 rounded-md flex items-center justify-center gap-2">
                  <SiAmazonpay size={25}/>
                  checkout
               </button>
               <button
                  onClick={() => handleClearCart()}
                  className="bg-red-500 w-full capitalize text-gray-200 font-bold h-10 rounded-md flex items-center justify-center gap-2"
               >
                  <AiOutlineClear size={25}/>
                  clear cart
               </button>
            </div>
         </div>
      </>
   );
}