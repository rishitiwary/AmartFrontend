import React, { useMemo, useEffect } from "react";
// third-party
import { Helmet } from "react-helmet-async";
import { GetUserLogin } from "../../services";
import { Hidden, Box } from "@mui/material";
// application
import shopApi from "../../api/shop";
import { useProductTabs } from "../../workflow/hooks";
import BottomBar from "../mobile/BottoBar";
import MobileCategory from "../mobile/MobileCategory";
// blocks
import BlockAppBanner from "../blocks/BlockAppBanner";
import BlockBrands from "../blocks/BlockBrands";
import BlockFeatures from "../blocks/BlockFeatures";
import BlockFlashSaleCarousel from "../blocks/BlockFlashSaleCarousel";
import BlockSlideShow from "../blocks/BlockSlideShow";
import BlockRoundSlider from "../blocks/BlockRoundSlider";
import BlockSquarSlider from "../blocks/BlockSquarSlider";
import BlockDealOfDay from "../blocks/BlockDealOfDay";
import BlockProductsCarousel from "../blocks/BlockProductsCarousel";
import BlockSlideShowSmall from "../blocks/BlockSlideShowSmall";
import BlockMultiSlideShow from "../blocks/BlockMultiSlider";
import BlockProductsfourSquare from "../blocks/BlockProductsfourSquare";
import BlockProductsThreeSquare from "../blocks/BlockProductsThreeSquare";
import BlockSingleBanner from "../blocks/BlockSingleBanner";
import {BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function HomePageOneBackup(props) {
  const flashSaleProducts = useProductTabs(
    useMemo(() => [{ id: 1, categorySlug: "flash-sale" }], []),
    (tab) => shopApi.getFlashSaleProducts({ category: tab.categorySlug })
  );
  const latestProducts = useProductTabs(
    useMemo(() => [{ id: 1, name: "All", categorySlug: undefined }], []),
    (tab) => shopApi.getLatestProducts({ limit: 8 })
  );
  const featuredProducts = useProductTabs(
    useMemo(
      () => [
        { id: 1, name: "All", categorySlug: "mobile-phone" },
        // { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
      ],
      []
    ),
    (tab) =>
      shopApi.getPopularProducts({ limit: 8, category: tab.categorySlug })
  );
  useEffect(() => {
    try {
      const queryString = props.location.search;
      const token = queryString.split("token=")[1].split("&")[0];
      const email = queryString.split("email=")[1].split("&")[0];
      if (token && email) {
        GetUserLogin.authenticate(token, email, true);
      }
    } catch (err) {}
  }, []);
  return (
    <React.Fragment>
      {window.location.host !== "www.ashamarts.com" ? (
        ""
      ) : (
        <Helmet>
          {/* <title>{`Home Page One — ${theme.name}`}</title> */}
          <meta charSet="utf-8" />
          <title>
            Online shopping in, India | Online store in India | ashamart
          </title>
          <meta
            name="og_title"
            property="og:title"
            content="Online shopping in, India | Online store in India | ashamart"
          ></meta>
          <meta name="robots" content="max-image-preview:large"></meta>
          <meta
            name="description"
            content="ashamart: The Best Online Shopping Platform in India. Get Free Delivery and Best Deals & Offers in Jankpur,Jaleswar,Bardibas. India's Biggest online store. Buy Online in India,Online Shopping : Choose from a wide range of market, baby care products, personal care products, fresh fruits &amp; vegetables online. Pay Online &amp; Avail exclusive discounts on various products @ India Best Online Grocery store. ✔ Best Prices &amp; Offers ✔ Cash on Delivery ✔ Easy Returns"
          ></meta>
          <meta
            property="og:description"
            content="ashamart: The Best Online Shopping Platform in India. Get Free Delivery and Best Deals & Offers in Jankpur,Jaleswar,Bardibas. India's Biggest online store. Buy Online in India,Online Shopping : Choose from a wide range of market, baby care products, personal care products, fresh fruits &amp; vegetables online. Pay Online &amp; Avail exclusive discounts on various products @ India Best Online Grocery store. ✔ Best Prices &amp; Offers ✔ Cash on Delivery ✔ Easy Returns"
          ></meta>
          <meta
            name="keyword"
            content="ashamart,online shopping,online shopping,online market Kathmandu,online shopping India, online shopping, online store,online supermarket,cloth India,grocery pune, online home and kitchen shopping India,Men's wear, Women's Shopping in India. Summer wears, Wedding Dresses, Gifts, Offers and Deals in India, food shopping online,Online Grocery dhangadhi, online grocery Jaleswar"
          ></meta>
          <link rel="canonical" href={window.location.href} />
          <meta
            data-react-helmet="true"
            name="og:url"
            property="og:url"
            content="https://www.ashamart.com"
          />
        </Helmet>
      )}


{/* 
.......................................................................................................
...................................Desktop view.........................................................
....................................................................................................... 
*/}

<BrowserView>
{/* 1: SLIDING BANNER (AUTO SLIDE) */}

<BlockSlideShow />


{/* ---------------------------------1---------------------------------------------- */}

{/*  2: CATEGORY SLIDER (NO AUTO SLIDE) & for now only 6 category we want to show  (round slider) */}

{useMemo(
        () => (
            <BlockRoundSlider
              layout="horizontal"
              rows={1}
              products={latestProducts.data.data?.items}
              loading={latestProducts.isLoading}
              groups={latestProducts.tabs}
              onGroupClick={latestProducts.handleTabChange}
            />
        ),
        []
      )}


{/* -------------------------------------2------------------------------------------ */}



{/* 3:  Flash sales  */}



{useMemo(
        () => (
          <BlockFlashSaleCarousel
            title="Flash Sale"
            layout="grid-5"
            products={flashSaleProducts.data?.data}
            loading={flashSaleProducts.isLoading}
            groups={flashSaleProducts.tabs}
            onGroupClick={flashSaleProducts.handleTabChange}
          />
        ),
        [flashSaleProducts]
      )}

{/* -------------------------------------2------------------------------------------ */}



{/* 3:  PRE-OWNED PRODUCTS  */}


{useMemo(
        () => (
          <BlockProductsCarousel
            title="Smart Phone"
            layout="grid-5"
            products={latestProducts.data.data?.items}
            loading={featuredProducts.isLoading}
            groups={featuredProducts.tabs}
            onGroupClick={featuredProducts.handleTabChange}
          />
        ),
        [featuredProducts]
      )}


{/* ------------------------------------3------------------------------------------- */}


{/* 4: SHOP BY BRAND */}


<Box sx={{ display: { xs: "none", sm: "block" } }}>
        {useMemo(
          () => (
            <BlockBrands />
          ),
          []
        )}
      </Box>



{/* -----------------------------------4-------------------------------------------- */}

{/* 5:  BRAND NEW PRODUCTS */}


{useMemo(
        () => (
          <BlockProductsCarousel
            title="New Arrivals"
            layout="grid-5"
            products={latestProducts.data.data?.items}
            loading={latestProducts.isLoading}
            groups={latestProducts.tabs}
            onGroupClick={latestProducts.handleTabChange}
          />
        ),
        [latestProducts]
      )}



{/* ----------------------------------5--------------------------------------------- */}

{/* 6:  SLIDING BANNER (LESS HEIGHT)  single banner */}


{useMemo(
        () => (
         
            <BlockAppBanner
              layout="horizontal"
              rows={1}
              products={latestProducts.data.data?.items}
              loading={latestProducts.isLoading}
              groups={latestProducts.tabs}
              onGroupClick={latestProducts.handleTabChange}
            />
      
        ),
        []
      )}


{/* ------------------------------------6------------------------------------------- */}

{/* 7:  CATEGORY BANNER 1 CATEGORY BANNER 2 CATEGORY BANNER 3  */}

{useMemo(
        () => (
     
            <BlockDealOfDay
              layout="horizontal"
              rows={1}
              products={latestProducts.data.data?.items}
              loading={latestProducts.isLoading}
              groups={latestProducts.tabs}
              onGroupClick={latestProducts.handleTabChange}
            />

        ),
        []
      )}


{/* --------------------------------------7----------------------------------------- */}

{/* 8: TRNDING PRODUCTS  */}


{useMemo(
        () => (
          <BlockProductsCarousel
            title="Trending Products"
            layout="grid-5"
            products={latestProducts.data.data?.items}
            loading={featuredProducts.isLoading}
            groups={featuredProducts.tabs}
            onGroupClick={featuredProducts.handleTabChange}
          />
        ),
        [featuredProducts]
      )}

</BrowserView>

{/* --------------------------------------8----------------------------------------- */}




{/* 
.......................................................................................................
...................................Desktop view  end.........................................................
....................................................................................................... 
*/}








{/* 
.......................................................................................................
...................................mobile view.........................................................
....................................................................................................... 
*/}


<MobileView>

{/* 1: SLIDING BANNER (AUTO SLIDE) */}

<BlockSlideShow />


{/* ---------------------------------1---------------------------------------------- */}

{/*  2: Popular category */}

{useMemo(
        () => (
          <MobileCategory />
        ),
        []
      )}


{/* -------------------------------------2------------------------------------------ */}

{/* 3:  Flash sales  */}



{useMemo(
        () => (
          <BlockFlashSaleCarousel
            title="Flash Sale"
            layout="grid-5"
            products={flashSaleProducts.data?.data}
            loading={flashSaleProducts.isLoading}
            groups={flashSaleProducts.tabs}
            onGroupClick={flashSaleProducts.handleTabChange}
          />
        ),
        [flashSaleProducts]
      )}

{/* ------------------------------------3------------------------------------------- */}


{/* 4: Hots Deals */}


<BlockProductsfourSquare
        title="HOTS DEALS"
        layout="grid-5"
        products={latestProducts.data.data?.items}
        loading={latestProducts.isLoading}
        groups={latestProducts.tabs}
        onGroupClick={latestProducts.handleTabChange}
      />



{/* -----------------------------------4-------------------------------------------- */}

{/* 3 square  */}

<BlockProductsThreeSquare />


{/* -----------------------------------4-------------------------------------------- */}

{/* single bannder   */}
<BlockSingleBanner />


{/* 6:  smart phone */}


{useMemo(
        () => (
          <BlockProductsCarousel
            title="Smart Phone"
            layout="grid-5"
            products={latestProducts.data.data?.items}
            loading={featuredProducts.isLoading}
            groups={featuredProducts.tabs}
            onGroupClick={featuredProducts.handleTabChange}
          />
        ),
        [featuredProducts]
      )}

{/* ------------------------------------6------------------------------------------- */}

{/* 7:  Trending Products  */}

{useMemo(
        () => (
          <BlockProductsCarousel
            title="Trending Products"
            layout="grid-5"
            products={latestProducts.data.data?.items}
            loading={featuredProducts.isLoading}
            groups={featuredProducts.tabs}
            onGroupClick={featuredProducts.handleTabChange}
          />
        ),
        [featuredProducts]
      )}



{/* --------------------------------------7----------------------------------------- */}

{/* 8: New arrivals  */}



{useMemo(
        () => (
          <BlockProductsCarousel
            title="New Arrivals"
            layout="grid-5"
            products={latestProducts.data.data?.items}
            loading={latestProducts.isLoading}
            groups={latestProducts.tabs}
            onGroupClick={latestProducts.handleTabChange}
          />
        ),
        [latestProducts]
      )}



{/* --------------------------------------8----------------------------------------- */}



</MobileView>

{/* 
.......................................................................................................
...................................mobile view  end.........................................................
....................................................................................................... 
*/}









      <BottomBar />
    </React.Fragment>
  );
}

export default HomePageOneBackup;
