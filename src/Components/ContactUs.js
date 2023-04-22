import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/ContactUs.css";

export default function ContactUs() {
  return (
    <div>
      {/* Hero section */}
      <div
        className="bg-light text-dark py-5"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
        <h1 className="fw-bold mb-3">Get in touch</h1>
            {/* Contact section */}
      <div className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">Contact information</h2>
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="mb-3">Location</h4>
              <p className="mb-2">
                Mali Mohalla, near Kali Mandir Road 
                <br />
                Doranda
                <br />
                Ranchi, Jharkhand 834002
              </p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="mb-3">Email</h4>
              <p className="mb-2">
                <a href="mailto:info@example.com">pradhanram101@gmail.com</a>
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="mb-3">Phone</h4>
              <p className="mb-2">
                <a href="tel:+1-555-123-4567">+91 9546277227</a>
              </p>
            </div>
          </div>
        </Container>
      </div>
           
        </Container>
      </div>

     

      {/* Map section */}
      <div style={{ height: "400px" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.449985162153!2d85.319180574592!3d23.335706578955595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1ddeb07191b%3A0x4178f150896c28ca!2sJEENATH%20HOSPITALITY%20GARMENTS%20PALACE!5e0!3m2!1sen!2sin!4v1682096079356!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
