import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import confused from "../../media/confused.gif";
import Grid from "@mui/material/Unstable_Grid2";

const NotFound = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Typography variant="h3" sx={{ fontSize: 300 }}>
        404
      </Typography>
      <Box sx={{ position: "absolute", top: "calc(100% - 200px)" }}>
        <img src={confused} />
      </Box>
    </Grid>
  );
};

export default NotFound;
