import { Button, Container, Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const Product = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ margin: "20px" }}>
        <Grid item xs={12} md={6}>
          <div className="product-image-container">
            <Slider {...settings}>
              <img
                src="../Assets/images/product image 1.jpg"
                className="product-image"
                alt="product"
              />
              <img
                src="../Assets/images/product image 2.jpg"
                className="product-image"
                alt="product"
              />
              <img
                src="../Assets/images/product image 3.jpg"
                className="product-image"
                alt="product"
              />
              <img
                src="../Assets/images/product image 4.jpg"
                className="product-image"
                alt="product"
              />
              <img
                src="../Assets/images/product image 5.jpg"
                className="product-image"
                alt="product"
              />
            </Slider>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="product-info-container">
            <StarIcon className="stars" />
            <StarIcon className="stars" />
            <StarIcon className="stars" />
            <StarIcon className="stars" />
            <StarIcon className="stars" />

            <p className="rating-point">4.8 (58)</p>
            <p className="review-paragraph">Write a review</p>
          </div>
          <Grid item xs={12}>
            <div>
              <h2 className="product-info-heading">Superfood Cleanser</h2>
              <p className="product-info-description">
                The powerful, but gentle daily face wash is formulated with
                superfood antioxidants from kale, spinach, and green tea - to
                give your skin the ultimate cleanse.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="price-container">
              <h3 className="mrp-price">$30.00</h3>
              <h3 className="mrp-price offer-price">$30.00</h3>
              <h3 className="mrp-price offer-disscount">50% OFF</h3>
            </div>
          </Grid>
          <Grid item xs={12}>
            <input type="text" className="icon" mt="10px" value={1} />
            <select className="icon">
              <option value="1">30ML / 1 FL OZ</option>
              <option value="2"> 60ML / 2 FL OZ</option>
              <option value="3"> 90ML / 3.5 FL OZ</option>
            </select>
          </Grid>
          <Grid item xs={12} mt="10px">
            <select className="icon-2 icon">
              <option value="1">ONE TIME</option>
            </select>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3E583F",
                color: "#FFFFFF",
                fontFamily: "Proxima Nova",
                fontWeight: "500",
                fontSize: "20px",
                width: "100%",
                mt: "10px",
                "&:hover": {
                  backgroundColor: "#5E8760",
                },
              }}
            >
              <AddIcon />
              Add to Cart
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p>
              <CheckIcon sx={{ marginRight: "10px" }} />
              Pickup available at{" "}
              <span className="address">5863 Ave du Parc</span> Usually ready in
              24 hours
            </p>
          </Grid>
          <Grid item xs={12}>
            <h3 className="view-details">View Details</h3>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
