import React, { Component, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InfoCard from "./Components/InfoCards";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import BookASample from "./Components/BookASample";
import AboutUs from "./Components/AboutUs";
import { apires } from "./Components/apires";
import Category from "./Components/Category";
import BookingAd from "./Components/BookingAd";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header  setmodal={setShowModal} />
        <BookASample show={showModal}  setModel={setShowModal}/>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <InfoCard cards={apires} />
                <Category />
              </div>
            }
          />
          <Route
            path="/aboutus"
            element={
              <div>
                <AboutUs />
              </div>
            }
          />
          <Route
            path="/contactus"
            element={
              <div>
                <ContactUs />
              </div>
            }
          />
        </Routes>
        <BookingAd  setModel={setShowModal}/>
        <Footer   setModel={setShowModal} />
      </div> 
    </Router>
  );
}
