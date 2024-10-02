import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import classes from "./BlockSquarSliderExtraOffer.module.css"
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


export default class BlockSquarSliderExtraOffer extends Component {
    

    

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
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
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
                            //    title={"Home Kitchen Super Deals"}
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
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/ads/banner-442x442/en_dk_uae-sfb-01%20(25)%20(1).1662641881.3233657.png" alt="grocery-stamples" />
                                    {/* <h6>Grocery &amp; Staples</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/ads/banner-442x442/en_dk_uae-sfb-01%20(25)%20(1).1662641881.3233657.png" alt="personalcare" />
                                    {/* <h6>Personal Care</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220906/7445452c5745a7afb50fd8f1a4c01f32/en_dk_uae-sfb-03.png" alt="household-imtes" />
                                    {/* <h6>Household Needs</h6> */}
                                </Link>
                            </div>
                        </div>

                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/ads/banner-442x442/en_dk_uae-sfb-01%20(25)%20(1).1662641881.3233657.png" alt="grocery-stamples" />
                                    {/* <h6>Grocery &amp; Staples</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/ads/banner-442x442/en_dk_uae-sfb-01%20(25)%20(1).1662641881.3233657.png" alt="personalcare" />
                                    {/* <h6>Personal Care</h6> */}
                                </Link>
                            </div>
                        </div>
                        <div className={classes.item}>
                            <div className={classes.categoryItem}>
                                <Link >
                                    <img className={classes.categoryImg} src="https://f.nooncdn.com/cms/pages/20220906/7445452c5745a7afb50fd8f1a4c01f32/en_dk_uae-sfb-03.png" alt="household-imtes" />
                                    {/* <h6>Household Needs</h6> */}
                                </Link>
                            </div>
                        </div>
                       
                    </Slider >
                   
                </div>
            </div >
        )
    }
}
