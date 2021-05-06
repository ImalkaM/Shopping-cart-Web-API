import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function PersistentDrawerLeft() {
  return (
    <div>
      <AppBar position="sticky" className="navigation">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Shop Cart
          </Typography>
          <div className="sigup">
            <Button variant="outline-light">Sing in</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
