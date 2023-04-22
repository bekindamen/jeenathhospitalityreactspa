import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image, Card, Badge } from "react-bootstrap";
import TFrame from "./3DFrame";
   

export default function AboutUs() {
   

  return (
    <Container >
      <Row   className="my-5">
        <Col >
          <h1 className="text-center text-primary">About Us</h1>
          <p   className="text-center">
            Welcome to Jeenath Hospitality Garments, a leading provider of
            high-quality garments designed specifically for patients in
            hospitals. Our products are expertly crafted to provide superior
            comfort, functionality, and practicality, with the needs of the
            patient always at the forefront of our design process. We take great
            pride in our ability to provide garments that not only meet the
            unique needs of patients, but also enhance their overall experience
            in the hospital setting. Our commitment to excellence is evident in
            every aspect of our business, from our superior product design and
            manufacturing processes, to our exceptional customer service and
            support. We understand that the well-being of your patients is your
            top priority, and we share that commitment to delivering the highest
            quality products and services possible. Thank you for choosing
            Jeenath Hospitality Garments for your patient garment needs.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x500" fluid rounded />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="text-primary mb-4">Our Mission</h2>
            <p  className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat faucibus sem, eget laoreet augue. Fusce eu tellus
              aliquam, vestibulum tellus vitae, dignissim dolor. Etiam posuere
              elit eu tortor tincidunt vestibulum.
            </p>
            <a href="/" className="btn btn-primary rounded-pill">
              Learn More
            </a>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="text-primary mb-4">Our Team</h2>
            <Container style={{ maxWidth: "400px" }}>
              <Card className="d-inline">
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://via.placeholder.com/150x150"
                    roundedCircle
                    className="float-left mr-3"
                  />
                  <div>
                    <h5>John Doe</h5>
                    <Badge variant="secondary">Founder & CEO</Badge>
                    <p   className="mt-3 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec placerat faucibus sem, eget laoreet augue.
                    </p>
                  </div>
                </Card.Body>
              </Card>
              <Card className="mt-3 d-inline">
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://via.placeholder.com/150x150"
                    roundedCircle
                    className="float-left mr-3"
                  />
                  <div>
                    <h5>Jane Doe</h5>
                    <Badge variant="secondary">COO</Badge>
                    <p  className="mt-3 mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec placerat faucibus sem, eget laoreet augue.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </Col>
        <Col md={6}>
          <Container className="my-5">
            <Row>
              <Col>
               <TFrame/>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
