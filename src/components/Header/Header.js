import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = path => {
    const { history } = this.props;
    history.push(path);
  };

  render() {
    const { user } = this.props;

    return (
      <header>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item
              onClick={() => this.handleItemClick("/")}
              name="home"
              as="a"
            />
            <Menu.Item
              onClick={() => this.handleItemClick("/auth/signin")}
              name="store"
              as="a"
            />
            <Menu.Item
              onClick={() => this.handleItemClick("/")}
              name="account"
              as="a"
            />
            <Menu.Item name={`user: ${user.username}`} />
            {user.username ? (
              <Menu.Item name="logout" />
            ) : (
              <Menu.Item name="signin" />
            )}
          </Container>
        </Menu>
      </header>
    );
  }
}

export default Header;
