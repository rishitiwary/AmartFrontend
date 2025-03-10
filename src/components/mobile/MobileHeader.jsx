// react
import React, { Component } from "react";

// third-party
import classNames from "classnames";
import { connect } from "react-redux";
import { history } from "../../helpers/history";

// application
import Indicator from "../header/Indicator";
import {
  Menu18x14Svg,
  // LogoSmallSvg,
  Search20Svg,
  Heart20Svg,
  Cart20Svg,
} from "../../svg";
import { mobileMenuOpen } from "../../store/mobile-menu";
import Search from "../header/Search";

class MobileHeader extends Component {
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
    const { openMobileMenu, wishlist, cart } = this.props;
    const { searchOpen } = this.state;
    const searchClasses = classNames("mobile-header__search", {
      "mobile-header__search--open": searchOpen,
    });

    return (
      <div className="mobile-header">
        <div className="mobile-header__panel">
          <div className="container-fluid">
            <div className="mobile-header__body">
              <button
                type="button"
                className="mobile-header__menu-button"
                onClick={openMobileMenu}
              >
                <Menu18x14Svg />
              </button>
              <span
                onClick={() => {
                  history.push("/");
                }}
                className="mobile-header__logo"
              >
                {/* <img className="logo_desk" src="/logo.svg" style={{
             width: "min(50vw, 115px)"
            }} /> */}
            <h4 className="mt-2">ashamart</h4>
              </span>
            
              <div className="mobile-header__indicators">
                <Indicator
                  className="indicator--mobile indicator--mobile-search d-md-none"
                  onClick={this.handleOpenSearch}
                  icon={<Search20Svg />}
                />
                <Indicator
                  className="indicator--mobile d-sm-flex d-none"
                  onClick={() => {
                    history.push("/shop/wishlist");
                  }}
                  value={wishlist.length}
                  icon={<Heart20Svg />}
                />
                <Indicator
                  className="indicator--mobile"
                  onClick={() => {
                    history.push("/shop/cart");
                  }}
                  value={cart.quantity}
                  icon={<Cart20Svg />}
                />
              </div>
            </div>
          </div>
        </div>
        <Search
                context="mobile-header"
                className={searchClasses}
                inputRef={this.searchInput}
                onClose={this.handleCloseSearch}
              />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  wishlist: state.wishlist,
});

const mapDispatchToProps = {
  openMobileMenu: mobileMenuOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
