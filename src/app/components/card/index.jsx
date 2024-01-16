// "use client";
// import Image from "next/image";
// import clsx from "clsx";
// import { useState } from "react";
// import styles from "@/app/components/card/styles.module.css";

// export default function Card({ url, id }) {
//   const [itsHover, setItsHover] = useState(false);
//   // function de la animation
//   const handleItsHover = () => {
//     setItsHover(true);
//   };

//   const handleMouseOut = () => {
//     setItsHover(false);
//   };
//   //style position
//   const calculateTranslateValues = (id) => {
//     const width = window.innerWidth;
//     let rotation = 0;
//     // Aplicar estilos según el ancho de la pantalla
//     if (width < 1500) {
//       rotation = 0;
//       // Estilos para pantallas pequeñas
//       return {
//         translateValueX: id < 28 ? id * 8 : 8 * (id - 27),
//         translateValueY: id % 2 === 0 ? 0.3 : -0.3,
//         rotation: rotation,
//       };
//     } else {
//       if ((id >= 0 && id <= 27) || (id >= 28 && id <= 55)) {
//         if (id >= 0 && id <= 27) {
//           // Rotación gradual de 1 a 27
//           rotation = (id - 1) * (6 / 26); // Se asume que quieres 180 grados en total
//           rotation += itsHover ? -4 : 0;
//         } else {
//           // Rotación gradual de 28 a 54
//           rotation = (34 - id) * (4 / 26); // Se asume que quieres 180 grados en total
//           rotation += itsHover ? 4 : 0;
//         }
//       }
//       // Estilos para pantallas más grandes
//       return {
//         translateValueX: id < 28 ? id * 2.5 : -2.5 * (id - 27),
//         translateValueY: id % 2 === 0 ? 0.3 : -0.3,
//         rotation: rotation,
//       };
//     }
//   };
//   const { translateValueX, translateValueY, rotation } =
//     calculateTranslateValues(id);
//   let translateYOnHover = itsHover ? -3 : 0;

//   translateYOnHover = itsHover ? translateYOnHover + 0.2 : translateValueY;

//   return (
//     <div
//       onMouseOver={handleItsHover}
//       onMouseOut={handleMouseOut}
//       style={{
//         transform: `rotateZ(${rotation}deg) translate(${translateValueX}rem,${
//           itsHover ? translateYOnHover : translateValueY
//         }rem)`,
//         // visibility: isDroped ? "hidden" : "visible",
//       }}
//       className={clsx(styles.card)}
//     >
//       <Image width={70} height={120} src={url} alt="sakura card" />
//     </div>
//   );
// }
