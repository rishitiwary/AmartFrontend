// react
import React from "react";
import { Card, CardMedia } from "@mui/material";

export default function BlockAppBanner() {
const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (windowWidth > 650) {
    return (
        <div className="block block-banner">
              
            <a href="https://play.google.com/store/apps/details?id=com.ecommerce.chitwashop&hl=en" className="block-banner__body">
                <img
                 src="https://f.nooncdn.com/cms/pages/20220630/1753fb82eb3b0cf030152a567d742bc6/en_dk-uae-free-delivery-banner-strip.png" 
                  alt="download mobile app"/>
            </a>
        </div>
      );
  }else{
    return (
      
        <div className="block block-banner">
        <a href="" className="block-banner__body">
          <Card
            className="block-banner__image block-banner__image--desktop"
          />
          <Card className="block-banner__image block-banner__image--mobile">
            <CardMedia
              component="img"
              height="194"
              image="https://f.nooncdn.com/cms/pages/20220630/1753fb82eb3b0cf030152a567d742bc6/en_dk-uae-free-delivery-banner-strip.png"
              alt="download mobile app"
            />
          </Card>
        </a>
             
        </div>
      );
  }
  
}
