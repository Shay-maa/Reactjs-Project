import React from "react";

import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cards(props) {
  let navigate = useNavigate();
  let { productInfo } = props;
  let showDetails = () => {
    navigate(`/products/${productInfo.id}`);
  };

  return (
    <div className="col-sm-3 col-md-3">
      <Card className="carrd">
        <Card.Img variant="top" src={productInfo?.imgSrc} />
        <Card.Body>
          <Card.Title>
            <h2>{productInfo?.productName}</h2>
            <span className="text-danger fs-4"></span>{" "}
          </Card.Title>
          <Card.Text className="text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <div className="row g-2">
            <div>
              <Button
                className="btn"
                variant="outline-info"
                onClick={showDetails}
              >
                {productInfo?.linkTitle}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
