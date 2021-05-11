import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader game={props.product}></CardHeader>
      <CardBody></CardBody>
      <CardFooter></CardFooter>
    </div>
  );
};

export default ProductCard;
