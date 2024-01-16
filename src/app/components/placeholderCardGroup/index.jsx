"use client";
import React from "react";

import PlaceholderCard from "@/app/components/placeholderCard";
import { SakuraContext } from "@/app/context";
import { useContext, useState } from "react";

export default function PlaceholderCardGroup() {
  const [count, setCount] = useState(0);
  const { isOpenModal, handleCloseModal } = useContext(SakuraContext);
  const isAllCardsRevealed = count === 3 ? false : true;
  return (
    <section
      className={
        "mt-[9rem] mb-[4rem] flex flex-row gap-[2rem] items-center justify-center lg:mt-[0] lg:mb-[2rem] min-[1400px]:mt-[-6rem]  min-[1400px]:mb-[0] "
      }
    >
      <PlaceholderCard
        setCount={setCount}
        className={"past"}
        time={"PASADO"}
        isClickable={false}
        notChangeStyles={true}
        background={"bg-purpleDrak"}
        predictionTime="pasado"
      />
      <PlaceholderCard
        setCount={setCount}
        className={"present"}
        time={"PRESENTE"}
        background={"bg-blueDark"}
        predictionTime="present"
      />
      <PlaceholderCard
        setCount={setCount}
        className={"future"}
        time={"FUTURO"}
        background={"bg-blueLigth"}
        predictionTime="futuro"
      />
    </section>
  );
}
