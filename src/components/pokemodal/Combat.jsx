import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export default function Combat() {
  const [storeCard] = useContext(DataContext);
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
    <div>
      <ul className="mt-2">
        {storeCard.stats.map((skills, index) => (
          <li className="skills" key={index}>
            {skills.stat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
