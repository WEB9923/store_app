import banner from "../assets/banner3.png";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export default function Header() {
   return (
      <>
         <header className="h-[calc(100vh-5rem)] bg-gray-200 overflow-x-hidden">
            <div className="container flex items-center justify-around flex-wrap">
               <motion.div
                  initial={{x:-100, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{type:"tween",duration:0.5}}
                  className="max-w-[350px] flex flex-col gap-5"
               >
                  <p className="text-gray-500 capitalize font-medium text-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid consequuntur, culpa cumque eos explicabo harum illo incidunt</p>
                  <div>
                     <Link
                        to={"/products"}
                        className="py-2 px-3 rounded-md text-gray-200 bg-indigo-500 capitalize font-bold"
                     >
                        shop now
                     </Link>
                  </div>
               </motion.div>
               <motion.div
                  className="md:max-w-[500px] max-w-[400px]"
                  initial={{x:100, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{type:"tween",duration:0.5}}
               >
                  <img src={banner} alt="banner image" className="w-full h-full object-center object-cover"/>
               </motion.div>
            </div>
         </header>
      </>
   );
}
