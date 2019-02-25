import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginForm = props => {
  return (
    <div className="login-form">
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            {props.type === "signin"
              ? "Login"
              : props.type === "signup"
              ? "Join"
              : null}
          </Header>
          <Form
            size="large"
            onSubmit={e => {
              e.preventDefault();
              props.onFormSubmit(e);
            }}
          >
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="username"
                onChange={e => props.onInputChange(e)}
                value={props.username}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                onChange={e => props.onInputChange(e)}
                value={props.password}
              />

              <Button color="teal" fluid size="large">
                {props.type === "signin"
                  ? "Login"
                  : props.type === "signup"
                  ? "Join"
                  : null}
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
