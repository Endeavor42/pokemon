import React, { useState, useRef, useLayoutEffect } from "react";
import Fade from "react-reveal/Fade";
import CardGroudon from "./CardGroudon";
import CardRayqueza from "./CardRayqueza";
import CardKayogre from "./CardKayogre";

export default function CardFadeContainer() {
  const [bool, setBool] = useState(false);
  const container = {
    display: "flex",
    justifyContent: "space-evenly"
  };

  const inputRef = useRef();

  return (
    <Fade cascade bottom>
      <div className="cardFadeContainer" style={container}>
        <div>
          <CardRayqueza bool={false} />
        </div>
        <div ref={inputRef}>
          <CardGroudon bool={false} />
        </div>
        <div>
          <CardKayogre bool={false} />
        </div>
      </div>
    </Fade>
  );
}
