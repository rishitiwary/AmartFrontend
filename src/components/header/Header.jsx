// react
import React, { Component } from "react";

// third-party
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

// application
import { Heart20Svg, LogoSmallSvg } from "../../svg";
import Indicator from "./Indicator";
import NavPanel from "./NavPanel";
import Search from "./Search";
import Topbar from "./Topbar";
import { history } from "../../helpers/history";
import IndicatorAccount from "./IndicatorAccount";
import CartIndicator from "./IndicatorCart";
import NavLinks from "./NavLinks";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false,
    };
    this.searchInput = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchOpen } = this.state;

    if (
      searchOpen &&
      searchOpen !== prevState.searchOpen &&
      this.searchInput.current
    ) {
      this.searchInput.current.focus();
    }
  }

  handleOpenSearch = () => {
    this.setState(() => ({ searchOpen: true }));
  };

  handleCloseSearch = () => {
    this.setState(() => ({ searchOpen: false }));
  };
  render() {
      const { layout ,wishlist} = this.props;
    let bannerSection;
    

    if (layout === "default") {
      bannerSection = (
        <div className="site-header__middle container-fluid">
          <div
            className="site-header__logo"
            onClick={() => {
              history.push("/");
            }}
          >
            <img className="logo_desk" src="/logo.svg" />
          </div>
          <div className="site-header__search">
            <Search
              context="header"
              inputRef={this.searchInput}
              onClose={this.handleCloseSearch}
            />
          </div>
          <div className="site-header__phone">
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "solid .3px #D3D3D3",
                  color: "black",
                }}
              >
                <span>SignIn</span>
                <IndicatorAccount />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "7px",
                  color: "black",
                }}
              >
                <span>Cart</span>
                <CartIndicator />
              </div>

              <Indicator
              url="/shop/wishlist"
              value={wishlist?.length}
              icon={<Heart20Svg />}
            />
              <div></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="site-header">
        {/* <Topbar /> */}
        {bannerSection}
        {/* <hr/> */}
        <div className="site-header__nav-panel">
          <NavPanel layout={layout} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  /** one of ['default', 'compact'] (default: 'default') */
  layout: PropTypes.oneOf(["default", "compact"]),
};

Header.defaultProps = {
  layout: "default",
};




const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
