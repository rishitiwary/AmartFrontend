// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";

// application
import PageHeader from "../shared/PageHeader";

// data stubs
import theme from "../../data/theme";

function SitePageReturnPolicy() {
  const breadcrumb = [
    { title: "Home", url: "" },
    { title: "Cancellation & Refund Policy", url: "" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Jaivik Foundation - Cancellation & Refund Policy`}</title>
      </Helmet>

      <PageHeader breadcrumb={breadcrumb} />

      <div className="block">
        <div className="container-fluid">
          <div className="document">
            <div className="document__header">
              <h1 className="document__title">Cancellation & Refund Policy</h1>
            </div>
            <div className="document__content typography">
              <h5>Welcome to Jaivik Foundation!</h5>
              <br />
              <p>
                Thanks for shopping at www.ashamart.com If you are not
                entirely satisfied with your purchase, we're here to help.
              </p>
              <h2>Cancellation</h2>
              <p>
                You have 10 calendar days to cancellation your membership from
                the date you applied for this or To be eligible for a
                cancellation applied within 10 days. Your must have show payment
                receipt that generated at the time of applied.
              </p>
              <h2>Refunds</h2>
              <p>
                Once we receive your cancellation request, we will inspect it
                and notify you that we have taken your cancellation request. We
                will immediately notify you on the status of your refund after
                inspecting the membership cancellation request. If your return
                is approved, we will initiate a refund to your credit card (or
                original method of payment). You will receive the credit within
                a certain amount of days, depending on your card issuer's
                policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SitePageReturnPolicy;
