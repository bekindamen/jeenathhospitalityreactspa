import { Container, Row, Col, Nav } from "react-bootstrap";
import "./CSS/Footer.css";
import logoPNG from '../res/logo.png'


function Footer(props) {
  var {setModel} = props
  return (
    <footer className="footer mt-auto py-3">
      <Container fluid>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <img
              src={logoPNG}
              style={{maxWidth:'250px', borderRadius:'2px'}}
              alt="Company Logo"
              className="d-inline-block align-top footer-logo"
            />
            <p className="mt-3">
            Welcome to Jeenath Hospitality Garments, the leading provider of high-quality patient garments for hospitals. Our superior comfort, functionality, and practicality reflect our commitment to enhancing the patient experience. We're dedicated to delivering excellence in every aspect of our business, from design to customer service. Thank you for choosing Jeenath Hospitality Garments for your patient garment needs.            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Important Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
              <Nav.Link onClick={setModel} >Book A Sample</Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Our Customers</h5>
            <Nav className="flex-column">
             <Nav.Link href="#cust">Supplier 1</Nav.Link>
              <Nav.Link href="#cust2">Supplier 2</Nav.Link>
              <Nav.Link href="#cust3">Supplier 3</Nav.Link>
          
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Customer Care</h5>
            <p>Email: pradhanram101@gmail.com</p>
            <p>Phone: +91-9546277227</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
