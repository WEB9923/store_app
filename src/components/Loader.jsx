import {PuffLoader} from "react-spinners";

export default function Loader() {
   return (
      <>
         <div
            className="absolute top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2"
         >
            <PuffLoader
               color="#6366f1"
               size={60}
               speedMultiplier={1.5}
            />
         </div>
      </>
   );
}
