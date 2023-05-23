import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/Fi";
// import { GoLocation } from "react-icons/go";
// import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Pizza Delivery - Pizzaaa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              officia sapiente velit eum quam aperiam est rerum non ea corrupti
              vel dolore optio totam dicta nam deleniti a, corporis enim quas?
              Omnis atque veritatis provident assumenda architecto explicabo
              fugit enim consectetur, sunt porro. Amet reiciendis, saepe id nisi
              ullam deserunt illum? Quis veritatis molestias quaerat error
              quisquam labore at doloribus nobis, quia aperiam eius laudantium
              commodi impedit illum natus perspiciatis sequi, voluptatem
              molestiae rem dolore? Repellendus, nulla. Atque delectus deleniti
              facilis voluptas distinctio repellat neque suscipit ipsa sequi
              totam voluptatum quisquam autem ea architecto aut, blanditiis vel
              sunt, laborum harum ex placeat? Eos laborum tempore, natus
              corrupti ducimus optio iusto voluptatem repellendus delectus et
              expedita vero eaque praesentium consectetur provident quos
              facilis. Eaque velit dignissimos maiores fugit veritatis rerum
              modi neque iusto recusandae nam cupiditate adipisci, eum dolor
              commodi ullam veniam, esse cum dolorum. Cum, expedita adipisci
              repellendus dicta culpa voluptatibus accusamus non eum dolor
              aperiam dolore dolorum repudiandae deserunt reiciendis nostrum.
              Quaerat molestiae labore odit libero sit soluta fuga, repudiandae
              facilis accusamus temporibus dolore aut facere nesciunt nulla eum
              fugiat corporis adipisci minima rerum! Repudiandae inventore
              quaerat est officiis perspiciatis suscipit nemo, nihil commodi
              molestias, unde nam consectetur soluta.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning" colSpan={4}>
                    ---Contact Details---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>{/* <GoLocation /> */}</td>
                  <td>{/* <AiOutlineMail /> */}</td>
                </tr>
                <tr>
                  <td>Mumbai</td>
                  <td>123-125634</td>
                  <td>pizzaaa.mumbai@gmail.com</td>
                </tr>
                <tr>
                  <td>Delhi</td>
                  <td>123-925632</td>
                  <td>pizzaaa.delhi@gmail.com</td>
                </tr>
                <tr>
                  <td>Banglore</td>
                  <td>123-725636</td>
                  <td>pizzaaa.banglore@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Row>
              <Image
                src="images/margherita.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  margin: "1rem auto",
                }}
              />
              <Image
                src="images/farmhouse.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  margin: "1rem auto",
                }}
              />
              <Image
                src="images/cheesepepperoni.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  margin: "1rem auto",
                }}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
