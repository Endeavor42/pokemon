// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function PokeBerry() {
//   const [wildBerry, setWildBerry] = useState({});
//   const [loading, setLoading] = useState(true);

//   const { name: berryName } = wildBerry;
//   //   const data = useContext(UserContext);

//   useEffect(() => {
//     berryName && console.log(berryName);
//     berries();
//   }, []);

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
//         response.data && response.data.id && console.log("Received a berry");
//         setLoading(false);
//         response.data.id && setWildBerry(response.data.item);
//       });
//   };

//   return loading ? (
//     <p>loading...</p>
//   ) : (
//     <div>
//       {wildBerry.id && console.log(wildBerry)}
//       <img
//         src={
//           "https://github.com/PokeAPI/sprites/blob/master/sprites/items/berries/" +
//           berryName +
//           ".png"
//         }
//         alt="berry"
//       />
//     </div>
//   );
// }
