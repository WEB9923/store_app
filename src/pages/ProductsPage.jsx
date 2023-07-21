// import {faker} from "@faker-js/faker";
// import {v4 as uuidv4} from "uuid";
import Card from "../components/Card.jsx";
import {useEffect, useState} from "react";
import {getData} from "../services/GetData.js";

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

   const fetchData = async () => {
      try {
         return await getData();
      } catch (err) {
         console.log(err)
      }
   }
   useEffect(() => {
      fetchData().then((res) => setProducts(res));
   },[])

   return (
      <>
         <section className="section">
            <div className="container">
               <h1 className="title">products</h1>
               <div className="flex gap-5 flex-wrap">
                  {products && products.map((pr) => (
                     <Card
                        key={pr.id}
                        data={pr}
                     />
                  ))}
               </div>
            </div>
         </section>
      </>
   );
}
