import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide1 from "../assets/images/slides1.jpg";
import slide2 from "../assets/images/slides2.jpg";
import slide3 from "../assets/images/slides3.jpg";
import slide4 from "../assets/images/slides4.jpg";

function Slideshow() {
  const images = [slide1, slide2, slide3, slide4];

  return (
    <div
      className="bg-zinc-800 "
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Zoom scale={1.4} indicators={false} duration={3000}>
        {images.map((each, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <img
              style={{
                objectFit: "fill",
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
              alt="Slide Image"
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}

export default Slideshow;
