// react
import React, { Component } from "react";
// third-party
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
// application
import { history } from "../../helpers/history";
import classes from "./BlockFocus.module.css"

import StroykaSlick from "../shared/StroykaSlick";
const slickSettings = {
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 4,
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
                slidesToScroll: 2,
                initialSlide: 2,
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

class BlockFocus extends Component {
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
        return (
            <div className={`${blockClasses} ${classes.FocusMainContainer}`} >
                <div className="container-fluid">
                    <div className="row">
                        <div className={layoutClasses}>
                            <StroykaSlick {...slickSettings}>
                                <Card
                                    className="m-1"
                                    onClick={() => {
                                        history.push("/shop/catalog/health-and-nutrition");
                                    }}
                                    
                                >
                                    <div className={classes.cardHeaderFocus}>
                                        <p>Focus</p>
                                    </div>
                                    <main className={classes.cardContainer}>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220906/ac64dd75d69fee451ed0015fe3902d65/en_dk_mega-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Up to 60% Up</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220905/5183768ca6aa5258951bb123637ce48f/en_dk_nt-uae-02.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 2</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220725/b4b2668a92145e8f890ce3c8da236a09/en_dk_nt-uae-03.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 3</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220817/35664fdf5a7ca6c0930f6b505e4f5883/en_dk_nt-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 4</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>

                                    </main>
                                </Card>
                                <Card
                                    className="m-1"
                                    onClick={() => {
                                        history.push("/shop/catalog/health-and-nutrition");
                                    }}
                                >
                                    <div className={classes.cardHeaderFocus}>
                                        <p>Focus</p>
                                    </div>
                                    <main className={classes.cardContainer}>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220906/ac64dd75d69fee451ed0015fe3902d65/en_dk_mega-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Up to 60% Up</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220905/5183768ca6aa5258951bb123637ce48f/en_dk_nt-uae-02.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 2</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220725/b4b2668a92145e8f890ce3c8da236a09/en_dk_nt-uae-03.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 3</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220817/35664fdf5a7ca6c0930f6b505e4f5883/en_dk_nt-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 4</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>

                                    </main>
                                </Card>
                                <Card
                                    className="m-1"
                                    onClick={() => {
                                        history.push("/shop/catalog/health-and-nutrition");
                                    }}
                                >
                                    <div className={classes.cardHeaderFocus}>
                                        <p>Mega Deals Of The Day</p>
                                    </div>
                                    <main className={classes.cardContainer}>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220906/ac64dd75d69fee451ed0015fe3902d65/en_dk_mega-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Up to 60% Up</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220905/5183768ca6aa5258951bb123637ce48f/en_dk_nt-uae-02.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 2</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220725/b4b2668a92145e8f890ce3c8da236a09/en_dk_nt-uae-03.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 3</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220817/35664fdf5a7ca6c0930f6b505e4f5883/en_dk_nt-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 4</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>

                                    </main>
                                </Card>
                                <Card
                                    className="m-1"
                                    onClick={() => {
                                        history.push("/shop/catalog/health-and-nutrition");
                                    }}
                                >
                                    <div className={classes.cardHeaderFocus}>
                                        <p>More reason to shop</p>
                                    </div>
                                    <main className={classes.cardContainer}>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220906/ac64dd75d69fee451ed0015fe3902d65/en_dk_mega-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Up to 60% Up</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220905/5183768ca6aa5258951bb123637ce48f/en_dk_nt-uae-02.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 2</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220725/b4b2668a92145e8f890ce3c8da236a09/en_dk_nt-uae-03.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 3</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>
                                        <section className={classes.cards}>
                                            <img className={classes.cardImg} src="https://f.nooncdn.com/cms/pages/20220817/35664fdf5a7ca6c0930f6b505e4f5883/en_dk_nt-uae-01.png" alt="sample image" />
                                            <div className="texts">
                                                {/* <h5>Example 4</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}

                                            </div>
                                        </section>

                                    </main>
                                </Card>
                            </StroykaSlick>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BlockFocus.propTypes = {
    withDepartments: PropTypes.bool,
    /** current locale */
    locale: PropTypes.string,
};

BlockFocus.defaultProps = {
    withDepartments: false,
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

export default connect(mapStateToProps)(BlockFocus);
