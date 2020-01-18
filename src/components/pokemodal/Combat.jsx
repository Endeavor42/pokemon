import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Combat() {
  const [storeCard, statistics] = useContext(DataContext);
  //   storeCard.id && console.log(storeCard.name);

  statistics && console.log(storeCard);

  return (
    <div>
      <h3>{statistics && storeCard.stats[0].stat.name}</h3>
    </div>
  );
}
