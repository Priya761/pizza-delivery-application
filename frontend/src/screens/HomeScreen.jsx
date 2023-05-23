import React from "react";
import AllPizza from "../pizza-data"; // jisse data (object ka array) le rha hai aur
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../components/Pizza"; // jisko data (object) de rha hai, dono included hona chahiye
// The component in which we use map() function to display one component (with the data of a json file) several times, acts as intermediate between the component to which it is sending the data and the json file from which it is taking the data.
//Jahan components ko render karna hota hai, wahan hum map function use karte hain.

function HomeScreen() {
  return (
    <>
      <Container>
        <Row>
          {AllPizza.map((pizzaObject) => (
            <Col md={4}>
              <Pizza pizza={pizzaObject} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomeScreen;
