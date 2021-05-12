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
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
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

export default function CartItem(props) {
  const classes = useStyles();
  
  return (
    <Card className="itemCard" >
      <CardActionArea onClick={()=>props.handleItemClick(props.item)}>
        <CardMedia
          className={classes.media}
          image={props.item.imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.itemName}>
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: "0.35em" }}>{props.item.description}</Typography>
          <Typography variant="h6" color="initial" component="p">Rs:{props.item.price}/=</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.addToCart_btn}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
