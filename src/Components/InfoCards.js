import {
  Container,
  Row,
  Card,
  Col,
  Button,
  CardImg,
  Carousel,
  CarouselItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/CardList.css";
import star from "../res/star.svg";
import { useEffect, useState } from "react";
import $ from 'jquery';

export default function InfoCards({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (id) => {
    // go to product page
  };

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  //making card item list
  var cardlist = cards.map((card, index) => (
    <div className="carousel-item" key={card.id}>
      <div
        className="card"
        style={{ alignItems: "center", borderRadius:'8px'  }}
        onClick={() => handleCardClick(card.id)}
      >
        <div className="image-wrapper">
          <CardImg
            style={{ maxHeight: "300px",   width: "auto" }}
            draggable={false}
            className="hov card-image"
            variant="top"
            src={card.imgURL}
          />
        </div>
        <Carousel.Caption className="card-container">
          <Button variant="primary" className="card-button">
            <img src={star} alt="favorite" />
          </Button>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text className="card-text">{card.description}</Card.Text>
        </Carousel.Caption>
      </div>
    </div>
  ));

useEffect(()=>{

  //logic for carousel
  if (window.matchMedia("(min-width: 576px)").matches) {
    
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width()*2;
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on(
      "click",
      function () {
        if (scrollPosition < carouselWidth - cardWidth * 3) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            300
          );
        }
      }
    );
    $("#carouselExampleControls .carousel-control-prev").on(
      "click",
      function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            300
          );
        }
      }
    );
  } else { 
    var intervalTime = 5000;
  
  }
})

  return (<>
    <div class="testimonial-slider">

    <div id="carouselExampleControls" class="carousel carousel-dark" data-bs-ride="carousel">
    <div className="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="testimonial-title">
            <i class="bi bi-quote display-1"></i>
            <h2 class="fw-bold display-6" style={{color:'beige'}}>Our full set collection</h2>
          </div>
          <button
            style={{  backgroundColor: "white" }}
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span  class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            style={{  backgroundColor: "white" }}
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="col-md-8">
          <div
            className="carousel-inner"
            activeIndex={activeIndex}
            onSelect={handleSelect}
            interval={null}
            indicators={false}
            keyboard={false}
            wrap={false}
          >
            {cardlist}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <br/>
</>
  );
}
