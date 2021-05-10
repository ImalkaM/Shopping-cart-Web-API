import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MealPhoto from "../../common/assets/images/meal.png";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  addToCart_btn: {
    float: "right",
    color: "#626567",
    marginBottom: 10,
    "&:hover": {
      color: "#000",
    },
  },
  cardAction: {
    display: "block",
  },
  itemName: {
    fontWeight: 300
  }
}));

export default function View() {
  const classes = useStyles();

  return (
    <Card className="itemCard" >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MealPhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.itemName}>
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom:"0.35em"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species.
          </Typography>
          <Typography variant="h6" color="initial" component="p">
            USD 29.75
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        {/* <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Add to cart</Tooltip>}
          placement="bottom"
        >
          <IconButton
            aria-label="AddShoppingCartIcon"
            className={classes.addToCart_btn}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </OverlayTrigger> */} 
        <Button
          className={classes.addToCart_btn}
          startIcon={<AddShoppingCartIcon />}
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
