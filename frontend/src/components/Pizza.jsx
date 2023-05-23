import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Card, Button, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Pizza({ pizza }) {
  // The set function that lets you update the state to a different value and trigger a re-render.
  const [size, setSize] = useState("small");
  const [quantity, setQuantity] = useState(1);

  //for handling Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        style={{
          marginTop: "3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{ height: "12rem", objectFit: "cover", cursor: "pointer" }}
            onClick={handleShow}
          />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <hr />
            <Card.Text>
              <Row style={{ marginBottom: "0.8rem" }}>
                <Col md={6}>
                  <h6>Variants</h6>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {pizza.variants.map((variant) => (
                      <option>{variant}</option>
                    ))}
                  </select>
                </Col>
                <Col md={6}>
                  <h6>Quantity</h6>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(10).keys()].map((value, index) => (
                      <option>{index + 1}</option>
                    ))}
                  </select>
                </Col>
              </Row>
            </Card.Text>
            <Row style={{ display: "flex", alignItems: "center" }}>
              <Col md={6}>Price : Rs {pizza.prices[0][size] * quantity} /-</Col>
              <Col md={6}>
                <Button className="bg-primary text-white">Add to cart</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            variant="top"
            src={pizza.image}
            style={{ height: "12rem", objectFit: "fill" }}
          />
          <h5 style={{ marginTop: "1rem" }}>Description : </h5>
          <h6>{pizza.description}</h6>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Pizza;
