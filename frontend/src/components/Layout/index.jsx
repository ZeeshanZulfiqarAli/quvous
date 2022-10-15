import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';

const Layout = () => {
  return (
    <Grid container><div>test</div><Outlet /></Grid>
  )
}

export default Layout