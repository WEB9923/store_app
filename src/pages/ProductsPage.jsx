// import {faker} from "@faker-js/faker";
// import {v4 as uuidv4} from "uuid";
import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";
import {getData} from "../services/GetData.js";
import Loader from "../components/Loader.jsx";

// faker.seed(50);

export default function ProductsPage() {
   // const productsFakeData = [...Array(50)].map(() => ({
   //    id: uuidv4(),
   //    title:faker.commerce.productName(),
   //    desc:faker.commerce.productDescription(),
   //    image:faker.image.urlPicsumPhotos({
   //       width: 450,
   //       height: 450
   //    }),
   //    price:faker.commerce.price({
   //       min: 10,
   //       max: 1500,
   //       symbol: "$"
   //    })
   // }))
   const [products,setProducts] = useState([]);
   const [isLoading,setIsLoading] = useState(false);

   const fetchData = async () => {
      try {
         setIsLoading(true);
         return await getData();
      } catch (err) {
         console.log(err)
      } finally {
         setIsLoading(false);
      }
   }
   useEffect(() => {
      fetchData().then((res) => setProducts(res));
   },[])

   return (
      <>
         <section className="section min-h-[70vh]">
            <div className="container h-full">
               <h1 className="title">products</h1>
               <div className="flex gap-5 flex-wrap h-full relative">
                  {isLoading ? <Loader/> : products?.map((pr) => {
                     return (
                        <Card
                           key={pr.id}
                           data={pr}
                        />
                     )
                  })}
               </div>
            </div>
         </section>
      </>
   );
}
