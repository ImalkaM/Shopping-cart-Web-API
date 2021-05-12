import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../common/navbar";
import { Container } from "@material-ui/core"
import { DropdownButton, Dropdown, Button } from "react-bootstrap"
import Pic from "../../common/assets/images/meal.png"
import Shipping from "../../common/shipping/checkout"
import "./style.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 96,
    // "&:hover": {
    //   border: "-1px solid rgba(0, 0, 0, 0.50)",
    // },
  },
  media: {
    height: 140,
  },
  addToCart_btn: {
    width: "100%",
    marginBottom: 10,
    "&:hover": {
      color: "#000",
    },
  },
  cardAction: {
    display: "block",
  },

  welcomMessage: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  itemCard: {
    display: 'flex',
    marginBottom: theme.spacing(1)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 155
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  table: {
    width: "100%"
  },
  tableRow: {
    float: "right"
  },
  subtotal: {
    fontWeight: 650
  }
}));

export default function View(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar headerName="Shop Cart"/>
      <Shipping
        open={props.state.shippindDetailPopUp}
        UsershippingDetails={props.state.UsershippingDetails}
        onClose={props.handleClose}
      />
      <Container maxWidth="lg" >
        <div className={classes.root}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" className={classes.welcomMessage}>{props.state.cartItems.length + " "}item in your cart </Typography>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              {props.state.cartItems.length !== 0 ? props.state.cartItems.map((item) => {
                return (
                  <React.Fragment>
                    <div className={classes.itemCard}>
                      <CardMedia
                        className={classes.cover}
                        image={item.imgUrl}
                        title="Live from space album cover"
                      />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Grid container spacing={3}>
                            <Grid item xs={12} sm={8} md={8} lg={8} >
                              <Typography component="h5" variant="h5"> {item.name} </Typography>
                              <Typography variant="subtitle1" color="textSecondary"> {item.description} </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                              <div style={{ textAlign: "center" }}>
                                <DropdownButton id="dropdown-basic-button" title="Quantity" variant="secondary">
                                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </DropdownButton>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid container spacing={3}>
                            <Grid item xs={12} sm={8} md={8} lg={8} >
                              <Button variant="outline-danger" onClick={()=>props.handleDeletItem(item._id)}>Remove</Button>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                              <Typography variant="h6" color="initial" component="p" style={{ textAlign: "center" }}>Rs:{item.price}/=</Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                )
              }) : null}
            </Grid>

            {/* right side */}
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <div className="pay">
                {/* <CardActionArea> */}
                <CardContent>
                  <table className={classes.table}>
                    <tr>
                      <td> <span>Item(s) total </span></td>
                      <td className={classes.tableRow}> <span>USD 59.09</span> </td>
                    </tr>
                    <tr>
                      <td> <span>Discount</span></td>
                      <td className={classes.tableRow}> <span>-USD 29.75</span> </td>
                    </tr>
                  </table>
                  <hr />
                  <table className={classes.table}>
                    <tr>
                      <td> <span className={classes.subtotal} >Subtotal</span></td>
                      <td className={classes.tableRow}> <span>USD 59.09</span> </td>
                    </tr>
                    <tr>
                      <td> <span>Shipping</span></td>
                      <td className={classes.tableRow}> <span>+USD 29.75</span> </td>
                    </tr>
                  </table>
                  <hr />
                  <table className={classes.table}>
                    <tr>
                      <td> <span className={classes.subtotal} >Total (1 Item)</span></td>
                      <td className={classes.tableRow}> <Typography variant="h6" color="initial" component="p">USD 29.75</Typography> </td>
                    </tr>
                  </table>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions className={classes.cardAction}>
                  <Button
                    className={classes.addToCart_btn}
                    startIcon={<AddShoppingCartIcon />}
                    onClick={props.handlePay}
                  >
                    Pay
                  </Button>
                </CardActions>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
