import { Container, Navbar, Nav, Form, FormControl, Button, NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css'
import logoPNG from '../res/logo.png'

export default function Header(props){
var {setmodal} = props
    return(
        <Navbar bg='info'  expand="lg"  >
      <Container>
        <Navbar.Brand href="/" >
          <img 
            src={logoPNG}
            style={{ maxWidth:'90px',  borderRadius:'2px'}}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/contactus'>Contact Us</NavLink>
            <NavLink href='/aboutus'>About Us</NavLink>
            <NavLink variant="primary" onClick={() =>  setmodal(true)}>Book A Sample</NavLink>
          </Nav> 
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}