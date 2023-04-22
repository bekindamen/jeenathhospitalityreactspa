import React, { useState } from 'react';
import { Container, Row, Col, Card, CardImg, Form } from 'react-bootstrap';
import { apires } from './apires';
import './CSS/Category.css'

const Category = ({ image, alt, heading, subheading }) => {

    const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = event => {
        setSearchQuery(event.target.value);
      }
    
      const filteredCategories = apires.filter(category =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return (
        <div className="container">
        <Form.Group controlId="search">
          <Form.Control type="text" placeholder="Search categories" onChange={handleSearch} />
        </Form.Group>
        <br/>
        <div className="row  card-deck">
          {filteredCategories.map(category => (
            <Col className="col-md-3" key={category.name}>
              <Card className='' style={{maxWidth:'500px', minWidth:"200px"}}>
                <Card.Body style={{alignItems:'center'}}>
                  <img className='card-img-top' src={category.imgURL}style={{maxWidth:'500px', minWidth:"100px"}} ></img>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
        <br/>
      </div>
      );
};

export default Category;
