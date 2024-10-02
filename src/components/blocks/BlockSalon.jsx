// react
import React, { useEffect, useState } from "react";
import { Card, CardMedia } from "@mui/material";
// third-party
import { Link } from "react-router-dom";

export default function BlockSalonBanner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (windowWidth > 1) {
    return true;
  }
  return (
    <div className="block block-banner">
      <div className="container-fluid">
        <Link to="/shop/catalog/heater" className="block-banner__body">
          <Card className="block-banner__image block-banner__image--desktop">
            <CardMedia
              component="img"
              image="images/banners/salon.png"
              alt="Paella dish"
            />
          </Card>
        </Link>
      </div>
    </div>
  );
}
