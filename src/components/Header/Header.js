import React, { Component } from "react";
import { Menu, Container, Dropdown } from "semantic-ui-react";

class Header extends Component {
  render() {
    const { user, onLogout, linkTo } = this.props;

    return (
      <header>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item onClick={() => linkTo("/")} name="home" as="a" />
            <Dropdown text="Store" pointing className="link item">
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item onClick={() => linkTo("/store/iphone")}>
                  iphone
                </Dropdown.Item>
                <Dropdown.Item onClick={() => linkTo("/store/macbook")}>
                  macbook
                </Dropdown.Item>
                <Dropdown.Item onClick={() => linkTo("/store/imac")}>
                  imac
                </Dropdown.Item>
                <Dropdown.Item onClick={() => linkTo("/store/watch")}>
                  apple watch
                </Dropdown.Item>
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
                <Menu.Item onClick={() => onLogout()} name="logout" />
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
