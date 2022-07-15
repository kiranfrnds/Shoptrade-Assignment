import React from "react";
import { Grid, Button } from "@mui/material";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import CollectionCarousal from "./CollectionCarousal";
import Product from "./Product";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <p className="suggestion">Free Shipping on over $50</p>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Carousal />
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
          <div>
            <h1>Natural Beauty Starts with Healthy Skin</h1>
            <p>
              BE.YOU Cosmetics – proudly United States natural skincare
              manufacturer for 25 years.
            </p>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 500,
                color: "#fff",
                backgroundColor: "#3E583F",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#5E8760",
                },
              }}
            >
              Shop Now
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <h1
            sx={{ fontFamily: "Americana", fontWeight: 700, fontSize: "36px" }}
          >
            Be you. Yey!
          </h1>
          <p
            sx={{
              fontFamily: "Proxima Nova",
              fontWeight: "400",
              fontSize: "14px",
              letter: "4%",
            }}
          >
            Designed to be part of your weekly hair ritual. Ashwagandha helps to
            thicken fine hair, while Dashmool promotes healthy scalp circulation
            to encourage hair growth. *Based on an independent consumer
            perception study of 20 subjects, men and women aged 18+, after 14
            days of use of the HoliRoots Hair Oil. Conducted in August 2021
          </p>
        </Grid>
        <Grid item xs={12}>
          <CollectionCarousal />
          <hr sx={{ color: "#000" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { md: "flex", xs: "block" }, margin: "0px 100px" }}
        >
          <div className="story-description">
            <h1>We're all a little bit Be.You—and proud of it.</h1>
            <p className="story-paragraph">
              We’re bringing the small but mighty Lupini bean to the party to
              create simple, sustainable, and delicious food that will keep you
              going. Bland flavors and foods with extra baggage are a thing of
              the past. We’re here.
            </p>
            <p className="story-paragraph">
              We’re Be.You. And we’re proud of what's inside.
            </p>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: 500,
                color: "#fff",
                backgroundColor: "#3E583F",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#5E8760",
                },
              }}
            >
              OUR STORY
            </Button>
          </div>

          <img src="../Assets/images/our story image.jpg" alt="story" />
        </Grid>
        <Grid item xs={12} sx={{ height: "100vh" }}>
          <div className="video-image">
            <img
              src="../Assets/Icons/video play button.svg"
              alt="video icon"
              className="video"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Product />
        </Grid>
        <Grid item xs={12} sx={{ display: { md: "flex", xs: "block" } }}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
