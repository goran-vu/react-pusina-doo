import React from "react";
import{
   ProductImg,
  Card,
  Name,
  Price,
} from './Mehanizacija';

export default function Product(props) {
  return (
    <Card>
      <ProductImg src={props.url} alt="" />
      <Name>{props.name}</Name>
      <Price >{props.price}</Price>
    </Card>
  );
}
