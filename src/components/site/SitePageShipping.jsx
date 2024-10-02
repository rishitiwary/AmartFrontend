// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";

// application
import PageHeader from "../shared/PageHeader";

// data stubs

function SitePageShipping() {
  const breadcrumb = [
    { title: "Home", url: "" },
    { title: "Shipping & Deals Info", url: "" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shipping & Deals Info</title>
        <meta charset="utf-8" />
        <meta name="title" content="Shipping & Deals Info" />
        <meta
          name="keyword"
          content="ashamart,online shopping,online shopping janakpur,online market Kathmandu,online shopping India, online shopping, online store,online supermarket,cloth India,grocery pune, online home and kitchen shopping India,Men's wear, Women's Shopping in India. Summer wears, Wedding Dresses, Gifts, Offers and Deals in India, food shopping online,Online Grocery dhangadhi, online grocery Jaleswar"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="" content="IE=edge,chrome=1"></meta>

        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <PageHeader header="Shipping & Deals Info" breadcrumb={breadcrumb} />

      <div className="block faq">
        <div className="container-fluid">
          <div className="faq__section">
            <div className="faq__section-body">
              <div className="row">
                <div className="faq__section-column col-12 col-lg-12">
                  <div className="typography">
                    <h3>
                      <b>Great Daily Deals Discounts</b>
                    </h3>
                    <p>
                      ashamart an Ecommerce marketplace radical the
                      orthodox methods of buying and selling things in our
                      country. Through ashamart customer can buy and
                      sale their product in modern way by using ashamart
                      website. ashamart is convincing a lot of daily
                      deals to our proactive customers. Deals like discounts in
                      products. ashamart an imagines Ecommerce market
                      place radical the orthodox methods of buying and selling
                      thing in our country. ashamart is convincing a lot
                      of daily deals to our proactive customers Deals like
                      discounts in products.
                    </p>
                    <h3>Free and same day/next day delivery</h3>
                    <p>
                      ashamart is contributing free and same Delivery to
                      everyone in side Ring road Janakpur sub metropolitan, free
                      and next day Delivey outside of Ring road the jankapur
                      municipality during this time of crisis.
                      <br />
                      The fantastic part for customers in ashamart is
                      customers will get to buy products at normal prices from
                      markets. Customers won’t have to pay anything for delivery
                      gone be delivered to your door unheeding of where you live
                      insides the Janakpur.
                    </p>
                    <h3>100% Satisfaction and Guaranty</h3>
                    <p>
                      ashamart provides different types of grocery
                      items, home and kitchen items, household needs,
                      fashion/baby care , beverage, snacks products of popular
                      local brands etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SitePageShipping;
