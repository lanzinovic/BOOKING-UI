import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://i.pinimg.com/474x/48/40/0e/48400eddf6168338196113abe8c1b81c.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/8f/ff/3a/8fff3a66c8c125ead7570f1616d55811.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/14/79/85/1479851b967b8d22b92d06690dc27d8c.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/8c/b1/46/8cb146eb4623280a9af2e3f96e0e0a84.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/60/91/93/609193f8f271e39272e8ec5119498b60.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/88/6b/d9/886bd9722a24d35cda6f8919fcd0eadc.jpg",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("l")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Nestled in the picturesque surroundings of [City/Location],
                Villa Park Hotel offers a tranquil retreat with breathtaking
                views of the surrounding mountains. This charming hotel combines
                modern comforts with a warm and inviting atmosphere, making it
                the ideal destination for travelers seeking relaxation and
                rejuvenation. Located just minutes away from [Nearby
                Landmark/Attraction], guests can easily explore the rich culture
                and natural beauty of the region. Whether enjoying a gourmet
                meal at our restaurant, unwinding by the pool, or exploring the
                nearby hiking trails, Villa Park Hotel promises a memorable
                stay. Experience the perfect blend of luxury and serenity at
                Villa Park Hotel.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real Heart of krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
