import React from "react";
import "./categories.scss";
import { Col } from "reactstrap";
import CustomButton from "../../components/buttons/Button";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiShareAlt } from "react-icons/bi";
import CustomJumbotron from "../../components/jumbotron/Jumbotron";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="category">
      <div className="category-heading">
        <h3 className="heading__medium heading__medium--categories">
          All Categories
        </h3>
        <CustomButton color="outline-danger">Add Category</CustomButton>
      </div>
      <div>
        <CustomJumbotron>
          <Col md="3" sm="6">
            <h5 className="heading__small">Category name</h5>
            <h6 className="heading__small--link">Category Name</h6>
          </Col>
          <Col md="3" sm="6">
            <h5 className="heading__small">Category page</h5>
            <Link to="/category-products">
              <h6 className="heading__small--link">
                <u>visit page</u>
              </h6>
            </Link>
          </Col>
          <Col md="3" sm="6">
            <h5 className="heading__small">Products</h5>
            <h6 className="heading__small--link">76</h6>
          </Col>
          <Col md="3" sm="6">
            <h5 className="heading__small">Actions</h5>
            <div className="actions-icons">
              <BsPencilSquare className="actions-icons__icon" />
              <BiShareAlt className="actions-icons__icon" />
              <RiDeleteBinLine className="actions-icons__icon" />
            </div>
          </Col>
        </CustomJumbotron>
      </div>
    </div>
  );
}

export default Categories;
