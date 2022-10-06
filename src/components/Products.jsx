import React, { Component } from "react";
import Card from "./Cards";
import { products } from "../model/products";
export default class Products extends Component {
  render() {
    return (
      <div className="p-5 bg-light text-center">
        <h1 className="text-5">1% For Good</h1>
        <br></br>
        <p>
          Every quarter, we proudly donate one percent of all online and retail
          sales to a local<br></br> Portland non-profit or charity. We're driven
          by community and often team up with brands <br></br>we love and other
          like-minded individuals. It is our goal to invest back into the
          community<br></br> that has given us so much support.
        </p>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row g-3 imgg">
            {products.map((product) => (
              <Card productInfo={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
