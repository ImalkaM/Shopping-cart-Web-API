import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function PersistentDrawerLeft() {
  return (
    <div>
      <AppBar position="fixed" className="navigation">
        <Toolbar>
          <div>
            <h2>Shop Cart</h2>
          </div>
          <div className="sigup">
            <Button variant="outline-light" href="/login">Sing in</Button>
            <IconButton aria-label="ShoppingCartIcon" className="ShoppingCartIcon" >
              <ShoppingCartIcon className="CartIcon"  fontSize="medium" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
