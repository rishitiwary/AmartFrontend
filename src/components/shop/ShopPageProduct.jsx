// react
import React, { useEffect, useReducer, useState } from "react";

// third-party
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

// application
import PageHeader from "../shared/PageHeader";
import Product from "../shared/Product";
import ProductTabs from "./ProductTabs";
import shopApi from "../../api/shop";
import { url, getCategoryParents } from "../../workflow/utils";
import queryString from "query-string";
import { connect } from "react-redux";

// blocks
import BlockLoader from "../blocks/BlockLoader";
import BlockProductsCarousel from "../blocks/BlockProductsCarousel";

// widgets
import WidgetCategories from "../widgets/WidgetCategories";
import WidgetProducts from "../widgets/WidgetProducts";

// data stubs
import categories from "../../data/shopWidgetCategories";
import ProductDesktop from "../shared/ProductDesktop";
// import theme from "../../data/theme";

// redux part

function parseQueryOptions(location) {
  const query = queryString.parse(location);
  const optionValues = {};

  if (typeof query.page === "string") {
    optionValues.page = parseFloat(query.page);
  }
  if (typeof query.limit === "string") {
    optionValues.limit = parseFloat(query.limit);
  }
  if (typeof query.sort === "string") {
    optionValues.sort = query.sort;
  }

  return optionValues;
}

function parseQueryFilters(location) {
  const query = queryString.parse(location);
  const filterValues = {};

  Object.keys(query).forEach((param) => {
    const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);

    if (!mr) {
      return;
    }

    const filterSlug = mr[1];

    filterValues[filterSlug] = query[param];
  });

  return filterValues;
}

function parseQuery(location) {
  return [parseQueryOptions(location), parseQueryFilters(location)];
}

function buildQuery(options, filters) {
  const params = {};

  if (options.page !== 1) {
    params.page = options.page;
  }

  if (options.limit !== 12) {
    params.limit = options.limit;
  }

  if (options.sort !== "default") {
    params.sort = options.sort;
  }

  Object.keys(filters)
    .filter((x) => x !== "category" && !!filters[x])
    .forEach((filterSlug) => {
      params[`filter_${filterSlug}`] = filters[filterSlug];
    });

  return queryString.stringify(params, { encode: false });
}

const initialState = {
  init: false,
  /**
   * Indicates that the category is loading.
   */
  categoryIsLoading: true,
  /**
   * Category object.
   */
  category: null,
  /**
   * Indicates that the products list is loading.
   */
  productsListIsLoading: true,
  /**
   * Products list.
   */
  productsList: null,
  /**
   * Products list options.
   *
   * options.page:  number - Current page.
   * options.limit: number - Items per page.
   * options.sort:  string - Sort algorithm.
   */
  options: {},
  /**
   * Products list filters.
   *
   * filters[FILTER_SLUG]: string - filter value.
   */
  filters: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_CATEGORY_SUCCESS":
      return {
        ...state,
        init: true,
        categoryIsLoading: false,
        category: action.category,
      };
    case "FETCH_PRODUCTS_LIST":
      return { ...state, productsListIsLoading: true };
    case "FETCH_PRODUCTS_LIST_SUCCESS":
      return {
        ...state,
        productsListIsLoading: false,
        productsList: action.productsList,
      };
    case "SET_OPTION_VALUE":
      return {
        ...state,
        options: { ...state.options, page: 1, [action.option]: action.value },
      };
    case "SET_FILTER_VALUE":
      console.log(state, "state SET_FILTER_VALUE");
      return {
        ...state,
        options: { ...state.options, page: 1 },
        filters: { ...state.filters, [action.filter]: action.value },
      };
    case "RESET_FILTERS":
      return { ...state, options: { ...state.options, page: 1 }, filters: {} };
    case "RESET":
      return state.init ? initialState : state;
    default:
      throw new Error();
  }
}

function init(state) {
  const [options, filters] = parseQuery(window.location.search);
  // console.log(state,":...stat")
  return { ...state, options, filters };
}

