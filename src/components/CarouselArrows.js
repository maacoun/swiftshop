import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

function CarouselLeftArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px", // Adjust the size of the circle as needed
        height: "40px", // Adjust the size of the circle as needed
        borderRadius: "50%", // Makes it round
        background: "lightgray", // Light gray background
        cursor: "pointer",
        zIndex: 1, // Ensure the arrow is above the slider
        position: "absolute", // Position absolutely
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Center vertically
      }}
      onClick={onClick}
    >
      <ArrowLeft size={20} color="black" /> {/* Customize size and color */}
    </div>
  );
}

function CarouselRightArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px", // Adjust the size of the circle as needed
        height: "40px", // Adjust the size of the circle as needed
        borderRadius: "50%", // Makes it round
        background: "lightgray", // Light gray background
        cursor: "pointer",
        zIndex: 1, // Ensure the arrow is above the slider
        position: "absolute", // Position absolutely
        top: "50%", // Center vertically
        transform: "translateY(-50%)", // Center vertically
      }}
      onClick={onClick}
    >
      <ArrowRight size={20} color="black" /> {/* Customize size and color */}
    </div>
  );
}

export { CarouselLeftArrow, CarouselRightArrow };
