import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../model/products";

export default function ProductDetails() {
  let { id } = useParams();
  let product = products.find((product) => product.id === id);
  return product ? (
    <div className=" container bg-light  p-5 mt-5 text-center">
      <h1>Product Deatils </h1>
      <div className="row">
        <img
          className=" col-md-6"
          style={{ width: "600px" }}
          src={product?.imgSrc}
          alt=""
        />
        <div className="p-5 mt-5 col-md-6">
          <br></br>
          <h2>{product?.productName}</h2>
          <br />
          <p> {product?.productDesc}</p>
          <br />
          <button className=" btn22 ">ADD TO CARD</button>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="mt-5 text-success ">Product Not Found</h1>
  );
}