function ShopPageProduct(props) {
  const { ProductId, productSlug, layout, sidebarPosition } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  // check mobile

  // console.log(state,"state")

  // console.log(ProductId, productSlug,"state")

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  // Replace current url.
  useEffect(() => {
    console.log(window.location.pathname, "window.location.pathname");
    const query = buildQuery(state.options, state.filters);
    const location = `${window.location.pathname}${query ? "?" : ""}${query}`;

    window.history.replaceState(null, "", location);
  }, [state.options, state.filters]);

  // Load products.
  const nextCall = () => {
    let canceled = false;
    dispatch({ type: "FETCH_PRODUCTS_LIST" });
    shopApi
      .getProductsList(state.options, {
        ...state.filters,
        category: productSlug,
      })
      .then((productsList) => {
        if (canceled) {
          return;
        }
        dispatch({ type: "FETCH_PRODUCTS_LIST_SUCCESS", productsList });
      });

    return () => {
      canceled = true;
    };
  };

  useEffect(() => {
    nextCall();
  }, [dispatch, productSlug, state.options, state.filters]);

  // Load product.
  useEffect(() => {
    let canceled = false;
    setIsLoading(true);
    shopApi
      .getProductBySlug(ProductId, productSlug, state.filters)
      .then((product) => {
        if (canceled) {
          return;
        }
        setProduct(product.data);
        setIsLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [state, ProductId, productSlug, setIsLoading]);
  useEffect(() => {
    let canceled = false;

    shopApi.getRelatedProducts(ProductId, productSlug).then((products) => {
      if (canceled) {
        return;
      }

      setRelatedProducts(products.data);
    });

    return () => {
      canceled = true;
    };
  }, [ProductId, productSlug, state, setRelatedProducts]);

  if (isLoading) {
    return <BlockLoader />;
  }
  const breadcrumb = [
    { title: "Home", url: url.home() },
    { title: "Shop", url: url.catalog() },
    { title: product.Name, url: url.product(product.Name) },
  ];

  let content;
  if (layout === "sidebar") {
    const sidebar = (
      <div className="shop-layout__sidebar">
        <div className="block block-sidebar">
          <div className="block-sidebar__item">
            <WidgetCategories categories={categories} location="shop" />
          </div>
          <div className="block-sidebar__item d-none d-lg-block">
            <WidgetProducts title="Latest Products" products={latestProducts} />
          </div>
        </div>
      </div>
    );

    content = (
      <div className="container-fluid">
        <div className={`shop-layout shop-layout--sidebar--${sidebarPosition}`}>
          {sidebarPosition === "start" && sidebar}
          <div className=" shop-layout__content">
            <div className=" block">
              <Product product={product} layout={layout} />
              <ProductTabs withSidebar product={product} />
            </div>

            {relatedProducts.length > 0 && (
              <BlockProductsCarousel
                title="Related Products"
                layout="grid-4-sm"
                products={relatedProducts}
                withSidebar
              />
            )}
          </div>
          {sidebarPosition === "end" && sidebar}
        </div>
      </div>
    );
  } else {
    content = (
      <React.Fragment>
        <div className="block">
          <div className="container-fluid">
            {/* mobile product details view  &&  Desktop product details view  */}
            {isMobile ? (
              <Product
                product={product}
                layout={layout}
                // filters={state?.category.data}
                values={state?.filters}
                dispatch={dispatch}
              />
            ) : (
              <ProductDesktop
                // filters={state?.category.data}
                values={state?.filters}
                dispatch={dispatch}
                product={product}
                layout={layout}
              />
            )}
            {/* mobile product details view  &&  Desktop product details view   end */}

            <ProductTabs product={product} />
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <BlockProductsCarousel
            title="Related Products"
            layout="grid-5"
            products={relatedProducts}
          />
        )}
      </React.Fragment>
    );
  }

  const { seoList } = product;
  return (
    <React.Fragment>
      <Helmet>
        <title>{seoList ? seoList.title : ""}</title>
        <meta
          name="og_title"
          property="og:title"
          content={seoList ? seoList.title : ""}
        ></meta>
        <meta name="Description" content={seoList ? seoList.desc : ""} />
        <meta
          property="og:description"
          content={seoList ? seoList.desc : ""}
        ></meta>
        <meta name="keyword" content={seoList ? seoList.keyword : ""}></meta>
        <link rel="canonical" href={window.location.href} />
        <meta
          name="og_image"
          property="og:image"
          content={product.Thumbnail}
        ></meta>
        <meta
          name="og_url"
          property="og:url"
          content={window.location.href}
        ></meta>
        <meta
          data-react-helmet="true"
          name="og:url"
          property="og:url"
          content="https://www.chitwashop.com"
        />
      </Helmet>

      <PageHeader breadcrumb={breadcrumb} />

      {content}
    </React.Fragment>
  );
}

ShopPageProduct.propTypes = {
  /** Product slug. */
  productSlug: PropTypes.string,
  /** one of ['standard', 'sidebar', 'columnar', 'quickview'] (default: 'standard') */
  layout: PropTypes.oneOf(["standard", "sidebar", "columnar", "quickview"]),
  /**
   * sidebar position (default: 'start')
   * one of ['start', 'end']
   * for LTR scripts "start" is "left" and "end" is "right"
   */
  sidebarPosition: PropTypes.oneOf(["start", "end"]),
};

ShopPageProduct.defaultProps = {
  layout: "standard",
  sidebarPosition: "start",
};

const mapStateToProps = (state) => ({
  sidebarState: state.sidebar,
  page: state.category,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPageProduct);
