// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "./context/userContext";

// export default function PokeBerry() {
//   const [wildBerry, setWildBerry] = useState({});
//   const [loading, setLoading] = useState(true);
//   //   const data = useContext(UserContext);

//   useEffect(() => {
//     berries();
//   });

//   const berryId = () => {
//     const min = Math.ceil(1);
//     const max = Math.floor(64);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   // berries
//   const berries = () => {
//     setLoading(true);
//     return axios
//       .get(`https://pokeapi.co/api/v2/berry/${berryId()}`)
//       .then(response => {
//         response.data && setLoading(false);
//         response.data && console.log("Received a berry");
//         setWildBerry(response.data);
//       });
//   };

//   wildBerry.id && console.log(wildBerry);

//   return <div></div>;
// }
