import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import classes from "./BlockSquarSlider.module.css"
import { ArrowRoundedLeft6x9Svg, ArrowRoundedRight6x9Svg } from '../../svg';
import BlockHeader from '../shared/BlockHeader';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={classes.slickArrow}
        style={{ left:"auto",right:"8px" }}
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


export default class BlockSquarSlider extends Component {
    

    

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 9,
            slidesToScroll: 2,
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
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2.5,
                        slidesToScroll: 3
                    }
                },
               
            ]
        };


        
        return (
            <div className='block' style={{ background: '#fff' }}>
                <div className="container-fluid" style={{
                    padding: "0px 15px"
                }}>
                    <BlockHeader 
                               title={"Home Kitchen Super Deals"}
                            //    groups={groups}
                            //    arrows
                            //    onNext={this.handleNextClick}
                            //    onPrev={this.handlePrevClick}
                            //    onGroupClick={onGroupClick}
                    
                    />
                    <Slider ref={c => (this.slider = c)} {...settings} >
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-01.png" alt="grocery-stamples" />
                                    {/* <h6>Grocery &amp; Staples</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-02.png" alt="personalcare" />
                                    {/* <h6>Personal Care</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-04.png" alt="household-imtes" />
                                    {/* <h6>Household Needs</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link
                                // to={{
                                //     pathname: `/shop/home-kitchen`,
                                // }}
                                >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-05.png" alt="kitchen" />
                                    {/* <h6>Home &amp; Kitchen</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link
                                // to={{
                                //     pathname: `/shop/beverages`,
                                // }}
                                >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-07.png" alt="beverages" />
                                    {/* <h6>Beverages</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link to={{
                                    pathname: `/shop/breakfast-dairy`,
                                }}>
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-07.png" alt="breakfastdairy" />
                                    {/* <h6>Breakfast &amp; Dairy</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link to={{
                                    pathname: `/shop/biscuits-snacks-chocolates`,
                                }}>
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-07.png" alt="biscuits-snacks-chocklates" />
                                    {/* <h6>Biscuits, Snacks &amp; Chocolates</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link to={{
                                    pathname: `/shop/noodles-sauces-instant-food`,
                                }}>
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-07.png" alt="noodles" />
                                    {/* <h6>Noodles, Sauces &amp; Instant Food</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-08.png" alt="pet-care" />
                                    {/* <h6>Pet Care</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link to={{
                                    pathname: `/shop/baby-care`,
                                }}>
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220909/37813ff32da25be2f082e1a13bf6793c/en_home-sale-06.png" alt="baby-care" />
                                    {/* <h6>Baby Care</h6> */}
                                </Link>
                            </div>
                        </div>
                    </Slider >
                   
                </div>
            </div >
        )
    }
}
