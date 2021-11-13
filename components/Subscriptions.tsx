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
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { subscriptions } from "../utils/subscriptiontypes";
import { Subscription } from "../utils/types";

const useStyles = makeStyles({
  center: {
    justifyContent: "center",
  },
});

export default function Subscriptions() {
  return (
    <>
      <Box sx={{ borderRadius:"25px" }}>
        <Paper sx={{ marginTop: "10%" }}>
          <Typography
            variant="h3"
            component="div"
            align="center"
            sx={{ flexGrow: 1, padding: "20px", backgroundColor:"#add8e6", color:"white" }}
          >
            Subscriptions
          </Typography>
        </Paper>
      </Box>
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
                <Typography
                  sx={{
                    bgcolor: `${subscription.color}`,
                    color: "white",
                    padding: "15px",
                  }}
                  align="center"
                  variant="h4"
                >
                  {subscription.title}
                </Typography>

                <div>
                  <CardMedia
                    component="img"
                    height="250"
                    image={subscription.image}
                    alt="subscription image"
                  />
                </div>
                <div>
                  {subscription.features.map((feature, j) => (
                    <Accordion key={j}>
                      <AccordionSummary>
                        <Typography variant="subtitle2">
                          {feature.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2">
                          {feature.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
