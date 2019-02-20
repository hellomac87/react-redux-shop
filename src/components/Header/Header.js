import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <header>
        <Menu inverted>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="signin"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </header>
    );
  }
}

export default Header;
