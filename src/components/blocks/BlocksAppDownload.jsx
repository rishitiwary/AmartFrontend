// react
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

export default function BlockAppDownload() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box className="container-fluid" sx={{ flexGrow: 1 }}>
      <Grid container spacing={6}>
        <Grid
          className={windowWidth < 763 ? "d-none" : ""}
          item
          xs={3}
          md={5}
          lg={5}
        >
          <div className="download-app__image">
            <div className="img-loader__wrapper__wrapper">
              <div className="img-loader__wrapper text-right">
                <img
                  className="img-loader__img img-loader__img--shown "
                  alt="Download Jaivifoundation app"
                  src="/images/banners/chitwashop-get-app.png"
                  width="283px"
                />
                <span className="img-loader__placeholder img-loader__img img-loader__img--hidden " />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <div className="download-app mt-5">
            <div className="download-app__title">
              Get the ashamart app
            </div>
            <p className="download-app__subtitle pt-3">
              We will give unbelievable offer when install or download the app
            </p>
            <Grid container>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="email"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="email"
                      control={<Radio />}
                      label="email"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <div className="app__link_send">
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
              />
              <Button
                className="btn btn-primary product-card__addtocart"
                variant="contained"
                color="success"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.ecommerce.chitwashop&hl=en",
                    "_blank"
                  )
                }
              >
                Share
              </Button>
            </div>
            <div className="mb-4">
              <span className>Download app from</span>
              <div className="download-app-icons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.ecommerce.chitwashop&hl=en"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="download-app__icon download-apps__img"
                >
                  <div className="img-loader__wrapper__wrapper">
                    <div className="img-loader__wrapper">
                      <img
                        className="img-loader__img img-loader__img--shown "
                        alt="Download blinkit for Android"
                        src="/images/google-paly_1.2x.webp"
                      />
                      <span className="img-loader__placeholder img-loader__img img-loader__img--hidden " />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
