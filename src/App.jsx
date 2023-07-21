import {RouterProvider} from "react-router-dom";
import {Routes} from "./routes/Routes.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";


export default function App() {

  return (
    <>
       <CartContextProvider>
          <RouterProvider router={Routes}/>
       </CartContextProvider>
    </>
  )
}

