"use client";
import { useDrag } from "react-dnd";
import Image from "next/image";
import clsx from "clsx";
import { useState, useContext } from "react";
import { SakuraContext } from "@/app/context";
import styles from "@/app/components/card/styles.module.css";
import { calculateTranslateValues } from "@/app/utils/card";

export default function Card({ url, id, name }) {
  // llamamamos al contexto:
  const { setIsOpenModal, selectedItemsLength } = useContext(SakuraContext);
  const [itsHover, setItsHover] = useState(false);
  const [isDroped, setIsDroped] = useState(false);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: { name: name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      canDrag: () => {
        if (selectedItemsLength === 3) {
          setIsOpenModal(true);
          return false;
        }
        return true;
      },
    }),
    [selectedItemsLength]
  );
  // function de la animation
  const handleItsHover = () => {
    setItsHover(true);
  };

  const handleMouseOut = () => {
    setItsHover(false);
  };

  const { translateValueX, translateValueY, rotation } =
    calculateTranslateValues(id, itsHover);
  let translateYOnHover = itsHover ? -3 : 0;

  //   translateYOnHover = itsHover ? translateYOnHover + 0.2 : translateValueY;

  return (
    <div
      ref={drag}
      id={id}
      data-testid={`card-${id}`}
      onMouseOver={handleItsHover}
      onMouseOut={handleMouseOut}
      style={{
        transform: `rotateZ(${rotation}deg) translate(${translateValueX}rem,${
          itsHover ? translateYOnHover : translateValueY
        }rem)`,
      }}
      className={clsx(styles.card)}
    >
      <Image width={70} height={120} src={url} alt="sakura card" />
    </div>
  );
}
