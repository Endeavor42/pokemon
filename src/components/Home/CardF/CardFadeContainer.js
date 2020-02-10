import React, { useState, useRef, useLayoutEffect } from "react";
import Fade from "react-reveal/Fade";
import CardFade from "./CardFade";

export default function CardFadeContainer() {
  const [bool, setBool] = useState(false);
  const container = {
    display: "flex",
    justifyContent: "space-evenly"
  };

  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, [bool]);
  return (
    <Fade cascade bottom>
      <div style={container}>
        <div ref={inputRef}>
          <CardFade bool={false} />
        </div>
        <div>
          <CardFade bool={false} />
        </div>
        <div>
          <CardFade bool={false} />
        </div>
      </div>
    </Fade>
  );
}
