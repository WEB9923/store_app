import {Link} from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi";
import {CartContext} from "../store/CartContext.jsx";
import {useContext} from "react";


// eslint-disable-next-line react/prop-types
export default function Card({data}) {
   // eslint-disable-next-line react/prop-types
   const {handleAddToCart,cart} = useContext(CartContext);

   return (
      <>
         <div className="min-w-[250px] flex-1 h-[350px] rounded-md bg-gray-300 overflow-hidden">
            <div className="h-2/3 w-full">
               <img src={data.image} alt={data.title} className="w-full h-full object-cover object-center"/>
            </div>
            <div className="py-2 px-3">
               <Link
                  to={`/product/${data.id}`}
                  className="text-indigo-500 capitalize font-medium underline-offset-2 underline line-clamp-1"
               >
                  {data.title}
               </Link>
               <div>
                  <h1 className="text-indigo-600 font-extrabold pt-2 pb-1">{data.price}</h1>
               </div>
            </div>
            <div className="flex items-center gap-3 px-3">
               <Link
                  to={`/product/${data.id}`}
                  className="flex-1 bg-indigo-500 rounded-md h-8 px-2 flex items-center justify-center text-gray-200 capitalize font-medium"
               >
                  show details
               </Link>
               <button
                  onClick={() => handleAddToCart(data, data.id)}
                  className="flex-0.8 bg-green-600 text-gray-200 flex justify-center items-center cursor-pointer h-8 px-2 rounded-md"
               >
                  <FiShoppingCart size={22}/>
               </button>
               {/*{isInclude ? (*/}
               {/*   <button*/}
               {/*      onClick={() => handleRemoveFromCart()}*/}
               {/*      className="flex-0.8 bg-red-600 text-gray-200 flex justify-center items-center cursor-pointer h-8 px-2 rounded-md"*/}
               {/*   >*/}
               {/*      <FiTrash2 size={22}/>*/}
               {/*   </button>*/}
               {/*) : (*/}
               {/*   */}
               {/*)}*/}
            </div>
         </div>
      </>
   );
}
