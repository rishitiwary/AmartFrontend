// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// application
import PageHeader from "../shared/PageHeader";

// data stubs
import theme from "../../data/theme";

function SitePageTerms() {
  const breadcrumb = [
    { title: "Home", url: "" },
    { title: "Terms And Conditions", url: "" },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Terms And Conditions — ${theme.name}`}</title>
      </Helmet>

      <PageHeader breadcrumb={breadcrumb} />

      <div className="block">
        <div className="container-fluid">
          <div className="document">
            <div className="document__header">
              <h1 className="document__title">Terms And Conditions</h1>
            </div>
            {/* <div className="document__content typography">
              <h5>Welcome to Jaivik Foundation!</h5>
              
            </div> */}
            <div className="about-three__content-box">
              <p align="justify">
                Thank you for accessing/shopping at
                www.ashamart.com.com. This site is owned by ---Company
                Name---- (hereinafter referred to as
                “www.ashamart.com”). By accessing, shopping on this
                site, you indicate your unconditional acceptance of these terms
                &amp; conditions. We reserve this right, in our sole discretion,
                to update or revise these terms &amp; conditions. Continued use
                of the site following the posting of any changes to the ‘terms
                &amp; conditions’, constitutes your acceptance of those changes.
                At “www.ashamart.com”, we try our best to create a space
                where you can explore and shop for all your favorite things in a
                safe and secure environment. All products and information
                displayed on “www.ashamart.com” constitutes an
                "invitation to offer". “www.ashamart.com” reserves the
                right to accept or reject your offer. Your order for purchase,
                constitutes your "offer" which shall be subject to the terms and
                conditions as listed below.
              </p>
              <br />
              <h2>1. Eligibility to use our site</h2>
              <p align="justify">
                Use of the Site is available only to persons who can legally
                enter into contracts under applicable laws. Persons who are
                "incompetent to contract", within the meaning of the Indian
                Contract Act, 1872 including un-discharged insolvents etc. are
                not eligible to use the Site. “www.ashamart.com”
                reserves the right to terminate your access to the Site if it
                discovers that you are under the age of 18 years or suffers from
                any other disability, as recognized under Indian Contract Act,
                1872.
              </p>
              <br />
              <h2>2. Membership</h2>
              <p align="justify">
                Although it's not essential to have an account to shop with
                “www.ashamart.com”, you can shop as a guest. As a
                member, you agree to provide true, accurate, current, and
                complete information about yourself as prompted by the site's
                registration form. Registration where prohibited under any law
                shall be void. “www.ashamart.com” reserves the right to
                revoke or terminate your registration for any reason at any
                time, without notice.
              </p>
              <br />
              <h2>3. Electronic Communications</h2>
              <p align="justify">
                When you use the site or send emails or other data, information
                or communicate to us, you agree and understand that you are
                communicating with us electronically and give your consent to
                receive communications electronically from us periodically, when
                required.
              </p>
              <br />
              <h2>4. Reviews, Feedback, Submissions</h2>
              <p align="justify">
                All reviews, comments, feedback, postcards, suggestions, ideas,
                and other submissions disclosed, submitted or offered to
                “www.ashamart.com” directly or otherwise disclosed,
                submitted or offered in connection with your use of this Site
                (collectively referred to "Comments") will remain
                “www.ashamart.com” property. Such disclosure, submission
                or offer of any comments shall constitute an assignment to
                “www.ashamart.com” of all worldwide rights, titles and
                interests in all copyrights and other intellectual properties in
                the comments,thus, it exclusively owns all such rights, titles
                and interests and shall not be limited in any way in its use,
                commercial or otherwise.
              </p>
              <p align="justify">
                “www.ashamart.com” will be entitled to use, reproduce,
                disclose, modify, adapt, create derivative works from, publish,
                display and distribute any comments you submit for any purpose
                whatsoever, without restriction and without compensating you in
                any way.
              </p>
              <p align="justify">
                “www.ashamart.com” is and shall be under no obligation
                (1) to maintain any Comments in confidence; or (2) to pay you
                any compensation for any Comments; or (3) to respond to any
                Comments. You agree that any comments submitted by you to the
                Site will not violate this policy or any right of any third
                party, including copyright, trademark, privacy or other personal
                or proprietary right(s), and will not cause injury to any person
                or entity. You further agree that no comments submitted by you
                to the site will be libelous or otherwise unlawful, threatening,
                abusive or obscene material, or contain software viruses,
                political campaigning, commercial solicitation, chain letters,
                mass mailings or any form of "spam".
              </p>
              <p align="justify">
                “www.ashamart.com” does not regularly review posted
                comments, but does reserve the right (but not the obligation) to
                monitor and edit or remove any comment submitted to the Site.
                You grant “www.ashamart.com” the right to use the name
                that you submit in connection with any of the posted comments.
                You agree not to use a false email address, impersonate any
                person or entity, or otherwise mislead as to the origin of any
                Comments you submit. You are and shall remain solely responsible
                for the content of any comments you make and you agree to
                indemnify “www.ashamart.com” and its affiliates for all
                claims resulting from any Comments you submit, we take no
                responsibility and assume no liability for any comments
                submitted by you or any third party.
              </p>
              <br />
              <h2>
                5. Accuracy of Content/ Information of Products on the Web Site
              </h2>
              <p align="justify">
                While “www.ashamart.com” strives to provide accurate
                product and pricing information, typographical errors may occur.
                In the event that a product is listed at an incorrect price or
                with incorrect information due to an error in pricing or product
                information, “www.ashamart.com” shall have the right, on
                our sole discretion, to modify the price of the products, or
                information of the products or to refuse or cancel any orders
                placed for that product, unless the product has already been
                dispatched. In the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SitePageTerms;
