import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  center: {
    justifyContent: "center",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary" sx={{ bgcolor: "#add8e6", mt: 10 }}>
        <Container>
          <Toolbar className={classes.center}>
            <Typography variant="body1" color="inherit">
              © 2021 Mytradables.com
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}