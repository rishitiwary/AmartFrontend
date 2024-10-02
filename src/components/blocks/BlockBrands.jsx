// react
import React, { useState, useEffect } from "react";

// third-party
import { Link } from "react-router-dom";

// application
import StroykaSlick from "../shared/StroykaSlick";
import { GetLocationDetail } from "../../services";

const slickSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function BlockBrands() {
  const [brands, setOrderBrand] = useState([]);
  useEffect(async () => {
    let canceled = false;
    const list = await GetLocationDetail.getBrandList();
    if (list.status == 200) {
      setOrderBrand(list.data);
      return () => {
        canceled = true;
      };
    }
  }, []);
  const brandsList = brands.map((brand, index) => (
    <div key={index} className="block-brands__item">
      <Link to={`/shop/catalog/${brand.slug}`}>
        <img src={brand.thumbnail} alt={brand.name} />
      </Link>
    </div>
  ));

  return (
    <div className="block block-brands bg-white p-4">
      <div className="container-fluid">
        <div class="block-header">
          <h3 class="block-header__title">Top Brands</h3>
          <div class="block-header__divider"></div>
        </div>
        <div className="block-brands__slider">
          <StroykaSlick {...slickSettings}>{brandsList}</StroykaSlick>
        </div>
      </div>
    </div>
  );
}
