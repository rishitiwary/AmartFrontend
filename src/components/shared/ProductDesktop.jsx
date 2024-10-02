// react
import React, { Component, useCallback } from "react";
import { NotificationManager } from "react-notifications";
// third-party
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { history } from "../../helpers/history";
import { GetLocationDetail } from "../../services";
// application
import AsyncAction from "./AsyncAction";
import Currency from "./Currency";
import ProductGallery from "./ProductGallery";
// import Rating from './Rating';
import { cartAddItem, cartBuyItem } from "../../store/cart";
import { compareAddItem } from "../../store/compare";
import { Wishlist16Svg, Compare16Svg } from "../../svg";
import { wishlistAddItem } from "../../store/wishlist";
import getFilterHandler from "../../workflow/filters";

class ProductDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      zipcode: "",
      version: 1,
    };
  }
  handleCheckPincode = (e) => {
    this.setState({ zipcode: e.target.value });
  };
  handleChangeQuantity = (quantity) => {
    this.setState({ quantity });
  };
  handleChangeColor = async (variant) => {
    // console.log(variant, "variant");
    history.push(`/shop/products/${variant.slug}?filter_color=${variant.id}`);
    // window.location.reload();
  };
  handleChangeBySize = async (variant) => {
    history.push(`/shop/products/${variant?.ProductId}/${variant.slug}`);
    // window.location.reload();
  };

  handleChangeVersion = async (product, variant) => {
    // console.log(product, "product.productId");
    // console.log(variant.name, "variant.name");
    history.push(
      `/shop/catalog/${product.ChildCat}?filter_brand=${product.productId}/${variant.name}`
    );
    // history.push(`/shop/catalog/categorySlug?${ChildCat}categorySlug?${ChildCat}`);
    window.location.reload();
  };

  onSubmitZipcode = async () => {
    const { zipcode } = this.state;
    let pinCode = await GetLocationDetail.checkPincode(zipcode);
    if (pinCode.data.status) {
      NotificationManager.success(pinCode.message);
    } else {
      NotificationManager.error(pinCode.message);
    }
  };

  handleValueChange = (dispatch, { filter, value }) => {
    dispatch({
      type: "SET_FILTER_VALUE",
      filter: filter,
      value: `${value}`,
    });
  };
  handleValueChangeprops = this.handleValueChange.bind(this);

  render() {
    const {
      product,
      layout,
      wishlistAddItem,
      compareAddItem,
      cartAddItem,
      cartBuyItem,
      dispatch,
      filters,
      values,
    } = this.props;
    const { quantity } = this.state;
    let prices;
    if (product) {
      prices = (
        <>
          <div className="product-card__prices">
            <span className=" product_card_left_text mr-3  text-decoration-none">
              Was :
            </span>
            {product.discount && product.discountPer ? (
              <span className="product-card__old-price ml-2">
                <Currency value={product.distributorPrice} />
              </span>
            ) : null}{" "}
          </div>
          <div className="product-card__prices">
            <span className="product_card_left_text mr-3  text-decoration-none">
              Now :
            </span>
            <span className="product-card__new h5 productNetPrice ml-2">
              <Currency value={product.netPrice} />
            </span>{" "}
          </div>
          <div className="product-card__prices">
            <span className=" product_card_left_text mr-3  text-decoration-none">
              Saving :
            </span>
            <span className="product-card__new h5 mr-2 productpricesaving">
              <Currency value={product.distributorPrice - product.netPrice} />
            </span>{" "}
            {product.discount && product.discountPer ? (
              <span className="product-card__Save-price">
                {product.discountPer + "% " + "off"}
              </span>
            ) : null}
          </div>
        </>
      );
    } else {
      prices = <Currency value={product.netPrice} />;
    }

    return (
      <div className={`product product--layout--${layout}`}>
        {/* <div className="product__content"> */}

        <div className="row">
          <div className="col-4 card  pt-4">
            <ProductGallery layout={layout} images={product.Photo} />
          </div>
          <div className="col-5 card p-4">
            <div className="product__info">
              <div className="product__wishlist-compare">
                <AsyncAction
                  action={() => wishlistAddItem(product)}
                  render={({ run, loading }) => (
                    <button
                      type="button"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Wishlist"
                      onClick={run}
                      className={classNames(
                        "btn btn-sm btn-light btn-svg-icon",
                        {
                          "btn-loading": loading,
                        }
                      )}
                    >
                      <Wishlist16Svg />
                    </button>
                  )}
                />
                <AsyncAction
                  action={() => compareAddItem(product)}
                  render={({ run, loading }) => (
                    <button
                      type="button"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Compare"
                      onClick={run}
                      className={classNames(
                        "btn btn-sm btn-light btn-svg-icon",
                        {
                          "btn-loading": loading,
                        }
                      )}
                    >
                      <Compare16Svg />
                    </button>
                  )}
                />
              </div>
              <span className="brand_name">{product.BrandName}</span>
              <h1 className="product__name">{product.Name}</h1>

              <span className="brand_name" style={{ fontWeight: 400 }}>
                Model Number : {product.Code}
              </span>

              <div className="product__description">
                {product.HighLightDetail?.map((attribute, index) => (
                  <li key={index}>{attribute.title}</li>
                ))}
              </div>
              <ul className="product__features">
                {product.HighLightDetail?.map((attribute, index) => (
                  <li key={index}>{attribute.title}</li>
                ))}
              </ul>
              {/* <ul className="product__meta">
                <li className="product__meta-availability">
                  Availability: <span className="text-success">In Stock</span>
                </li>
                <li>
                  Brand:
                  <a href={`shop/catalog/${product.BrandName}`}>
                    {" "}
                    {product.BrandName}
                  </a>
                </li>
                <li>
                  SoldBy:{" "}
                  <a href={`shop/catalog/${product.SoldBy}`}>
                    {" "}
                    {product.SoldBy}
                  </a>
                </li>
              </ul>
              <ul className="product__meta">
                <li className="product__meta-availability">
                  WarrantyType : {product.WarrantyType}
                </li>
                <li className="product__meta-availability">
                  WarrantyPeriod : {product.WarrantyPeriod}
                </li>
              </ul> */}
            </div>

            <div className="product__sidebar">
              <div className="product__availability">
                Availability: <span className="text-success">In Stock</span>
              </div>

              <div className="form-group product__option">
                <div className="__pincode">
                  <div className="product__prices">{prices}</div>
                </div>
              </div>
              <form className="product__options">
                <div
                  className={
                    product.version && product.version.length
                      ? "form-group product__option"
                      : "d-none"
                  }
                >
                  {/* version  */}
                  <div className="product__option-label mt-2 mb-3">
                    <span className="product_card_left_text"> Version: </span>
                    <span className="warranty_type_01">
                      {product.versionName}
                    </span>
                  </div>

                  <div className="version_variants">
                    <div className="input-radio-color__list">
                      {product.version?.map((attribute, index) => (
                        <>
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              this.handleValueChangeprops(dispatch, {
                                filter: "version",
                                value: attribute.id,
                              });
                              // this.handleChangeVersion(product, attribute);
                              this.setState({ version: attribute.id });
                            }}
                            className={
                              this.state.version === attribute.id
                                ? "btn btn-outline-primary ml-3 mb-2"
                                : "btn btn-outline-secondary ml-3 mb-2"
                            }
                          >
                            {attribute.name}
                          </button>
                        </>
                      ))}
                    </div>
                  </div>

                  <div
                    className={
                      product.memory && product.memory.length
                        ? "form-group product__option mt-2"
                        : "d-none"
                    }
                  >
                    <div className="product__option-label mt-2 mb-3">
                      <span className="product_card_left_text">
                        {" "}
                        Internal Memory:{" "}
                      </span>
                      <span className="warranty_type_01">
                        {product.memoryName}
                      </span>
                    </div>
                    <div className="input-radio-label">
                      <div className="input-radio-label__list">
                        {product.memory?.map((attribute, index) => (
                          <label key={index}>
                            <input
                              type="radio"
                              name="material"
                              checked={attribute.id === product.memoryId}
                              onClick={() => {
                                // console.log(attribute,"memory")
                                this.handleValueChangeprops(dispatch, {
                                  filter: "internal_memory",
                                  value: attribute.id,
                                });
                              }}
                            />
                            <span>{attribute.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* color  */}
                  <div className="product__option-label mt-2 mb-3">
                    <span className="product_card_left_text"> Color: </span>
                    <span className="warranty_type_01">
                      {product.colorName}
                    </span>
                  </div>
                  <div className="input-radio-color">
                    <div className="input-radio-color__list">
                      {product.colorList?.map((attribute, index) => (
                        <>
                          <img
                            name="color"
                            checked={attribute.id === product.ColorDetail.id}
                            onClick={() =>
                              this.handleValueChangeprops(dispatch, {
                                filter: "color",
                                value: attribute.id,
                              })
                            }
                            src={attribute.thumbnail}
                            height="75px"
                            width="75px"
                            style={{
                              padding: "3px",
                              border: `${
                                attribute.id === product.ColorDetail.id
                                  ? "1px solid blue"
                                  : "rgb( 1px solid  240 237 237)"
                              }`,
                            }}
                          />
                        </>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-group product__option">
                  <div className="product__actions">
                    <div className="product__actions-item product__actions-item--addtocart">
                      <AsyncAction
                        action={() => cartAddItem(product, [], quantity)}
                        render={({ run, loading }) => (
                          <Button
                            outline
                            color="info"
                            onClick={run}
                            disabled={!quantity}
                            className={classNames("btn  btn-lg", {
                              "btn-loading": loading,
                            })}
                          >
                            <i
                              className="fa fa-shopping-bag"
                              aria-hidden="true"
                            ></i>{" "}
                            Add to cart
                          </Button>
                        )}
                      />
                    </div>
                    <div className="product__actions-item product__actions-item--addtocart">
                      <AsyncAction
                        action={() => cartBuyItem(product, [], quantity)}
                        render={({ run, loading }) => (
                          <Button
                            variant="contained"
                            color="success"
                            onClick={run}
                            disabled={!quantity}
                            className={classNames("btn  btn-lg", {
                              "btn-loading": loading,
                            })}
                          >
                            Buy Now
                          </Button>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-3 card  p-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div>
                  <img
                    src="https://f.nooncdn.com/s/app/com/noon/icons/free_returns_usp.svg"
                    alt="free_returns_usp"
                    width="35px"
                    height="35px"
                  />
                  {product.WarrantyType?.name}
                </div>
              </li>
              <li className="list-group-item">
                <img
                  src="https://f.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                  alt="free_returns_usp"
                  width="35px"
                  height="35px"
                />
                {product.WarrantyPeriod?.name}
              </li>
              <li className="list-group-item">
                <img
                  src="https://f.nooncdn.com/s/app/com/noon/icons/seller.svg"
                  alt="free_returns_usp"
                  width="35px"
                  height="35px"
                />
                <span>
                  Sold by <b>{product.SoldBy}</b>
                </span>
              </li>
            </ul>
            <hr />
            <div className="row">
              <div className="col-sm-5">
                <div className="col text-center">
                  <img
                    className="pb-2"
                    src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                    alt="free_returns_usp"
                    width="30px"
                    height="35px"
                  />
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: "0.75em",
                      marginBottom: 3,
                    }}
                  >
                    Low Return Seller
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="col text-center">
                  <img
                    className="pb-2"
                    src="https://z.nooncdn.com/nr/seller_badges/badge_low_returns_seller.png"
                    alt="free_returns_usp"
                    width="30px"
                    height="35px"
                  />
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: "0.75em",
                      marginBottom: 3,
                    }}
                  >
                    Great Recent Rating
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <div
                className="pb-3"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexDirection: "row",
                }}
              >
                <img
                  src="https://f.nooncdn.com/s/app/com/noon/icons/warranty.svg"
                  alt="free_returns_usp"
                  width="35px"
                  height="35px"
                />
                <div>
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: "0.75em",
                      marginBottom: 3,
                    }}
                  >
                    {" "}
                    FREE RETURNS
                  </p>
                  <h6
                    className="text-secondary"
                    style={{
                      fontWeight: 400,
                      fontSize: "0.65em",
                      marginBottom: 3,
                    }}
                  >
                    {" "}
                    Get free returns on eligible items
                  </h6>
                </div>
              </div>
              <div>
                <div
                  className="pb-3"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src="https://f.nooncdn.com/s/app/com/noon/icons/trusted_shipping_usp_v2.svg"
                    alt="free_returns_usp"
                    width="35px"
                    height="35px"
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "0.75em",
                        marginBottom: 3,
                      }}
                    >
                      {" "}
                      FREE RETURNS
                    </p>
                    <h6
                      className="text-secondary"
                      style={{
                        fontWeight: 400,
                        fontSize: "0.75em",
                        marginBottom: 3,
                      }}
                    >
                      {" "}
                      Get free returns on eligible items
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="pb-2"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src="https://f.nooncdn.com/s/app/com/noon/icons/contactless_delivery_usp.svg"
                    alt="free_returns_usp"
                    width="35px"
                    height="35px"
                  />
                  <div>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "0.75em",
                        marginBottom: 3,
                      }}
                    >
                      {" "}
                      FREE RETURNS
                    </p>
                    <h6
                      className="text-secondary"
                      style={{
                        fontWeight: 400,
                        fontSize: "0.65em",
                        marginBottom: 3,
                      }}
                    >
                      {" "}
                      Get free returns on eligible items
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductDesktop.propTypes = {
  /** product object */
  ProductDesktop: PropTypes.object.isRequired,
  /** one of ['standard', 'sidebar', 'columnar', 'quickview'] (default: 'standard') */
  layout: PropTypes.oneOf(["standard", "sidebar", "columnar", "quickview"]),
};

ProductDesktop.defaultProps = {
  layout: "standard",
};

const mapDispatchToProps = {
  cartAddItem,
  wishlistAddItem,
  compareAddItem,
  cartBuyItem,
};

export default withRouter(
  connect(() => ({}), mapDispatchToProps)(ProductDesktop)
);
