import { NextPage } from "next";
import Image from 'next/image'
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";


const AboutusDisplay: NextPage = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper elevation={0} sx={{ margin: 10 }} >
          <Typography variant="h2" color="text.secondary">
            We are mytradables
          </Typography>
        </Paper>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper elevation={3} sx={{ padding: 5 }} >
          <Image
            src='/img/bee.svg'
            alt='mt-logo'
            height={250}
            width={300}
          />
          <Typography variant="h4" color="text.secondary" align="center" sx={{ mt: 5 }} >
            My Tradables.com
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ padding: 5 }} >
          <Typography variant="h4" color="text.secondary" sx={{ marginTop: 3, marginBottom: 3 }}>
            Who?
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We are mytradables Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet semper libero, ut gravida quam varius eu. Curabitur eu quam imperdiet, suscipit nibh nec, pellentesque felis. Fusce egestas augue in neque commodo ullamcorper. Cras aliquet egestas laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin posuere dapibus sagittis. Etiam at nisl facilisis, aliquam metus ut, aliquet mauris. Morbi leo ligula, tincidunt vel nunc id, fringilla pretium nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sit amet diam id cursus. Donec euismod urna vitae lorem efficitur, sit amet consectetur nisl feugiat.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default AboutusDisplay;
