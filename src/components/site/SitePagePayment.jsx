// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// application
import PageHeader from "../shared/PageHeader";

// data stubs
import theme from "../../data/theme";

function SitePagePayment() {
  const breadcrumb = [
    { title: "Home", url: "" },
    { title: "Payment Info", url: "" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Payment Info — ${theme.name}`}</title>
      </Helmet>

      <PageHeader breadcrumb={breadcrumb} />

      <div className="block">
        <div className="container-fluid">
          <div className="document">
            <div className="document__header">
              <h1 className="document__title">Payment Info</h1>
            </div>
            <div className="document__content typography">
              <h5>Welcome to ashamart shop!</h5>
              <br />
              <p>
                ashamart providing cash on delivery we suggest customer
                please verify your product and do payment during product
                receiving time. We are updating online payment system as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SitePagePayment;
