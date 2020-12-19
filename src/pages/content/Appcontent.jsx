import React from "react";
import "./content.scss";
import SideBar from "../../components/sidebar/SideBar";
import Categories from "../Allcategories/Categories";
import CategoryProduct from "../Products/CategoryProduct";
import { Route } from "react-router-dom";

function Appcontent() {
  return (
    <div className="content">
      <SideBar />
      <Route exact path="/category-products" component={CategoryProduct} />
      <Route exact path="/" component={Categories} />
    </div>
  );
}

export default Appcontent;
