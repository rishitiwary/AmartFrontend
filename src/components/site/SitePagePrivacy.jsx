// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";

// application
import PageHeader from "../shared/PageHeader";

// data stubs

function SitePagePrivacy() {
  const breadcrumb = [
    { title: "Home", url: "" },
    { title: "Privacy and Policy", url: "" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy and Policy</title>
        <meta charset="utf-8" />
        <meta name="title" content="Privacy and Policy" />
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

      <PageHeader header="Privacy and Policy" breadcrumb={breadcrumb} />

      <div className="block faq">
        <div className="container-fluid">
          <div className="faq__section">
            <div className="faq__section-body">
              <div className="row">
                <div className="faq__section-column col-12 col-lg-12">
                  <div className="typography">
                    <p>
                      <b>Jaivik Foundation</b> Being a professional
                      organization, We understand your concern about privacy and
                      security of personal details. This is our ethical
                      responsibility to share our privacy policy with you. Here
                      are the details that will be helpful to clearing your
                      doubt.
                    </p>
                    <ul>
                      <li>
                        <i class="fa fa-arrow-right"></i> All the details shared
                        with the us on this website, strictly hold on to company
                        only.
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> We do not share our
                        student information to any third party.
                      </li>
                      <li>
                        <i class="fa fa-arrow-right"></i> We do not share our
                        tutor information to any third party.
                      </li>
                    </ul>
                    <p align="justify">
                      We reserve the right to use your personal information as
                      required by law and when we believe necessary disclosure
                      of your submitted details to protect our right and/or to
                      comply with a judicial proceeding, court order, legal
                      process served on our Website. (www.ashamart.com).
                    </p>
                    <p align="justify">
                      ashamart.com reserves the right to modify Its
                      privacy/Policy statement any time, so please review this
                      section frequently and more oftenly. Any changes made to
                      above privacy policy will be notified or posted here and
                      your continued use of the site, services and/or software
                      constitutes your agreement to be bound by such changes.
                    </p>
                    <p align="justify">
                      We value your privacy and would like to inform you that
                      you would be receiving our emails after you signed up or
                      subscribe our updates with us to avail our services. We
                      treat your email ids with upmost care and do not share
                      them with anyone else. So you can be rest assured that all
                      emails sent from us are designed to benefit you solely.
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

export default SitePagePrivacy;
