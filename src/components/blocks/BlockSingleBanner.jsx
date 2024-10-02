// react
import React from "react";
import { Grid, Paper } from "@mui/material";
import { images } from "../../dummydata";
export default function BlockSingleBanner() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  console.log(images, "images");

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
        <a href="" className="block-banner__body">
          <img
            src="https://f-test.nooncdn.com/mpcms/EN0001/assets/0156b041-173b-49a2-a083-014d781ed912.png"
            alt="download mobile app"
          />
        </a>
      </div>
    );
  } else {
    return (
      <Grid container className=" mb-4">
        <Paper>
          <img
            style={{ maxWidth: "100%" }}
            src="https://f-test.nooncdn.com/mpcms/EN0001/assets/0156b041-173b-49a2-a083-014d781ed912.png"
            alt="download mobile app"
          />
        </Paper>
      </Grid>
    );
  }
}
