import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Here we are!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          soluta quaerat odio? Animi accusamus adipisci fuga dicta, eos
          explicabo! Nisi fuga libero autem, mollitia ab quos expedita error
          quam sapiente optio quibusdam at officia necessitatibus, nostrum nobis
          sint velit sunt ut accusamus perferendis porro in maxime odio! Non,
          doloremque, quo nobis cum recusandae delectus a reiciendis maiores
          voluptatibus accusantium quae illo ullam animi placeat vitae pariatur
          rem. Ullam vero eaque adipisci placeat temporibus veritatis dolorum,
          provident necessitatibus reprehenderit, quis culpa. Vel officia illo
          rerum tenetur quod dolor iste cupiditate, sit, temporibus tempore
          repellat minus natus omnis necessitatibus delectus laboriosam fugit
          doloremque facilis, cumque qui ipsam nemo adipisci minima nihil!
          Beatae, cumque sunt inventore, reprehenderit voluptatem architecto ea,
          sequi voluptates illo sit soluta iusto. Consectetur praesentium
          dolores quae, dignissimos aliquam amet iure tempore eum beatae at
          ipsam nisi suscipit recusandae. Dolor similique doloribus quos dolore
          velit neque rerum earum reiciendis quaerat aut illum adipisci
          explicabo amet, eligendi facilis beatae aliquid quidem accusantium
          assumenda, sequi vel expedita illo mollitia! Cum natus ratione
          possimus iusto voluptatum alias eius facere similique ipsa,
          necessitatibus saepe sint esse atque illo sunt iure minima labore.
          Neque eius itaque praesentium amet excepturi veritatis deserunt illo
          sed modi laudantium!
        </p>
        <Row>
          <h1 style={{ marginTop: "1rem" }}>Our Speciality</h1>
          {/* The following example will result in a 50%/50% split on medium (and large) devices. On small and extra small devices, it will automatically stack (100%): */}
          {/* Remember: the sum of the column values must be equal to 12 */}
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              nihil quae excepturi illo obcaecati voluptatibus dignissimos
              architecto id natus debitis maiores sint dolorem, ut esse dolore
              ipsam reprehenderit doloribus et aliquid corrupti cumque itaque
              autem ratione eum! Saepe ratione pariatur laborum quibusdam hic
              inventore a corporis aspernatur dolores dolorum expedita placeat
              soluta, alias sequi. Perferendis illo ipsa quaerat fuga deserunt
              impedit, nulla voluptatum accusamus earum nisi ab quae eligendi
              doloremque tenetur enim nemo vel. Voluptatum temporibus veniam
              esse similique odio unde. Quaerat eum laboriosam perspiciatis rem
              veritatis, quod aut optio? Iusto temporibus nostrum expedita
              officia, ratione nesciunt quam praesentium pariatur?
            </p>
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              nihil quae excepturi illo obcaecati voluptatibus dignissimos
              architecto id natus debitis maiores sint dolorem, ut esse dolore
              ipsam reprehenderit doloribus et aliquid corrupti cumque itaque
              autem ratione eum! Saepe ratione pariatur laborum quibusdam hic
              inventore a corporis aspernatur dolores dolorum expedita placeat
              soluta, alias sequi. Perferendis illo ipsa quaerat fuga deserunt
              impedit, nulla voluptatum accusamus earum nisi ab quae eligendi
              doloremque tenetur enim nemo vel. Voluptatum temporibus veniam
              esse similique odio unde. Quaerat eum laboriosam perspiciatis rem
              veritatis, quod aut optio? Iusto temporibus nostrum expedita
              officia, ratione nesciunt quam praesentium pariatur?
            </p>
          </Col>
        </Row>
        <Row>
          <h1 style={{ marginTop: "1rem" }}>Our Chef!</h1>
          <Col md={3}>
            <h3>Chef 1</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores ex deleniti, ab eos nam minima facilis doloribus. Rerum
            ullam dolore hic fuga omnis adipisci laborum quae voluptate
            blanditiis laboriosam! Velit quasi nisi at maiores expedita eveniet
            ipsum atque ex?
          </Col>
          <Col md={3}>
            <h3>Chef 2</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores ex deleniti, ab eos nam minima facilis doloribus. Rerum
            ullam dolore hic fuga omnis adipisci laborum quae voluptate
            blanditiis laboriosam! Velit quasi nisi at maiores expedita eveniet
            ipsum atque ex?
          </Col>
          <Col md={3}>
            <h3>Chef 3</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores ex deleniti, ab eos nam minima facilis doloribus. Rerum
            ullam dolore hic fuga omnis adipisci laborum quae voluptate
            blanditiis laboriosam! Velit quasi nisi at maiores expedita eveniet
            ipsum atque ex?
          </Col>
          <Col md={3}>
            <h3>Chef 4</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            maiores ex deleniti, ab eos nam minima facilis doloribus. Rerum
            ullam dolore hic fuga omnis adipisci laborum quae voluptate
            blanditiis laboriosam! Velit quasi nisi at maiores expedita eveniet
            ipsum atque ex?
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
