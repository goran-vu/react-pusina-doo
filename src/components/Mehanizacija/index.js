import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import{
  App,
  Container,
  Naslov,
} from './Mehanizacija';
const product = productData.map((item) => (
  <Product
    name={item.name}
    url={item.imageurl}
    price={item.price}
    description={item.description}
  />
));
 
const Mehanizacija =()=>{

  return (
    <>
    <App>
      <Container>
        <Naslov>Mehanizacija</Naslov>
        <Carousel  
          responsive={responsive}
          partialVisible={true} 
          centerMode={false}
         >
          {product}
        </Carousel>
     </Container>
     </App>
    </>
  );
}
export default Mehanizacija
