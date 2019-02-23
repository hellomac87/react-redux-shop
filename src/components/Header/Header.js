import React, { Component } from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";

class Header extends Component {
  render() {
    const { user, destroyUser, linkTo } = this.props;

    return (
      <header>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item onClick={() => linkTo("/")} name="home" as="a" />
            <Dropdown text="Store" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>iphone</Dropdown.Item>
                <Dropdown.Item>macbook air</Dropdown.Item>
                <Dropdown.Item>macbook pro</Dropdown.Item>
                <Dropdown.Item>imac</Dropdown.Item>
                <Dropdown.Item>imac pro</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position="right">
              <Menu.Item
                onClick={() => linkTo("/account")}
                name="Account"
                as="a"
              />
              {user.username && <Menu.Item name={`user: ${user.username}`} />}

              {user.username ? (
                <Menu.Item onClick={() => destroyUser()} name="logout" />
              ) : (
                <React.Fragment>
                  <Menu.Item
                    onClick={() => linkTo("/auth/signin")}
                    name="signin"
                  />
                  <Menu.Item
                    onClick={() => linkTo("/auth/signup")}
                    name="signup"
                  />
                </React.Fragment>
              )}
            </Menu.Menu>
          </Container>
        </Menu>
      </header>
    );
  }
}

export default Header;
