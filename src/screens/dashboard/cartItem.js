import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MealPhoto from "../../common/assets/images/meal.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '&:hover': {
      backgroundColor: "#E5E7E9 ",
    }
  },
  // card : {
  //   transition: theme.transitions.create(["background", "background-color"], {
  //     duration: theme.transitions.duration.complex,
  //   }),
  //   "&:hover": {
      // backgroundColor: "#1B4F72",
  //   },
  // },
  media: {
    height: 140,
  },
  addToCart_btn:{
    float: "right",
    '&:hover': {
      color: '#1976d2'
    }
  },
  overrides: {
    MuiCardActions: {
      root: {
        display: "block"
      },
    },
  },
}));

export default function View() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MealPhoto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="AddShoppingCartIcon" className={classes.addToCart_btn} >
          <AddShoppingCartIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
