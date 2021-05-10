import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Navbar from "../../common/navbar"
import Shipping from "../../common/shipping/checkout"
import "./style.css"


export default function View(){

    const [state, setState] = React.useState({age: '', name: 'hai',});
    const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    return (
        <Fragment>
            <Navbar />
            <Shipping />
            <Container maxWidth="lg">
                <div className="root">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <img
                                className="d-block w-100"
                                src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w"
                                alt="lising"
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
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="DescriptionArea">
                                <p className="itemName">Listing Name</p>
                                <div className="itemPrice">USD 32.05</div>
                                <div className="itemDiscount">You save USD 5.93 (15%)</div>
                                <div className="itemTaxDes">Local taxes included (where applicable)</div>
                                <p className="itemDescription">
                                    This beautiful stained glass suncatcher Red Cardinals on berries window hanging can be an unforgettable gift for any person!
                                    This stained glass suncatcher window and wall hanging could be perfect decor for your home and garden. It's a good accessory for your interior.
                                </p>

                                <table className="selctArea">
                                    <tr>
                                        <td>
                                            <FormControl variant="filled" className="formControl">
                                                <InputLabel htmlFor="filled-age-native-simple">Quntaty</InputLabel>
                                                <Select
                                                    native
                                                    value={state.age}
                                                    onChange={handleChange}
                                                    label="Age"
                                                    inputProps={{
                                                        name: 'age',
                                                        id: 'filled-age-native-simple',
                                                    }}
                                                >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                                </Select>
                                            </FormControl>
                                        </td>
                                        <td>
                                            <FormControl variant="filled" className="formControl">
                                                <InputLabel htmlFor="filled-age-native-simple">Color</InputLabel>
                                                <Select
                                                native
                                                value={state.age}
                                                onChange={handleChange}
                                                label="Age"
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Red</option>
                                                <option value={20}>Green</option>
                                                <option value={30}>Blue</option>
                                                </Select>
                                            </FormControl>
                                        </td>
                                    </tr>
                                </table>
                                <div className="buttonArea" >
                                    <Button className="buttonBuy" variant="outlined"> Buy now </Button> 
                                </div>
                                <div className="buttonArea" >
                                    <Button className="buttonAdd2cart" variant="outlined" href="cart"> Add to cart </Button> 
                                </div>
                            </div>
                        </Grid>
                        
                    </Grid>
                </div>
            </Container>
        </Fragment>
    )
}
