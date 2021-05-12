import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default function Navbar() {
  const [token, setToken] = React.useState();
  const [loop, setLoop] = React.useState(true);
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 1,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  React.useEffect(() => {
    if (loop) {
      let dataset = JSON.parse(localStorage.getItem("document"));
      setToken(dataset);
      setLoop(false);
    }
  });

  function logOut () { 
    localStorage.removeItem("document")
    window.location.reload();
  }

  return (
    <div>
      <AppBar position="fixed" className="navigation">
        <Toolbar>
          <div>
            <h2>Shop Cart</h2>
          </div>
          <div className="sigup">
            {token ? (
              <Fragment>
                <Button className="login-btn" onClick={logOut}>
                  log out
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button href="/login" className="login-btn">
                  Sing in
                </Button>
                <Button
                  href="/register"
                  className="register-btn"
                  variant="outlined"
                >
                  Sing up
                </Button>
              </Fragment>
            )}
            <IconButton
              aria-label="ShoppingCartIcon"
              className="ShoppingCartIcon"
              href="/cart"
            >
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon className="CartIcon" fontSize="medium" />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
