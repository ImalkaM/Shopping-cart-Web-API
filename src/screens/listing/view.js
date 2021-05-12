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


export default function View(props){

    const [state, setState] = React.useState({qty: '', name: '',});
    const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

    return (
        <Fragment>
            <Navbar headerName="Listing"/>
            <Shipping  
                open={props.state.shippindDetailPopUp} 
                UsershippingDetails={props.state.UsershippingDetails} 
                onClose={props.handleClose}
            />
            <Container maxWidth="lg">
                <div className="root">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <img
                                className="d-block w-100"
                                src={props.itemDetails.imgUrl}
                                alt="lising"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="DescriptionArea">
                                <p className="itemName">{props.itemDetails.name}</p>
                                <div className="itemPrice">Rs:{props.itemDetails.price}/=</div>
                                <div className="itemDiscount">You save Rs: 13.00/= (10%)</div>
                                <div className="itemTaxDes">Local taxes included (where applicable)</div>
                                <p className="itemDescription">{props.itemDetails.description}</p>

                                <table className="selctArea">
                                    <tr>
                                        <td>
                                            <FormControl variant="filled" className="formControl">
                                                <InputLabel htmlFor="filled-age-native-simple">Quntaty</InputLabel>
                                                <Select
                                                    native
                                                    value={state.qty}
                                                    onChange={handleChange}
                                                    label="Quantity"
                                                    inputProps={{
                                                        name: 'qty',
                                                        id: 'filled-age-native-simple',
                                                    }}
                                                >
                                                <option aria-label="None" value="" />
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                </Select>
                                            </FormControl>
                                        </td>
                                    </tr>
                                </table>
                                <div className="buttonArea" >
                                    <Button className="buttonBuy" variant="outlined" onClick={()=>props.handlePay(state.qty)}> Buy now </Button> 
                                </div>
                                <div className="buttonArea" >
                                    <Button className="buttonAdd2cart" variant="outlined" onClick={props.handleAddToCart} > Add to cart </Button> 
                                </div>
                            </div>
                        </Grid>
                        
                    </Grid>
                </div>
            </Container>
        </Fragment>
    )
}
