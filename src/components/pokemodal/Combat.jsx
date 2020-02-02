import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { ProgressBar } from "react-bootstrap";
import uuid from "uuid";

export default function Combat() {
  const [storeCard] = useContext(DataContext);
  const [increment, setIncrement] = useState(60);

  //   storeCard.id && console.log(storeCard.name);
  useEffect(() => {
    // statistics && console.log(storeCard);
  }, []);

  // async function API(){
  //   const baseUrl = 'http://www.pokestadium.com/sprites/black-white/animated/groudon.gif';
  //   const response = await fetch(baseUrl);
  //   const data = await response.json();
  //   return data;
  // }

  return (
    <>
      {storeCard.stats.map((skills, index) => (
        <div className="skills_container" key={uuid()}>
          <p className="skills" key={uuid()}>
            {skills.stat.name}
          </p>
          <ProgressBar
            key={uuid()}
            variant="length"
            now={storeCard.stats[index].base_stat}
            label={`${storeCard.stats[index].base_stat}`}
          />
        </div>
      ))}
    </>
  );
}
