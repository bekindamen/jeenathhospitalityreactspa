import { Container, Row, Card, Col, Button,  CardImg, Carousel } from "react-bootstrap";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import "./CSS/CardList.css";
 import star from "../res/star.svg";
import { useState } from "react";
 
  
export default function InfoCards({cards})   {
    
    const [activeIndex, setActiveIndex] =  useState(0);

 

   const   handleCardClick = (id) => {
        // do something
      };
    
      
      const  handleSelect = (selectedIndex, e) => {
       setActiveIndex(selectedIndex)
      };
 

var cardlist =  cards.map((card, index) =>(
<Carousel.Item key={card.id}>
 
  <Card  onClick={() =>  handleCardClick(card.id)} className="card">
   <div className="image-wrapper"> <CardImg draggable={false} className="hov card-image" variant="top" src={card.imgURL}  /></div>
   <Carousel.Caption className="card-container">
      <Button variant="primary" className="card-button">
        <img src={star} alt="favorite" />
      </Button>
      <Card.Title>{card.title}</Card.Title>
      <Card.Text className="card-text">{card.description}</ Card.Text>
    </Carousel.Caption>
  </Card> 
  
  
</Carousel.Item>

))
 
 
  
  return (
    

 
<Carousel activeIndex={activeIndex}  onSelect={ handleSelect} interval={null} indicators={false} keyboard={false} wrap={false}>
 {cardlist}
  </Carousel>
 

  )
 
}

