// eslint-disable-next-line react/prop-types
import {Link} from "react-router-dom";
import {FiTrash2} from "react-icons/fi";
import {BiMinus, BiPlus} from "react-icons/bi";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";

// eslint-disable-next-line react/prop-types
export default function CartItem({data}) {
   // eslint-disable-next-line react/prop-types
   const {id, title, price, pcs, image} = data;
   const {handleRemoveFromCart, handleIncreaseAmount, handleDecreaseAmount} = useContext(CartContext);
   return (
      <>
         <div className="bg-gray-300 max-h-[150px] py-3 px-2 rounded-md w-full flex-1 items-center my-2">
            <div className="flex w-full h-full items-center">
               <div className="flex gap-x-4 w-full">
                  <img src={image} alt={title} className="max-w-[80px] max-h-[80px] w-full h-full rounded-md object-center object-cover"/>
                  <div className="w-full flex flex-col justify-between">
                     <div className="flex justify-between w-full">
                        <div>
                           <Link
                              to={`/product/${id}`}
                              className="text-indigo-500 underline underline-offset-2 font-bold text-[18px] line-clamp-1"
                           >
                              {title}
                           </Link>
                        </div>
                        <div>
                        <span
                           onClick={() => handleRemoveFromCart(id)}
                           className="text-red-500 w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center cursor-pointer"
                        >
                           <FiTrash2 size={22}/>
                        </span>
                        </div>
                     </div>
                     <div className="flex gap-x-5 text-sm h-[35px] items-center">
                        <div className="flex flex-1 max-w-[100px] items-center font-medium h-full border border-gray-400 rounded-md">
                           <span
                              onClick={() => handleDecreaseAmount(id)}
                              className="flex-1 h-full select-none flex justify-center items-center transition duration-200 hover:bg-indigo-400 cursor-pointer text-gray-500"
                           >
                              <BiMinus size={20}/>
                           </span>
                           <div className="flex h-full justify-center items-center px-2 text-gray-500 select-none">{pcs}</div>
                           <span
                              onClick={() => handleIncreaseAmount(id)}
                              className="flex-1 h-full flex justify-center select-none items-center transition duration-200 hover:bg-indigo-400 cursor-pointer text-gray-500"
                           >
                              <BiPlus size={20}/>
                           </span>
                        </div>
                        <div className="text-gray-500 font-bold">
                           price: <span className="text-indigo-600">${price}</span>
                        </div>
                        <div className="capitalize text-gray-500 font-bold">
                           total:
                           <span className="text-indigo-600">
                              {`$${parseFloat(price * pcs).toFixed(2)}`}
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
