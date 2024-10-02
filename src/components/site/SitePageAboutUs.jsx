// react
import React from "react";

// third-party
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// application
import StroykaSlick from "../shared/StroykaSlick";

// data stubs
import theme from "../../data/theme";

const slickSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 379,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function SitePageAboutUs() {
  return (
    <div className="block about-us">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`About | Jaivik Foundation `}</title>
        <meta charset="utf-8" />
        <meta name="title" content="About Us" />
        <meta
          name="keyword"
          content="Jaivik Foundation,online shopping,online shopping janakpur,online market Kathmandu,online shopping India, online shopping, online store,online supermarket,cloth India,grocery pune, online home and kitchen shopping India,Men's wear, Women's Shopping in India. Summer wears, Wedding Dresses, Gifts, Offers and Deals in India, food shopping online,Online Grocery dhangadhi, online grocery Jaleswar"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="" content="IE=edge,chrome=1"></meta>
      </Helmet>

      <div
        className="about-us__image"
        style={{ backgroundImage: 'url("images/aboutus.jpg")' }}
      />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="about-us__body">
              <h1 className="about-us__title">Jaivik Foundation</h1>
              <div className="about-us__text typography">
                <p>
                  50-65% population of our country is totally dependant
                  directly/indirectly on the agriculture and other works
                  associated with it but the contribution of this in agriculture
                  is still only 15%. The government spends only 3-5% of its
                  total budget on the agriculture. This is also very saddened
                  point that despite all these facts , this sector faces loss of
                  92,000 crores because of the wastage of
                  crops/fruits/vegetables. There are 6,64,369 villages in India,
                  our organization Jaivik Foundation has an amazing strategy to
                  minimise the distance between the Farmer businessman and the
                  consumer, further to give jobs to 2 persons from each village.
                  In fact the entire ecosystem of the agriculture sector can be
                  designed in such a way that our country can not only become
                  independent in the production of all types of crops, fruits,
                  vegetables, eatable oils etc but rather can become a very
                  strong sector also by which the so called shortage of
                  grains/vegetables/fruits. The farmers businessmen can also get
                  double price as compare to what he is getting at present. .
                  All the unemoloyeed persons of the country can also get the
                  employment, persons of other country can also be offered
                  employment once the structure of our agriculture is made
                  complete scientific and well planned.
                </p>
              </div>
              {/* <div className="about-us__team">
                                <h2 className="about-us__team-title">Meat Our Team</h2>
                                <div className="about-us__team-subtitle text-muted">
                                    Want to work in our friendly team?
                                    <br />
                                    <Link to="/site/contact-us">Contact us</Link>
                                    {' '}
                                    and we will consider your candidacy.
                                </div>
                                <div className="about-us__teammates teammates">
                                    <StroykaSlick {...slickSettings}>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/teammate-1.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Michael Russo</div>
                                            <div className="teammate__position text-muted">Chief Executive Officer</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/teammate-2.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Katherine Miller</div>
                                            <div className="teammate__position text-muted">Marketing Officer</div>
                                        </div>
                                        <div className="teammates__item teammate">
                                            <div className="teammate__avatar">
                                                <img src="images/teammates/teammate-3.jpg" alt="" />
                                            </div>
                                            <div className="teammate__name">Anthony Harris</div>
                                            <div className="teammate__position text-muted">Finance Director</div>
                                        </div>
                                    </StroykaSlick>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitePageAboutUs;
