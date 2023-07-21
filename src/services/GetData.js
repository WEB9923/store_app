import axios from "axios";

export const getData = async () => {
   try {
      const response = await axios({
         method:"get",
         url:"https://fakestoreapi.com/products",
         responseType:"json"
      });
      return response.data;
   } catch (err) {
      throw new Error(err.response.data);
   }
};

