import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "../../common/navbar";
import CartItem from "./cartItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel"

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
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(1),
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
            <Grid xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h4" className={classes.welcomMessage}> Welcome to Shop, Jhone! </Typography> 
            </Grid>
            <Grid container>
              <Grid>
                <Carousel style={{ marginBottom: 50 }} >
                  <Carousel.Item>
                      <img
                      style={{ maxHeight: "60vh", width: "100%" }}
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"
                      alt="First slide"
                      />
                      <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  {/* <Carousel.Item>
                      <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"
                      alt="Second slide"
                      />

                      <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"
                      alt="Third slide"
                      />

                      <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                  </Carousel.Item> */}
              </Carousel>
              </Grid>
            </Grid>
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
