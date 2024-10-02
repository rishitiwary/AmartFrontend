// react
import React, { Component } from "react";
// third-party
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CardMedia from "@mui/material/CardMedia";
// application
import { history } from "../../helpers/history";
import "./BlockMultiSlideShow.css";
import shopApi from "../../api/shop";

import StroykaSlick from "../shared/StroykaSlick";
import BlockHeader from "../shared/BlockHeader";
import Paper from "@mui/material/Paper";

const slickSettings = {
  arrows: false,
  dots: true,
  autoplay: true,
  infinite: false,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class BlockMultiSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  getBannerList() {
    let canceled = false;
    shopApi.getBannerList({ depth: 1, type: "2" }).then((list) => {
      if (canceled) {
        return;
      }
      this.setState({ slides: list.data });
    });
    return () => {
      canceled = true;
    };
  }
  componentDidMount() {
    this.getBannerList();
  }
  render() {
    const { withDepartments } = this.props;
    const blockClasses = classNames("block-slideshow block", {
      "block-slideshow--layout--full": !withDepartments,
      "block-slideshow--layout--with-departments": withDepartments,
    });

    const layoutClasses = classNames("col-12", {
      "col-lg-12": !withDepartments,
      "col-lg-9": withDepartments,
    });
    const slides = this.state.slides.map((slide, index) => {
      return (
        <Paper elevation={3}>
          <div
            onClick={() => {
              history.push("/shop/catalog/health-and-nutrition");
            }}
            key={index}
            // style={{     boxShadow: " 0 10px 10px rgba(0, 0, 0, 0.2)",
            // transition: "0.3s"}}
          >
            <CardMedia
              component="img"
              alt="food-suppliment"
              image={slide.banner}
            />
          </div>
        </Paper>
      );
    });
    return (
      <div className={blockClasses}>
        <div className="container-fluid bg-white">
          <div className="row">
            <div className={layoutClasses}>
              <BlockHeader title={"Deals Of The Day"} />
              <StroykaSlick {...slickSettings}>{slides}</StroykaSlick>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlockMultiSlider.propTypes = {
  withDepartments: PropTypes.bool,
  /** current locale */
  locale: PropTypes.string,
};

BlockMultiSlider.defaultProps = {
  withDepartments: false,
};

const mapStateToProps = (state) => ({
  locale: state.locale,
});

export default connect(mapStateToProps)(BlockMultiSlider);
