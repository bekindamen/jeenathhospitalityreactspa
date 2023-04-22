import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import logo from '../res/logo.png'

export default function BookASample(props){
    const { show, setModel } = props;
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [hospitalName, setHospitalName] = useState('');

    
  
    return (
      <Modal show={show} onHide={()=>setModel(false)}  keyboard={false}>
        <Modal.Header>
          <Modal.Title > 
            <img src={logo} style={{maxHeight:'50px'}} alt="Logo" />
            Book a sample
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formHospitalName">
              <Form.Label>Hospital Name</Form.Label>
              <Form.Control type="text" placeholder="Enter hospital name" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={() => console.log(email, phone, hospitalName)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
