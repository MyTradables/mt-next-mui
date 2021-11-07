import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";


const Aboutus = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 10 }}
    >

            <Typography variant="h5" color="text.secondary">
            This is the About us page
            </Typography>


    </Box>
  );
};

export default Aboutus;
