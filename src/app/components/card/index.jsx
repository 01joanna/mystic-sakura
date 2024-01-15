"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import styles from "@/app/components/card/styles.module.css";

export default function Card({ url, id }) {
  const [itsHover, setItsHover] = useState(false);
  // function de la animation
  const handleItsHover = () => {
    setItsHover(true);
  };

  const handleMouseOut = () => {
    setItsHover(false);
  };
  //style position
  const translateValueX = id < 28 ? id * 8 : -8 * (id - 27);
  const translateValueY = id % 2 == 0 ? 0.3 : -0.3;
  // let rotation = 0;
  let translateYOnHover = itsHover ? -3 : 0;
  // if ((id >= 17 && id < 28) || (id >= 44 && id <= 54)) {
  //   if (id >= 17 && id < 28) {
  //     rotation = 2 + (id - 27) * 0.2;
  //     rotation += itsHover ? -5 : 0;
  //   } else {
  //     rotation = -2 - (53 - id) * -0.2;
  //     const a = (rotation += itsHover ? 5 : 0);
  //   }
  // }

  translateYOnHover = itsHover ? translateYOnHover + 0.2 : translateValueY;

  return (
    <div
      onMouseOver={handleItsHover}
      onMouseOut={handleMouseOut}
      style={{
        transform: `translate(${translateValueX}rem,${
          itsHover ? translateYOnHover : translateValueY
        }rem)`,
        // visibility: isDroped ? "hidden" : "visible",
      }}
      className={clsx(styles.card)}
    >
      <Image width={70} height={120} src={url} alt="sakura card" />
    </div>
  );
}
