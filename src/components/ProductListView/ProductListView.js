import React from "react";
import { Container, Item } from "semantic-ui-react";

const ProductListView = ({ products }) => {
  return (
    <Container>
      <Item.Group>
        {products &&
          products.map((item, index) => (
            <Item key={item.id}>
              <Item.Image size="tiny" src={item.mainImgUrl} />

              <Item.Content>
                <Item.Header as="a">{item.title}</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  {item.description}
                  {/* <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
    </Container>
  );
};

export default ProductListView;
