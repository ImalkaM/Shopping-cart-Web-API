import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Form, Button, Col } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} lg={6} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={6}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <h2>Register now</h2>
          <form className={classes.form}>
            <div className="hm-col2">
              <div className="register-form-wrap">
                <div className="l-form">
                  <Form.Row>
                    <Grid container>
                      <Grid xs={12} sm={12} md={6} lg={6}>
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Grid>
                      <Grid xs={12} sm={12} md={6} lg={6}>
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Grid>
                    </Grid>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="" column md={12}>
                      <Form.Label>Mobile</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="" column md={12}>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="" column md={12}>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="" column md={12}>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                  </Form.Row>
                </div>
              </div>
            </div>
            <Button variant="primary" size="lg" className="loginbtn">
              Register Now
            </Button>
            <div className="no-accont text-center">
              <p>
                Already have an account? <a href="/login"> Login now</a>
              </p>
            </div>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
