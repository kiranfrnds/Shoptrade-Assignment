import React from "react";
import Slider from "react-slick";

const Carousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
    arrows: true,

    customPaging: (i) => <div className="custom-dots__item"></div>,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="../Assets/images/desktop banner 1.jpg"
          alt="banner"
          className="slider-iamge"
        />
      </div>
      <div>
        <img
          src="../Assets/images/desktop banner 2.jpg"
          alt="banner"
          className="slider-iamge"
        />
      </div>
      <div>
        <img
          src="../Assets/images/desktop banner 3.jpg"
          alt="banner"
          className="slider-iamge"
        />
      </div>
    </Slider>
  );
};

export default Carousal;
