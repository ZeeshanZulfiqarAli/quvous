import React from "react";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {

  return (
    <Grid container>
      <Header />

      <Outlet />

      {/* <Footer /> */}
    </Grid>
  );
};

export default Layout;
