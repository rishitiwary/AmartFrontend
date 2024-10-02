// react
import React from "react";
import { Card, CardMedia } from "@mui/material";
// third-party
import { Link } from "react-router-dom";

export default function BlockBanner() {
  return (
    // <div className="block block-banner">
      <div className="container-fluid">
        <Link to="/shop/catalog/heater" className="block-banner__body">
          <Card
            className="block-banner__image block-banner__image--desktop"
            style={{ backgroundImage: 'url("https://f.nooncdn.com/mpcms/EN0001/assets/0f578a47-14d0-44a9-9165-7147aff1987f.png")' }}
          />
          <Card className="block-banner__image block-banner__image--mobile">
            <CardMedia
              component="img"
              height="194"
              image="https://f.nooncdn.com/mpcms/EN0001/assets/0f578a47-14d0-44a9-9165-7147aff1987f.png"
              alt="Paella dish"
            />
          </Card>
        </Link>
      </div>
    // </div>
  );
}
