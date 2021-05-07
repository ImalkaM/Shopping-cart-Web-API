import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "../../common/navbar";
import CartItem from "./cartItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 96,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  welcomMessage: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }
}));

export default function View() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="lg">
        <Typography component="div">
          <div className={classes.root}>
            <Typography variant="h4" className={classes.welcomMessage}> Welcome to Shop, Jhone! </Typography> 
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CartItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CartItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CartItem />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CartItem />
              </Grid>
            </Grid>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
