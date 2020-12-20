import React from "react";
import CustomButton from "../../components/buttons/Button";
import "./categoryProduct.scss";
import CustomJumbotron from "../../components/jumbotron/Jumbotron";
import { Col } from "reactstrap";
import CustomModal from "../../components/modal/CustomModal";
import { Link } from "react-router-dom";

const styles = {
  color: "#fff",
};

function CategoryProduct() {
  return (
    <div className="category">
      <div className="category-heading">
        <h3 className="heading__medium heading__medium--categories">
          Categories product
        </h3>
        <div>
          <CustomModal buttonLabel="Add product" className="addModal" />
          <CustomButton color="danger">
            <Link to="/" style={styles}>
              Back to categories
            </Link>
          </CustomButton>
        </div>
      </div>
      <CustomJumbotron>
        <Col md="4" sm="6">
          <h5 className="heading__small">Category name</h5>
          <h6 className="heading__small--link">Category Name</h6>
          <h6 className="heading__small--link">Kafka clothings</h6>
          <h6 className="heading__small--link">Leggings</h6>
        </Col>
        <Col md="4" sm="6">
          <h5 className="heading__small">Product name</h5>
          <h6 className="heading__small--link">Category Name</h6>
          <h6 className="heading__small--link">Category Name</h6>
          <h6 className="heading__small--link">Category Name</h6>
        </Col>
        <Col md="4" sm="6">
          <h5 className="heading__small">Actions</h5>
          <h6 className="heading__small--link">Remove from category</h6>
          <h6 className="heading__small--link">Remove from category</h6>
          <h6 className="heading__small--link">Remove from category</h6>
        </Col>
      </CustomJumbotron>
    </div>
  );
}

export default CategoryProduct;
