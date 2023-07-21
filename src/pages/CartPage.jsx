import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import Checkout from "../components/Checkout.jsx";

export default function CartPage() {
   const {cart} = useContext(CartContext);

   return (
      <>
         <section className="section">
            <div className="container h-full">
               <h1 className="title">cart</h1>
               <div className="flex justify-between flex-wrap relative gap-16">
                  <div className="flex-1 flex-col min-h-[70vh] max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-100">
                     {cart?.map((product) => {
                        return (
                           <CartItem key={product.id} data={product}/>
                        )
                     })}
                     {cart.length === 0 && <h1 className="text-red-500 font-bold text-3xl capitalize text-center">
                        cart is empty
                     </h1>}
                  </div>
                  <Checkout/>
               </div>
            </div>
         </section>
      </>
   );
}
