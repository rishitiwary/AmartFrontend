import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import classes from "./BlockRoundSlider.module.css";
import { ArrowRoundedLeft6x9Svg, ArrowRoundedRight6x9Svg } from "../../svg";
import shopApi from "../../api/shop";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classes.slickArrow}
      style={{ left: "auto", right: "8px" }}
      onClick={onClick}
    >
      <ArrowRoundedRight6x9Svg />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      // className="block-header__arrow block-header__arrow--left"
      // type="button"

      className={classes.slickArrow}
      // style={{  display: "block",left:"auto", background: "green",left:"8px" }}
      onClick={onClick}
    >
      <ArrowRoundedLeft6x9Svg />
    </button>
  );
}

export default class BlockRoundSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    shopApi.getCategories({ depth: 1 }).then((categories) => {
      this.setState({ categories: categories.data });
    });
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3.4,
            slidesToScroll: 3,
          },
        },
      ],
    };

    // const categories = useCategories();

    // console.log(this.state.categories,"categories")
    let { categories } = this.state;
    return (
      <div className="pt-4 pb-4 container-fluid bg-white">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {categories &&
            categories.map((categoriesele) => (
              <div className={`bg-white ${classes.item}`}>
                <div className={classes.categoryItem}>
                  <Link to={`/shop/catalog/${categoriesele.slug}`}>
                    <img
                      className={classes.categoryImg}
                      src={categoriesele.thumbnail}
                      alt="grocery-stamples"
                    />
                    <h5 className="text-black ">{categoriesele.name}</h5>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
