import React from "react";
import Slider from "react-slick";
import BestBuy from "@/images/brands/best-buy.png";
import HighMark from "@/images/brands/highmark.png";
import Jpmorgan from "@/images/brands/jpmorgan.png";
import Pfizer from "@/images/brands/pfizer.png";
import SonyMusic from "@/images/brands/sony-music.png";
import Weightwatchers from "@/images/brands/weightwatchers.png";
import Image from "next/image";
import { Container } from "react-bootstrap";

const OurBrands = () => {
  var settings = {
    dots: false,
    arrows: false,
    swipeToSlide: false,
    swipe: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="slider_brand_container">
      <Slider {...settings}>
        <div>
          <Image src={BestBuy} alt="BestBuy" height={70} width={120} />
        </div>
        <div>
          <Image src={HighMark} alt="HighMark" height={90} width={120} />
        </div>
        <div>
          <Image src={Jpmorgan} alt="Jpmorgan" height={80} width={140} />
        </div>
        <div>
          <Image src={Pfizer} alt="Pfizer" height={90} width={120} />
        </div>
        <div>
          <Image src={SonyMusic} alt="SonyMusic" height={80} width={140} />
        </div>
        <div>
          <Image
            src={Weightwatchers}
            alt="Weightwatchers"
            height={90}
            width={140}
          />
        </div>
      </Slider>
    </Container>
  );
};

export default OurBrands;
