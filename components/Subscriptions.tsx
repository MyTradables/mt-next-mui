import NextLink from "next/link";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AppBar,
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { subscriptions } from "../subscriptiontypes";
import { Subscription } from "../utils/types";

const useStyles = makeStyles({
  center: {
    justifyContent: "center",
  },
});

export default function Subscriptions() {
  const classes = useStyles();

  return (
    <> 
    <AppBar position="static" sx={{marginTop: '10%'}}>
          <Typography  variant="h3" component="div" align="center" sx={{ flexGrow: 1, margin: '20px' }}>
            Subscription Pricing
          </Typography>
      </AppBar>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: 10 }}
    >
      
      <Grid container spacing={0}>
        {subscriptions.map((subscription: Subscription) => (
          <Grid item md={4} key={subscription.id} zeroMinWidth>
            <Card sx={{ maxWidth: 345 }}>
              <Typography sx={{
          bgcolor: `${subscription.color}`,
          color: 'white',
          padding: '15px'

        }} align="center" variant="h4">
                {subscription.title}
              </Typography>

              <div>
                <CardMedia
                  component="img"
                  height="140"
                  image="subscription image"
                  alt="subscription image"
                />
              </div>
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="1"
                  >
                    <Typography>{subscription.features[0]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {subscription.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="2"
                  >
                    <Typography>{subscription.features[1]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Blabla you can only have 10 items in your inventory.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="3"
                  >
                    <Typography>{subscription.features[2]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Blabla you can only have 10 items in your inventory.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </Box>
    </>
  );
}
