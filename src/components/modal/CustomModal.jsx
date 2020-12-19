import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import CustomButton from "../buttons/Button";
import "./modal.scss";
import InputForm from "../form/form";
const CustomModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <CustomButton
        color="outline-danger"
        className="addcategory"
        onClick={toggle}
        centered={true}
      >
        {buttonLabel}
      </CustomButton>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add products to category</ModalHeader>
        <ModalBody>
          <InputForm />
          <div className="product-add">
            <div className="product-names">
              <h3 className="heading__small--link">Product name</h3>
              <h3 className="heading__small--list">Hands free door opener</h3>
              <h3 className="heading__small--list">Hands free door opener</h3>
              <h3 className="heading__small--list">Hands free door opener</h3>
            </div>
            <div className="product-actions">
              <h3 className="heading__small--link">Action</h3>
              <Button color="outline-danger" id="product-add-btn">
                Add
              </Button>
              <Button color="outline-danger" id="product-add-btn">
                Add
              </Button>
              <Button color="outline-danger" id="product-add-btn">
                Add
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CustomModal;
