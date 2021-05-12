import Navbar from "../../common/navbar";
import React from "react";
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

export default function SignIn(props) {
  const classes = useStyles();

  return (
    <div>
      <Navbar headerName="Login"/>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" name="email" onChange={props.handleLoginData} value={props.state.email}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={props.handleLoginData} value={props.state.password} />
            </Form.Group>
            <Button variant="primary" size="sm" className="loginbtn" onClick={props.handleLogin}>
              Log in
            </Button>
              <hr className="seperator" />
            <Button variant="primary" size="sm" className="login-fb" >
              Log in with Facebook
            </Button>
            <div className="no-accont"><p>Don't have an account ? Get your <a href="/register">Free account Now</a></p></div>
          </form>
        </div>
      </Container>
    </div>
  );
}
