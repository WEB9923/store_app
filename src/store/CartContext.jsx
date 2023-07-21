import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
   const [cart,setCart] = useState([]);
   const [itemAmount,setItemAmount] = useState(0);
   const [total,setTotal] = useState(0);

   useEffect(() => {
      const total = cart.reduce((previousValue,currentValue) => {
         return previousValue + currentValue.price * currentValue.pcs;
      }, 0);
      setTotal(total);
   }, [cart]);


   useEffect(() => {
      if(cart) {
         const amount = cart.reduce((previousValue,currentValue) => {
            return previousValue + currentValue.pcs
         }, 0);
         setItemAmount(amount);
      }
   },[cart])

   const handleAddToCart = (product,id) => {
      const newItem = {...product, pcs:1};
      const isInCart = cart.find((item) => {
         return item.id === id
      });
      if(isInCart) {
         const newCart = [...cart].map((item) => {
            if(item.id === id) {
               return {...item, pcs: isInCart.pcs + 1}
            } else {
               return item;
            }
         });
         setCart(newCart);
      } else {
         setCart([...cart, newItem]);
      }
   }

   const handleRemoveFromCart = (id) => {
      const newCart = cart.filter((item) => {
         return item.id !== id
      });
      setCart(newCart);
   }

   const handleClearCart = () => {
      setCart([]);
   }

   const handleIncreaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      handleAddToCart(cartItem, id);
   }
   const handleDecreaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      if(cartItem) {
         const newCart = cart.map((item) => {
            if(item.id === id) {
               return {...item, pcs: cartItem.pcs -1}
            } else {
               return item;
            }
         })
         setCart(newCart);
      }
      if(cartItem.pcs < 2) {
         handleRemoveFromCart(id);
      }
   }

   const value = {
      cart,
      handleAddToCart,
      handleRemoveFromCart,
      handleClearCart,
      handleIncreaseAmount,
      handleDecreaseAmount,
      itemAmount,
      total
   }
   return (
      <CartContext.Provider value={value}>
         {children}
      </CartContext.Provider>
   )
}


