import React from "react";
import Slider from "react-slick";

const CollectionCarousal = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
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
  return (
    <div>
      <h2 className="collections"> Our Collection </h2>
      <Slider {...settings}>
        <div>
          <img
            src="../Assets/images/scroll image 1.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 2.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 3.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 4.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 5.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 6.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 7.jpg"
            className="image"
            alt="collection"
          />
        </div>
        <div>
          <img
            src="../Assets/images/scroll image 8.jpg"
            className="image"
            alt="collection"
          />
        </div>
      </Slider>
    </div>
  );
};

export default CollectionCarousal;
