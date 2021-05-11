import Navbar from "../../common/navbar";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Form, Button } from 'react-bootstrap';
import "./style.css"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 96,
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep Me Logged in" />
            </Form.Group> */}
            <Button variant="primary" size="sm" className="loginbtn">
              Log in
            </Button>
              <hr className="seperator" />
            <Button variant="primary" size="sm" className="login-fb">
              Log in with Facebook
            </Button>
            <div className="no-accont"><p>Don't have an account ? Get your <a href="/register">Free account Now</a></p></div>
          </form>
        </div>
      </Container>
    </div>
  );
}
