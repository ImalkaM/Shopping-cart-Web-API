import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Navbar from "../../common/navbar";
import CartItem from "./cartItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/Carousel"
import "./style.css"

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
            <Grid>
              <Carousel>
                <Carousel.Item className="carouselItem">
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3881247/pexels-photo-3881247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500%20500w,%20https://images.pexels.com/photos/3881247/pexels-photo-3881247.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500%201000w"
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/4546132/pexels-photo-4546132.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500%20500w,%20https://images.pexels.com/photos/4546132/pexels-photo-4546132.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500%201000w"
                    alt="Second slide"
                  />
                  {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/4197564/pexels-photo-4197564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500%20500w,%20https://images.pexels.com/photos/4197564/pexels-photo-4197564.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500%201000w\"
                    alt="Third slide"
                  />

                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid container spacing={3} className="items">
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
