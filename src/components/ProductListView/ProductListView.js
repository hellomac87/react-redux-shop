import React from "react";
import { Container, Item, Image } from "semantic-ui-react";

const ProductListView = () => {
  return (
    <Container>
      <Item.Group>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />

          <Item.Content>
            <Item.Header as="a">Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
            </Item.Description>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
};

export default ProductListView;
