import React from "react";
import ProductListView from "../ProductListView";

const MainView = ({ product }) => {
  return (
    <div>
      <ProductListView product={product} />
    </div>
  );
};

export default MainView;
