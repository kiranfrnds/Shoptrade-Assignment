import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid container spacing={2} className="footer">
      <Grid item xs={12} md={2}>
        <h3>ABOUT US</h3>
      </Grid>
      <Grid item xs={12} md={2}>
        <h3>BLOGS</h3>
      </Grid>
      <Grid item xs={12} md={3}>
        <h3>TERM AND CONDITIONS</h3>
      </Grid>
      <Grid item xs={12} md={2}>
        <h3>SUPPORT</h3>
      </Grid>
      <Grid item xs={12} md={2.5}>
        <h3>CONTACT US</h3>
      </Grid>
    </Grid>
  );
};

export default Footer;
