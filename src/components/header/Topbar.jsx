// react
import React from "react";

// third-party
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

// application
import Dropdown from "./Dropdown";
import DropdownLanguage from "./DropdownLanguage";

function Topbar() {
  const links = [
    // {
    //   title: <FormattedMessage id="topbar.aboutUs" defaultMessage="About Us" />,
    //   url: "/site/about-us",
    // },
    {
      title: "Register Seller",
      url: "/site/contact-us",
    },
    ,
  ];

  const accountLinks = [
    { title: "Login", url: "/account/login" },
    { title: "Register", url: "/account/login" },
  ];

  const linksList = links.map((item, index) => (
    <div key={index} className="topbar__item topbar__item--link">
      {item.title === "Register Parlour/Salon" ? (
        <a href={item.url} {...item.props} target="_blank">
          {item.title}
        </a>
      ) : (
        <Link className="topbar-link" to={item.url}>
          {item.title}
        </Link>
      )}
    </div>
  ));

  const accountLink = accountLinks.map((item, index) => (
    <div key={index} className="topbar__item topbar__item--link">
      <Link className="topbar-link" to={item.url}>
        {item.title}
      </Link>
    </div>
  ));
  return (
    <div className="site-header__topbar topbar">
      <div className="topbar__container container">
        <div className="topbar__row">
          {linksList}
          <div className="topbar__spring" />
          <div className="topbar__item">{accountLink}</div>
          <div className="topbar__item">
            <DropdownLanguage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
