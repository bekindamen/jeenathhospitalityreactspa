import React from "react";
import { Button } from "react-bootstrap";
  import './CSS/BookingAd.css'

export default function BookingAd  (props)  {
    var {setModel}=props
  return (
    <div className="sample-booking-ad">
      <div className="sample-booking-ad-content">
        <h2 className="sample-booking-ad-heading">Book a Sample Today</h2>
        <p className="sample-booking-ad-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button onClick={setModel} className="sample-booking-ad-button" variant="primary">
          Book Now
        </Button>
      </div>
      <div className="sample-booking-ad-images">
        <img src='https://via.placeholder.com/800x400' alt="Sample Image 1" />
        <img src='https://via.placeholder.com/800x400' alt="Sample Image 2" />
      </div>
    </div>
  );
};

 