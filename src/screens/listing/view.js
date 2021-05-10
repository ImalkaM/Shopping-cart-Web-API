import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Carousel from "react-bootstrap/Carousel"
import Container from "@material-ui/core/Container"
import Navbar from "../../common/navbar"
import "./style.css"

export default function View(){
    return (
        <Fragment>
            <Navbar />
            <Container maxWidth="lg">
                <div className="root">
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"
                                alt="First slide"
                            />
                            {/* <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
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
                                </Carousel.Item>
                            </Carousel> */}
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <h1>Listing</h1>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Fragment>
    )
}
